import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Test the validation schemas directly (same schemas used in the route)
const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().max(10000),
});

const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(50),
  systemPrompt: z.string().max(20000),
});

describe('Chat API validation', () => {
  it('accepts valid request', () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: 'user', content: 'Hello' }],
      systemPrompt: 'You are a helpful assistant.',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.messages).toHaveLength(1);
    }
  });

  it('rejects empty messages', () => {
    const result = ChatRequestSchema.safeParse({
      messages: [],
      systemPrompt: 'test',
    });
    expect(result.success).toBe(false);
  });

  it('rejects too many messages', () => {
    const messages = Array.from({ length: 51 }, (_, i) => ({
      role: 'user' as const,
      content: `Message ${i}`,
    }));
    const result = ChatRequestSchema.safeParse({
      messages,
      systemPrompt: 'test',
    });
    expect(result.success).toBe(false);
  });

  it('rejects message content over 10000 chars', () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: 'user', content: 'x'.repeat(10001) }],
      systemPrompt: 'test',
    });
    expect(result.success).toBe(false);
  });

  it('rejects system prompt over 20000 chars', () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: 'user', content: 'Hello' }],
      systemPrompt: 'x'.repeat(20001),
    });
    expect(result.success).toBe(false);
  });

  it('rejects invalid role', () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: 'system', content: 'Hello' }],
      systemPrompt: 'test',
    });
    expect(result.success).toBe(false);
  });

  it('rejects missing systemPrompt', () => {
    const result = ChatRequestSchema.safeParse({
      messages: [{ role: 'user', content: 'Hello' }],
    });
    expect(result.success).toBe(false);
  });
});
