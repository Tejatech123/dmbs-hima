import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Criminal from '@/models/Criminal';

export async function GET() {
  try {
    await connectDB();
    const criminals = await Criminal.find({}).sort({ created_at: -1 });
    return NextResponse.json(criminals);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch criminals' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const criminal = await Criminal.create(body);
    return NextResponse.json(criminal, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
