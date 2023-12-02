import { NextResponse, NextRequest } from 'next/server';
import { searchMediaContent } from '@services/api';

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search');
    if (!query) {
      return NextResponse.json({ error: 'No search query provided' }, { status: 400 });
    }
    const results = await searchMediaContent(query);
    return NextResponse.json(results);
  } catch {
    return NextResponse.json({ error: 'Cant get search results' }, { status: 500 });
  }
}
