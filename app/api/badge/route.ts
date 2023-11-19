import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  return NextResponse.json({
    schemaVersion: 1,
    label: 'site',
    message: 'live',
    color: 'brightgreen',
  });
}
