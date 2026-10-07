"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Landmark, 
  GraduationCap, 
  BookOpenCheck, 
  Users, 
  Sparkles, 
  ArrowLeft, 
  Play, 
  Trophy, 
  Flame, 
  CheckCircle2, 
  Search,
  Globe2,
  Layers,
  BookMarked,
  Compass,
  Zap,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const pillars = [
    {
      id: 'museum',
      title: 'المحور الأول: المتحف الرقمي والتأصيل الحضاري',
      tifinagh: 'ⴰⵙⴰⵍⴰⵢ ⴰⵇⴱⵓⵔ',
      subtitle: 'بوابة تاريخية تفاعلية تعود لبدايات الحضارة الأمازيغية',
      description: 'استكشف المقتنيات الرقمية، مركز الفيديو الوثائقي (Live Action & Motion Graphics)، والخريطة التفاعلية للإسهامات الحضارية في شمال إفريقيا.',
      href: '/museum',
      icon: Landmark,
      color: 'from-amber-500 via-amber-600 to-yellow-600',
      badge: 'متحف غامرة 3D & سينما',
      stats: 'أكثر من 50 مقطع وثائقي وخرائط تاريخية'
    },
    {
      id: 'learning',
      title: 'المحور الثاني: المنظومة التعليمية الرقمية (LMS)',
      tifinagh: 'ⴰⵍⵎⵎⵓⴷ ⴷ ⵓⵙⵍⵎⴷ',
      subtitle: 'مسارات متدرجة هرمياً متوافقة مع المناهج الوطنية',
      description: 'تدرج بيداغوجي كامل: الطور الابتدائي المعتمد على التلعيب (XP والقصص)، الطور المتوسط للتركيز على القواعد الحوارية، والطور الثانوي لتحليل النصوص الأدبية والصرف المتقدم.',
      href: '/learning',
      icon: GraduationCap,
      color: 'from-cyan-500 via-blue-600 to-indigo-600',
      badge: 'التلعيب Gamification',
      stats: '3 أطوار تعليمية + أدلة الأساتذة'
    },
    {
      id: 'dictionary',
      title: 'المحور الثالث: المعجم الرقمي الذكي والمشترك',
      tifinagh: 'ⴰⵎⴰⵡⴰⵍ ⵓⵟⵟⵓⵏⵉ',
      subtitle: 'محرك بحث ديناميكي متعدد المتغيرات والتلهجات',
      description: 'ابحث بالعربية، الفرنسية، والتيفيناغ. استكشف المشترك المعجمي بين اللهجات (القبائلية، الشاوية، التارقية، المزابية، الشنوية...) ورشة اعتماد الأمازيغية المعيارية.',
      href: '/dictionary',
      icon: BookOpenCheck,
      color: 'from-emerald-500 via-teal-600 to-green-600',
      badge: 'الذكاء اللغوي Multi-Variant',
      stats: '+15,000 مصطلح موثق بالنطق الصوتي'
    },
    {
      id: 'collaborative',
      title: 'المحور الرابع: البيئة التشاركية واستقطاب الكفاءات',
      tifinagh: 'ⵜⴰⵎⵓⵏⵜ ⴷ ⵓⵎⵢⴰⵡⴰⵙ',
      subtitle: 'فضاء وطني للخبراء، الأساتذة، والتلاميذ',
      description: 'بوابة آمنة لمساهمات الأساتذة من كل ولايات الوطن، وملتقى تبادل ثقافي يكرس الوحدة الوطنية والانسجام الحضاري بين مختلف مناطق الجزائر.',
      href: '/collaborative',
      icon: Users,
      color: 'from-rose-500 via-red-600 to-amber-600',
      badge: 'تشارك وطني 58 ولاية',
      stats: 'مساهمات معتمدة ومنتدى طلابي'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none select-none text-[200px] font-black tifinagh-font text-amber-300">
          ⵣ
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-8">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-glass animate-float">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>المنصة الرقمية الوطنية الموحدة للغة والثقافة الأمازيغية</span>
            <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black">
              AGY 2026
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
            منصة <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">أگـــــرّام</span> الرقمية
            <br />
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
              جسـر الحضارة، العلم، والتعلم الرقمي
            </span>
          </h1>

          {/* Tifinagh Banner Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-amber-400/90 tifinagh-font tracking-widest">
            ⴰⵙⴰⵍⴰⵢ ⵓⵟⵟⵓⵏⵉ • ⴰⵍⵎⵎⵓⴷ ⵉⵎⵙⴷⵉ • ⴰⵎⴰⵡⴰⵍ ⵓⵟⵟⵓⵏⵉ • ⵜⴰⵎⵓⵏⵜ
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
            بيئة تفاعلية عالية الأداء تجمع بين **الـبعد التاريخي للمتحف الرقمي**، **الهندسة البيداغوجية المتكاملة للمناهج الوطنية (LMS)**، **المعجم الرقمي الذكي الموحد للمتغيرات**، و**المنظومة التشاركية للأساتذة والكفاءات الوطنية**.
          </p>

          {/* Direct Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative glass-panel p-2 rounded-2xl border-amber-500/30 flex items-center gap-2 shadow-gold-glow">
              <Search className="w-6 h-6 text-amber-400 mr-3" />
              <input
                type="text"
                placeholder="ابحث عن كلمة في القاموس، درس تعليمي، أو عنصر في المتحف..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-white text-sm focus:outline-none placeholder-slate-400 py-2"
              />
              <Link
                href={`/dictionary?q=${encodeURIComponent(searchQuery)}`}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>بحث ذكي</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            <div className="glass-panel p-4 rounded-xl text-center space-y-1 hover-lift">
              <div className="text-2xl font-black text-amber-400">4 محاور</div>
              <div className="text-xs text-slate-400">شاملة ومتكاملة</div>
            </div>
            <div className="glass-panel p-4 rounded-xl text-center space-y-1 hover-lift">
              <div className="text-2xl font-black text-cyan-400">3 أطوار</div>
              <div className="text-xs text-slate-400">ابتدائي، متوسط، ثانوي</div>
            </div>
            <div className="glass-panel p-4 rounded-xl text-center space-y-1 hover-lift">
              <div className="text-2xl font-black text-emerald-400">+15,000</div>
              <div className="text-xs text-slate-400">مفردة في المعجم الذكي</div>
            </div>
            <div className="glass-panel p-4 rounded-xl text-center space-y-1 hover-lift">
              <div className="text-2xl font-black text-rose-400">58 ولاية</div>
              <div className="text-xs text-slate-400">بيئة تشاركية وطنية</div>
            </div>
          </div>

        </div>
      </section>

      {/* PILLARS SHOWCASE SECTION */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            المحاور الأربعة الأساسية للمنصة
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            منظومة متكاملة تضمن صون التراث، الملاءمة البيداغوجية، الهندسة اللغوية، والانسجام الوطني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="group relative glass-panel p-8 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover-lift flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-amazigh-darkBg rounded-[14px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-amber-300" />
                      </div>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-amber-400/90 tifinagh-font">
                      {pillar.tifinagh}
                    </p>
                    <p className="text-xs font-semibold text-slate-300">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer Link & Stats */}
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {pillar.stats}
                  </span>
                  
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-amber-300 text-xs font-bold border border-white/10 transition-all"
                  >
                    <span>دخول المحور</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK LMS PREVIEW & GAMIFICATION SECTION */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-amazigh-darkCard via-amazigh-darkBg to-amazigh-blue-dark/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>الهندسة البيداغوجية المتدرجة (LMS)</span>
              </div>

              <h2 className="text-3xl font-bold text-white leading-tight">
                مسارات تعليمية منظمة تلبي متطلبات المناهج الرسمية
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                تم تكييف المحتوى البيداغوجي وفق المقررات المعتمدة في المدارس الوطنية مع توفير بيئات مخصصة لكل طور تعليمي:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 mt-1">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-300">الطور الابتدائي (التلعيب Gamification)</h4>
                    <p className="text-xs text-slate-400">نقاط XP، الشارات، أيام التتابع، القصص المصورة الناطقة والأغاني لبناء الرصيد اللغوي.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 mt-1">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cyan-300">الطور المتوسط (القواعد والتواصل)</h4>
                    <p className="text-xs text-slate-400">بناء الجمل، القواعد الأساسية، الحوارات اليومية، ومهارات الاستماع والفهم.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-1">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300">الطور الثانوي (تحليل النصوص والإنتاج)</h4>
                    <p className="text-xs text-slate-400">تحليل النصوص الأدبية والتاريخية، الصرف والنحو المتقدم، مهارات الإنتاج الكتابي.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/learning/primary"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-gold-glow transition-all flex items-center gap-2"
                >
                  <span>استكشف بوابة الابتدائي</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  href="/learning"
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 transition-all"
                >
                  دليل المستويات الكامل
                </Link>
              </div>
            </div>

            {/* Interactive Mock Display */}
            <div className="glass-panel p-6 rounded-2xl border-cyan-500/40 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300">
                    ⵜ
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">بطاقة التلميذ التفاعلية</div>
                    <div className="text-xs text-amber-400 tifinagh-font">ⴰⵏⵍⵎⴰⴷ ⴰⵎⴰⵣⵉⵖ</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  نشط الآن
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-xs text-slate-400">نقاط التحدي (XP)</div>
                  <div className="text-2xl font-black text-amber-400 flex items-center justify-center gap-1 mt-1">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <span>2,480</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-xs text-slate-400">أيام التتابع (Streak)</div>
                  <div className="text-2xl font-black text-rose-400 flex items-center justify-center gap-1 mt-1">
                    <Flame className="w-5 h-5 fill-rose-500 text-rose-500 animate-bounce" />
                    <span>14 يوماً</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-300 flex justify-between">
                  <span>نسبة التقدم في مقرر السنة الثالثة ابتدائية</span>
                  <span className="text-cyan-400">75%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full w-[75%] shadow-glow"></div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-200">وسام المشترك المعجمي الوطني 2026</span>
                </div>
                <span className="text-xs bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-bold">تم الاكتساب</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="container mx-auto px-4 max-w-4xl text-center space-y-6">
        <div className="glass-panel p-10 rounded-3xl border-amber-500/30 space-y-6">
          <span className="text-3xl font-black text-amber-400 tifinagh-font">ⵣ ⵜⴰⵎⴰⵣⵉⵖⵜ ⵣ</span>
          <h2 className="text-3xl font-extrabold text-white">انضم إلى المنصة الوطنية لتعلم وتطوير اللغة والأدب الأمازيغي</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            سواء كنت تلميذاً، أستاذاً، باحثاً لغوياً، أو مهتماً بالتراث الحضاري الأمازيغي، توفر لك المنصة الأدوات الرقمية المتكاملة للتعلم والابتكار.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/learning"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-gold-glow transition-all"
            >
              ابدأ مسار التعلم الآن
            </Link>
            <Link
              href="/collaborative"
              className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 transition-all"
            >
              بوابة الأساتذة والخبراء
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
