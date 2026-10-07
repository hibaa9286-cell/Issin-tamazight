"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpenCheck, 
  MessageSquare, 
  Headphones, 
  FileText, 
  ArrowRight, 
  Play, 
  Volume2, 
  CheckCircle2, 
  Sparkles,
  Layers,
  RotateCcw
} from 'lucide-react';

export default function MiddleLearningPage() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isSentenceCorrect, setIsSentenceCorrect] = useState<boolean | null>(null);

  // Interactive Sentence Builder Exercise: " كتب التلميذ الكتاب " -> "Yura unelmad adlis"
  const targetWords = ['Yura', 'unelmad', 'adlis'];
  const poolWords = ['adlis', 'Yura', 'unelmad', 'Tafukt', 'Aman'];

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
    setIsSentenceCorrect(null);
  };

  const handleCheckSentence = () => {
    const userString = selectedWords.join(' ');
    const targetString = targetWords.join(' ');
    setIsSentenceCorrect(userString === targetString);
  };

  const handleReset = () => {
    setSelectedWords([]);
    setIsSentenceCorrect(null);
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      
      {/* HEADER */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-amazigh-darkBg to-amazigh-darkCard space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg">
              <BookOpenCheck className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 tifinagh-font">ⴰⵍⵎⵎⵓⴷ ⴰⵎⵙⵎⴰⵙ</span>
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                  الطور المتوسط (القواعد والحوارات)
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white mt-1">
                وحدات القواعد، بناء الجمل التركيبية، والحوارات
              </h1>
            </div>
          </div>

          <Link href="/learning" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-2 border border-white/10">
            <span>العودة للأطوار</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          وحدات دراسية منظمة وفق المقررات المعتمدة في المدارس الوطنية الابتدائية والمتوسطة (السنة 1، 2، 3، 4 متوسط). تركز على قواعد النحو والصرف، بناء الجمل الحوارية، وفهم الاستماع.
        </p>
      </div>

      {/* SECTION 1: INTERACTIVE SENTENCE BUILDER */}
      <div className="glass-panel p-8 rounded-3xl border-cyan-500/30 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-cyan-400" />
            <div>
              <h2 className="text-xl font-bold text-white">تطبيق تفاعلي: تركيب الجملة الفعلية (VSO)</h2>
              <p className="text-xs text-slate-400">رتّب الكلمات لتكوين جملة فعلية أمازيغية صحيحة بمعنى "كتب التلميذ الكتاب"</p>
            </div>
          </div>
          <button onClick={handleReset} className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white text-xs flex items-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة</span>
          </button>
        </div>

        {/* Selected Drop Target */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-dashed border-cyan-500/40 min-h-[90px] flex items-center justify-center flex-wrap gap-3">
          {selectedWords.length === 0 ? (
            <span className="text-xs text-slate-500">اختر الكلمات بالترتيب الصحيح من الصندوق أدناه...</span>
          ) : (
            selectedWords.map((word, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-sm shadow-md animate-in zoom-in-95">
                {word}
              </span>
            ))
          )}
        </div>

        {/* Word Pool */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400">بنك الكلمات المتوفرة:</span>
          <div className="flex flex-wrap gap-3">
            {poolWords.map((word, idx) => {
              const isUsed = selectedWords.includes(word);
              return (
                <button
                  key={idx}
                  disabled={isUsed}
                  onClick={() => handleWordClick(word)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    isUsed 
                      ? 'opacity-30 bg-white/5 border-white/5 text-slate-500 cursor-not-allowed'
                      : 'bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border-white/10'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        </div>

        {/* Validation Button */}
        <div className="pt-2 flex items-center justify-between border-t border-white/10">
          <div>
            {isSentenceCorrect === true && (
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                ممتاز! ترتيب الجملة صحيح (Yura unelmad adlis = كتب التلميذ الكتاب).
              </span>
            )}
            {isSentenceCorrect === false && (
              <span className="text-xs font-bold text-rose-400">
                إجابة غير دقيقة. تذكر أن الفعل (Amyag) يتقدم الفاعل (Amassag) في الأمازيغية.
              </span>
            )}
          </div>

          <button
            disabled={selectedWords.length === 0}
            onClick={handleCheckSentence}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md disabled:opacity-50"
          >
            التحقق من صحة التركيب
          </button>
        </div>
      </div>

      {/* SECTION 2: DIALOGUES SIMULATOR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <MessageSquare className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-bold text-white">حوار يومي: التعارف والترحيب (Azul d Uleqqa)</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="font-bold text-amber-300">ماسين (Massin):</div>
              <div className="text-slate-200 font-mono font-bold">Azul fell-awen! D acu i d isem-ik?</div>
              <div className="text-slate-400 text-[11px]">مرحباً بكم! ما هو اسمك؟</div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="font-bold text-cyan-300">تيزيري (Tiziri):</div>
              <div className="text-slate-200 font-mono font-bold">Azul! Isem-iw Tiziri, nek d tanelmat.</div>
              <div className="text-slate-400 text-[11px]">مرحباً! اسمي تيزيري، وأنا تلميذة.</div>
            </div>
          </div>

          <button 
            onClick={() => {
              if ('speechSynthesis' in window) {
                const utt = new SpeechSynthesisUtterance("Azul fell-awen! Isem-iw Tiziri.");
                window.speechSynthesis.speak(utt);
              }
            }}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-amber-300 text-xs font-bold border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Volume2 className="w-4 h-4" />
            <span>الاستماع للحوار الصوتي المشخص</span>
          </button>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <Headphones className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">تمرين الفهم والاستماع الصوتي</h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            استمع للمقطع الصوتي القصير حول التضامن في القرية (Tawiza) وثم أجب عن أسئلة الفهم.
          </p>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Play className="w-5 h-5 fill-emerald-400" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">مقطع: نظام التويزة والتضامن</div>
                <div className="text-slate-400 text-[10px]">المدة: 01:45 دقيقة</div>
              </div>
            </div>

            <button 
              onClick={() => {
                if ('speechSynthesis' in window) {
                  const utt = new SpeechSynthesisUtterance("Tawiza d tisseft n tmetti tamaziɣt.");
                  window.speechSynthesis.speak(utt);
                }
              }}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs shadow-md"
            >
              تشغيل
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
