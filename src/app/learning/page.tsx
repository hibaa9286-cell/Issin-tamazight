"use client";

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Trophy, BookOpen, Layers, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function LearningIndexPage() {
  const levels = [
    {
      id: 'primary',
      title: 'الطور الابتدائي (التلعيب Gamification)',
      tifinagh: 'ⴰⵍⵎⵎⵓⴷ ⴰⵎⵏⵣⵓ',
      description: 'واجهة مخصصة للأطفال والتلاميذ تعتمد على التلعيب (نقاط XP، الشارات، أيام التتابع، الأغاني، الألوان، والقصص المصورة الناطقة) لبناء الرصيد اللغوي الأساسي.',
      href: '/learning/primary',
      badge: 'السنة 3، 4، 5 ابتدائي',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      id: 'middle',
      title: 'الطور المتوسط (القواعد والحوارات)',
      tifinagh: 'ⴰⵍⵎⵎⵓⴷ ⴰⵎⵙⵎⴰⵙ',
      description: 'وحدات منظمة للتركيز على القواعد الأساسية، بناء الجمل التركيبية، الحوارات اليومية، ومهارات الاستماع والفهم المستمر.',
      href: '/learning/middle',
      badge: 'السنة 1، 2، 3، 4 متوسط',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'secondary',
      title: 'الطور الثانوي (تحليل النصوص والإنتاج)',
      tifinagh: 'ⴰⵍⵎⵎⵓⴷ ⴰⵙⵉⵏⴰⵏ',
      description: 'وحدات متقدمة لتحليل النصوص الأدبية والتاريخية الأمازيغية، الصرف والنحو المتقدم، والإنتاج الكتابي الأكاديمي.',
      href: '/learning/secondary',
      badge: 'السنة 1، 2، 3 ثانوي',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border-cyan-500/30 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-bold text-cyan-400 tifinagh-font">ⴰⵍⵎⵎⵓⴷ ⴷ ⵓⵙⵍⵎⴷ</span>
            <h1 className="text-3xl font-extrabold text-white">المحور الثاني: الهندسة البيداغوجية والمسارات التعليمية (LMS)</h1>
          </div>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          مسارات تعليمية متدرجة هرمياً ومكيفة بالكامل مع المناهج الوطنية الرسمية المعتمدة في المدارس. اختر الطور التعليمي للبدء:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((lvl) => (
          <div key={lvl.id} className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all hover-lift flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                {lvl.badge}
              </span>
              <h3 className="text-xl font-bold text-white">{lvl.title}</h3>
              <p className="text-xs font-medium text-amber-400 tifinagh-font">{lvl.tifinagh}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{lvl.description}</p>
            </div>

            <Link
              href={lvl.href}
              className={`w-full py-3 rounded-xl bg-gradient-to-r ${lvl.color} text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-all`}
            >
              <span>استعرض وحدات الطور</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
