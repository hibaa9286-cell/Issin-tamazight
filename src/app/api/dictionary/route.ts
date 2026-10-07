import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_DICTIONARY_ENTRIES, INITIAL_PROPOSALS } from '@/lib/dictionary-data';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const variant = searchParams.get('variant') || 'ALL';
  const lexicalOnly = searchParams.get('lexicalOnly') === 'true';

  let results = [...INITIAL_DICTIONARY_ENTRIES];

  if (q.trim() !== '') {
    const query = q.trim().toLowerCase();
    results = results.filter(entry => 
      entry.arabicMeaning.toLowerCase().includes(query) ||
      entry.latinTamaziɣt.toLowerCase().includes(query) ||
      entry.tifinagh.includes(query) ||
      (entry.frenchMeaning && entry.frenchMeaning.toLowerCase().includes(query)) ||
      (entry.root && entry.root.toLowerCase().includes(query))
    );
  }

  if (variant !== 'ALL') {
    results = results.filter(entry => 
      entry.variants.some(v => v.dialectCode === variant)
    );
  }

  if (lexicalOnly) {
    results = results.filter(entry => entry.isLexicalCommon);
  }

  return NextResponse.json({
    success: true,
    total: results.length,
    entries: results,
    proposals: INITIAL_PROPOSALS
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newProposal = {
      id: `prop-${Date.now()}`,
      termLatin: body.termLatin,
      termTifinagh: body.termTifinagh,
      arabicMeaning: body.arabicMeaning,
      domain: body.domain || 'عام',
      justification: body.justification,
      status: 'PENDING' as const,
      votesCount: 1,
      authorName: body.authorName || 'باحث لغوي متطوع'
    };

    INITIAL_PROPOSALS.unshift(newProposal);

    return NextResponse.json({
      success: true,
      message: 'تم إرسال اقتراح المصطلح المعياري بنجاح للجنة اللغوية المعتمدة.',
      proposal: newProposal
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'حدث خطأ أثناء معالجة الطلب.' }, { status: 400 });
  }
}
