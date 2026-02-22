import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'newest';

  const orderBy = sort === 'downloads' ? 'downloads DESC' : 'created_at DESC';

  try {
    let result;
    if (category && category !== 'all') {
      result = await pool.query(
        `SELECT id, slug, name, description, category, downloads, created_at
         FROM community_skills
         WHERE category = $1
         ORDER BY ${orderBy}`,
        [category]
      );
    } else {
      result = await pool.query(
        `SELECT id, slug, name, description, category, downloads, created_at
         FROM community_skills
         ORDER BY ${orderBy}`
      );
    }

    return NextResponse.json(result.rows);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Community list error:', error);
    }
    return NextResponse.json({ error: 'Failed to load community skills.' }, { status: 500 });
  }
}
