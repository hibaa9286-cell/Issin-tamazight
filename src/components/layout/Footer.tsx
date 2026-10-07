import React from 'react';
import Link from 'next/link';
import { 
  Landmark, 
  GraduationCap, 
  BookOpenCheck, 
  Users, 
  Heart, 
  Sparkles,
  MapPin,
  Compass,
  FileCheck
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-amazigh-darkBg via-amazigh-darkCard to-black border-t border-amazigh-darkBorder text-slate-400 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Cultural Vision */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-cyan-600 p-[2px]">
                <div className="w-full h-full bg-amazigh-darkBg rounded-[10px] flex items-center justify-center">
                  <span className="text-xl font-bold text-amber-400 tifinagh-font">ⵣ</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-amber-100">أگـــــرّام (AGY-AMAZIGH)</span>
                <span className="text-xs text-amber-400/80 font-mono">ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⴰⵏⴰⵡⴰⵢⵜ</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              منصة رقمية تفاعلية موحدة مخصصة للتأصيل الحضاري، الهندسة اللغوية، والتعليم الرقمي المدمج للغة والثقافة الأمازيغية. تهدف إلى تعزيز الوحدة الوطنية وصون التراث الإنساني لشمال إفريقيا.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['القبائلية ⵜⴰⵇⴱⴰⵢⵍⵉⵜ', 'الشاوية ⵜⴰⵛⴰⵡⵉⵜ', 'التارقية ⵜⴰⵎⴰⵌⴰⵇ', 'المزابية ⵜⴰⵎⵣⴰⴱⵜ', 'الشنوية ⵜⴰⵛⵏⵡⵉⵜ'].map((variant, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-amber-300 font-medium"
                >
                  {variant}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Pillar 1 & 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2 border-b border-amber-500/20 pb-2">
              <Landmark className="w-4 h-4 text-amber-400" />
              <span>المتحف والتأصيل</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/museum" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-slate-500" />
                  المتحف الرقمي التفاعلي
                </Link>
              </li>
              <li>
                <Link href="/museum#documentary" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                  مركز الإنتاج السمعي البصري
                </Link>
              </li>
              <li>
                <Link href="/museum#map" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  خريطة الإسهامات الحضارية
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Pillar 2 (LMS) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2 border-b border-cyan-500/20 pb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>مسارات التعلم LMS</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/learning/primary" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-slate-500" />
                  الطور الابتدائي (التلعيب Gamification)
                </Link>
              </li>
              <li>
                <Link href="/learning/middle" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-slate-500" />
                  الطور المتوسط (القواعد والحوارات)
                </Link>
              </li>
              <li>
                <Link href="/learning/secondary" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-slate-500" />
                  الطور الثانوي (تحليل النصوص والتحليل)
                </Link>
              </li>
              <li>
                <Link href="/collaborative#guides" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-slate-500" />
                  أدلة الأساتذة وأولياء الأمور
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Pillar 3 & 4 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2 border-b border-emerald-500/20 pb-2">
              <BookOpenCheck className="w-4 h-4 text-emerald-400" />
              <span>المعجم والتعاون</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dictionary" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <BookOpenCheck className="w-3.5 h-3.5 text-slate-500" />
                  البحث متعدد المتغيرات
                </Link>
              </li>
              <li>
                <Link href="/dictionary#lexical-commons" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                  إبراز المشترك المعجمي
                </Link>
              </li>
              <li>
                <Link href="/collaborative" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  بوابة الخبراء واستقطاب الكفاءات
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© 2026 منصة أگـــــرّام AGY-AMAZIGH. تصميم وتنفيذ هندسي متكامل.</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>صُنعت بشغف للحفاظ على الهوية والتراث اللغوي الأمازيغي</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
