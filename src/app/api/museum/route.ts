import { NextRequest, NextResponse } from 'next/server';
import { MUSEUM_DOCUMENTARIES, CULTURAL_MAP_LOCATIONS, TIMELINE_EVENTS } from '@/lib/museum-data';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    documentaries: MUSEUM_DOCUMENTARIES,
    culturalLocations: CULTURAL_MAP_LOCATIONS,
    timelineEvents: TIMELINE_EVENTS
  });
}
