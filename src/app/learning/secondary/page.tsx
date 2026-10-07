"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Layers, 
  BookOpen, 
  Edit3, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Bookmark, 
  CheckCircle2,
  Volume2
} from 'lucide-react';

export default function SecondaryLearningPage() {
  const [activeAnalysisSection, setActiveAnalysisSection] = useState<'POETRY' | 'HISTORY' | 'SYNTAX'>('POETRY');

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      
      {/* HEADER */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-amazigh-darkBg to-amazigh-darkCard space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-lg">
              <Layers className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400 tifinagh-font">ⴰⵍⵎⵎⵓⴷ ⴰⵙⵉⵏⴰⵏ</span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  الطور الثانوي الأكاديمي
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white mt-1">
                تحليل النصوص الأدبية والتاريخية والإنتاج الكتابي
              </h1>
            </div>
          </div>

          <Link href="/learning" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-2 border border-white/10">
            <span>العودة للأطوار</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          وحدات دراسية أكاديمية متقدمة لطلاب مرحلة التعليم الثانوي (السنة 1، 2، 3 ثانوي - تحضير البكالوريا). تشمل دراسة الأدب الأمازيغي الشفهي والكتابي، تحليل قصائد الحكمة (Asfru)، الصرف والنحو المعمّق، والتعبير التحريري بخط التيفيناغ.
        </p>

        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          <button
            onClick={() => setActiveAnalysisSection('POETRY')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeAnalysisSection === 'POETRY'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>تحليل شعر الحكمة (Asefru n Tmusni)</span>
          </button>

          <button
            onClick={() => setActiveAnalysisSection('HISTORY')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeAnalysisSection === 'HISTORY'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>تحليل النصوص التاريخية والمخطوطات</span>
          </button>

          <button
            onClick={() => setActiveAnalysisSection('SYNTAX')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeAnalysisSection === 'SYNTAX'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Edit3 className="w-4 h-4 text-cyan-300" />
            <span>الصرف والنحو المعمّق والإنتاج</span>
          </button>
        </div>
      </div>

      {/* SECTION CONTENT */}
      {activeAnalysisSection === 'POETRY' && (
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 tifinagh-font">Tasleḍt n Usefru</span>
              <h2 className="text-xl font-bold text-white">التحليل البلاغي لقصيدة الحكمة والأخلاق</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              السنة الثالثة ثانوي (بكالوريا)
            </span>
          </div>

          {/* Literary Text Box */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/30 space-y-3 font-serif">
            <span className="text-xs font-bold text-amber-400 block font-sans">النص الأدبي المقترح للتحليل:</span>
            <p className="text-lg text-emerald-200 leading-relaxed font-bold font-mono">
              "Awin yebɣan tamusni, ad iswel ar lqas: nnefɛa n wawal d tidet, tin n tussna d ssfa."
            </p>
            <span className="text-xs text-amber-300 tifinagh-font block font-sans">
              ⴰⵡⵉⵏ ⵢⴱⵖⴰⵏ ⵜⴰⵎⵓⵙⵏⵉ, ⴰⴷ ⵉⵙⵡⵍ ⴰⵔ ⵍⵇⴰⵙ: ⵏⵏⴼⵄⴰ ⵯ ⵡⴰⵡⴰⵍ ⵯ ⵜⵉⴷⵜ, ⵜⵉⵏ ⵯ ⵜⵓⵙⵏⴰ ⵯ ⵙⵙⴼⴰ.
            </span>
            <p className="text-xs text-slate-300 pt-2 border-t border-white/10 font-sans">
              <strong>الترجمة الأدبية:</strong> من يسعى لامتلاك الحكمة فليغرف من النبع النقي، فنفع الكلام في صدقه ونفع العلم في صفائه.
            </p>
          </div>

          {/* Critical Analysis breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-amber-300">1. المستوى المعجمي (Amawalan):</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                استخدام مفردات ذات تأصيل قيمي مثل (Tamusni - الحكمة)، (Tidet - الحقيقة)، و (Ssfa - الصفاء).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-cyan-300">2. الصور البلاغية (Tisebba/Tineflit):</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                استعارة النبع الصافي للإشارة لصفاء المعرفة والمعادلة التوازنية بين الصدق والنفع.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-emerald-300">3. الإيقاع والسجع (Anekwa n Usefru):</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                تطابق الإيقاع الصوتي في الفواصل القافية (Lqas / Ssfa) لمنح القصيدة جرس موسيقياً شفهياً.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeAnalysisSection === 'HISTORY' && (
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 tifinagh-font">Tira d Idlisen n Zik</span>
              <h2 className="text-xl font-bold text-white">دراسة المخطوطات والوثائق التاريخية الوطنية</h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 space-y-3">
            <h4 className="text-sm font-bold text-amber-300">وثيقة المعاهدات والنقوش المزدوجة</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              تستعرض هذه الوحدة دراسة نقدية للنصوص المنقوشة على الضباط والنصب التذكارية في الجزائر، والتي تثبت تطور خط التيفيناغ واستخدامه في المعاملات والتسجيل التاريخي منذ عهد نوميديا.
            </p>
          </div>
        </div>
      )}

      {activeAnalysisSection === 'SYNTAX' && (
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 tifinagh-font">Tasnalɣa d Tseddast</span>
              <h2 className="text-xl font-bold text-white">الصرف والنحو المتقدم والإنتاج التحريري الرسمي</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-cyan-300">تصريف الأفعال في الصيغ المركبة</h4>
              <p className="text-xs text-slate-400">دراسة صيغة غير المحقق (Izri / Ad-yaru) والصيغ الاعتيادية التكرارية.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-amber-300">منهجية إعداد مقال التعبير الأكاديمي</h4>
              <p className="text-xs text-slate-400">طريقة صياغة المقدمة، العرض، والخاتمة بخط التيفيناغ مع الالتزام بالمعيارية.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
