import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API de revalidation testée avec succès',
    timestamp: new Date().toISOString(),
    status: 'active'
  });
} 