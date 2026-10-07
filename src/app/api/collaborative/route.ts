import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_TEACHER_CONTRIBUTIONS, INITIAL_CULTURAL_POSTS } from '@/lib/collaborative-data';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    contributions: INITIAL_TEACHER_CONTRIBUTIONS,
    posts: INITIAL_CULTURAL_POSTS
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const type = body.type;

    if (type === 'TEACHER_CONTRIB') {
      const newContrib = {
        id: `contrib-${Date.now()}`,
        authorName: body.authorName || 'أستاذ مساهم',
        wilaya: body.wilaya || 'الجزائر العاصمة',
        title: body.title,
        targetLevel: body.targetLevel || 'PRIMARY',
        summary: body.summary,
        createdAt: new Date().toISOString().split('T')[0]
      };
      INITIAL_TEACHER_CONTRIBUTIONS.unshift(newContrib);
      return NextResponse.json({ success: true, message: 'تم نشر المساهمة التعليمية بنجاح.', item: newContrib });
    } else {
      const newPost = {
        id: `post-${Date.now()}`,
        authorName: body.authorName || 'تلميذ متواصل',
        wilayaOrigin: body.wilayaOrigin || 'تيزي وزو',
        category: body.category || 'ثقافة وعادات',
        title: body.title,
        content: body.content,
        likesCount: 1,
        createdAt: 'الآن'
      };
      INITIAL_CULTURAL_POSTS.unshift(newPost);
      return NextResponse.json({ success: true, message: 'تم نشر المشاركة في ملتقى التبادل بنجاح.', item: newPost });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: 'حدث خطأ أثناء معالجة المشاركة.' }, { status: 400 });
  }
}
