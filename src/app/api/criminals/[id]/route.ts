import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Criminal from '@/models/Criminal';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const criminal = await Criminal.findById(params.id);
    if (!criminal) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(criminal);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await request.json();
    const criminal = await Criminal.findByIdAndUpdate(params.id, body, { new: true });
    return NextResponse.json(criminal);
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Criminal.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
