import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().max(10000, 'Message content too long'),
});

const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(50, 'Too many messages'),
  systemPrompt: z.string().max(20000, 'System prompt too long'),
});

export async function POST(request: NextRequest) {
  try {
    // Reject oversized request bodies (100KB limit)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 100_000) {
      return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
    }

    const body = await request.json();
    const parsed = ChatRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request. Check your message format and try again.' },
        { status: 400 }
      );
    }

    const { messages, systemPrompt } = parsed.data;

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI service is not configured. Contact the site administrator.' },
        { status: 503 }
      );
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-latest',
        max_tokens: 2048,
        system: systemPrompt,
        messages: messages.map(m => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        const errorBody = await response.text();
        console.error('Anthropic API error:', errorBody);
      }
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'AI service authentication failed. Contact the site administrator.' },
          { status: 502 }
        );
      }
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit reached. Wait a moment and try again.' },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: 'Claude could not process your request right now. Try again in a few seconds.' },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      content: data.content?.[0]?.text || 'No response was returned. Try rephrasing your message.',
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Chat API error:', error);
    }
    return NextResponse.json(
      { error: 'Something went wrong on our end. Refresh the page and try again.' },
      { status: 500 }
    );
  }
}
