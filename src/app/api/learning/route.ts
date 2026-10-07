import { NextRequest, NextResponse } from 'next/server';
import { LMS_COURSES } from '@/lib/lms-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const level = searchParams.get('level');

  if (level) {
    const course = LMS_COURSES.find(c => c.levelId === level.toUpperCase());
    if (course) {
      return NextResponse.json({ success: true, course });
    }
    return NextResponse.json({ success: false, message: 'الطور التعليمي غير موجود' }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    courses: LMS_COURSES
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, quizAnswers, currentXP } = body;

    // Calculate XP reward
    const addedXP = 50;
    const newTotalXP = (currentXP || 0) + addedXP;

    return NextResponse.json({
      success: true,
      message: 'تم إنهاء الدرس بنجاح واكتساب النقاط!',
      xpAwarded: addedXP,
      newTotalXP,
      badgeUnlocked: 'وسام المشترك المعجمي والتميز البيداغوجي 2026'
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'خطأ أثناء تسجيل النتيجة' }, { status: 400 });
  }
}
