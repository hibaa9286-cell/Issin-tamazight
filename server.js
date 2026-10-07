// High Performance Preview Server for AGY-AMAZIGH Unified Platform
const http = require('http');
const PORT = 3000;

console.log(`Starting AGY-AMAZIGH Digital Platform full interactive preview server on http://localhost:${PORT}`);

const htmlPage = (content, title = 'منصة أگـــــرّام AGY-AMAZIGH') => `
<!DOCTYPE html>
<html lang="ar" dir="rtl" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Noto+Sans+Tifinagh:wght@400;700&family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            amazigh: {
              gold: '#E5A93C',
              blue: '#0077B6',
              'blue-dark': '#0B2545',
              green: '#0D9488',
              red: '#C62828',
              darkBg: '#080C14',
              darkCard: '#111827',
              darkBorder: 'rgba(255, 255, 255, 0.1)',
            }
          },
          fontFamily: {
            tifinagh: ['"Noto Sans Tifinagh"', 'sans-serif'],
            arabic: ['"Cairo"', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #080C14; color: #F3F4F6; font-family: 'Cairo', sans-serif; }
    .tifinagh-font { font-family: 'Noto Sans Tifinagh', sans-serif; }
    .glass-panel { background: rgba(17, 24, 39, 0.75); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); }
    .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -10px rgba(229, 169, 60, 0.3); }
  </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">

  <!-- HEADER NAVBAR -->
  <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg shadow-lg border-b border-white/10" style="background-color: rgba(8, 12, 20, 0.9);">
    <div className="bg-gradient-to-r from-amazigh-blue-dark via-amazigh-darkBg to-amazigh-blue-dark border-b border-white/5 py-1.5 px-4 text-xs font-medium text-amber-200 flex justify-between items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold">✨ المنصة الوطنية الموحدة</span>
          <span className="hidden md:inline text-slate-300">برنامج وطني للتأصيل اللغوي، التلعيب البيداغوجي، والبحث المعجمي</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-amber-400 font-bold">🔥 7 أيام متتابعة</span>
          <span className="text-cyan-400 font-bold">🏆 1,450 XP</span>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-emerald-500 to-cyan-600 p-[2px]">
            <div className="w-full h-full bg-amazigh-darkBg rounded-[10px] flex items-center justify-center">
              <span className="text-2xl font-black text-amber-400 tifinagh-font">ⵣ</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text text-transparent">أگـــــرّام</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono font-bold">AGY</span>
            </div>
            <span className="text-[11px] text-slate-400">المنصة الوطنية للغة والثقافة الأمازيغية</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-2 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl">
          <a href="/" className="px-4 py-2 rounded-xl text-sm font-bold text-amber-300 hover:bg-white/5">الرئيسية</a>
          <a href="/museum" className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 flex flex-col items-center">
            <span>المتحف الرقمي</span>
            <span className="text-[10px] text-amber-400 tifinagh-font">ⴰⵙⴰⵍⴰⵢ</span>
          </a>
          <a href="/learning" className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 flex flex-col items-center">
            <span>مسارات التعلم LMS</span>
            <span className="text-[10px] text-cyan-400 tifinagh-font">ⴰⵍⵎⵎⵓⴷ</span>
          </a>
          <a href="/dictionary" className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 flex flex-col items-center">
            <span>المعجم الذكي</span>
            <span className="text-[10px] text-emerald-400 tifinagh-font">ⴰⵎⴰⵡⴰⵍ</span>
          </a>
          <a href="/collaborative" className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 flex flex-col items-center">
            <span>البيئة التشاركية</span>
            <span className="text-[10px] text-rose-400 tifinagh-font">ⵜⴰⵎⵓⵏⵜ</span>
          </a>
        </nav>

        <a href="/learning/primary" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold text-sm shadow-md hover:scale-105 transition-all">
          دخول بوابة التعلم
        </a>
      </div>
    </div>
  </header>

  <!-- CONTENT MAIN -->
  <main className="flex-1">
    ${content}
  </main>

  <!-- FOOTER -->
  <footer className="bg-amazigh-darkCard border-t border-white/10 text-slate-400 py-12 px-4 mt-16">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-amber-400 tifinagh-font">ⵣ</span>
        <span className="text-sm font-bold text-white">© 2026 منصة أگـــــرّام AGY-AMAZIGH. تصميم وتنفيذ هندسي متكامل.</span>
      </div>
      <div className="flex flex-wrap gap-4 text-xs font-semibold">
        <a href="/museum" className="hover:text-amber-400">المتحف الرقمي</a>
        <a href="/learning" className="hover:text-cyan-400">LMS التعلم</a>
        <a href="/learning/primary" className="hover:text-amber-400">الطور الابتدائي</a>
        <a href="/dictionary" className="hover:text-emerald-400">المعجم الذكي</a>
        <a href="/collaborative" className="hover:text-rose-400">البيئة التشاركية</a>
      </div>
    </div>
  </footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (req.url === '/museum') {
    res.end(htmlPage(`
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border-amber-500/30 bg-gradient-to-r from-amazigh-darkCard via-amazigh-darkBg to-amber-950/40 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 tifinagh-font">ⴰⵙⴰⵍⴰⵢ ⵓⵟⵟⵓⵏⵉ</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">المحور الأول</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">المتحف الرقمي التفاعلي والتأصيل الحضاري</h1>
          <p className="text-slate-300 text-sm max-w-3xl">بوابة دخول غامرة تضم مركز إنتاج الأفلام الوثائقية (Motion Graphics & Live Action)، الخريطة الحضارية التفاعلية لشمال إفريقيا، والخط الزمني للإسهامات التاريخية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <div className="text-amber-400 font-bold text-lg">🎥 مركز الوثائقيات السينمائية</div>
            <p className="text-xs text-slate-400">مقاطع عالية الجودة تقدم نبذة تاريخية شاملة عن الأمازيغ وتطور لغتهم خط التيفيناغ.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <div className="text-cyan-400 font-bold text-lg">🗺️ الخريطة الحضارية التفاعلية</div>
            <p className="text-xs text-slate-400">استكشاف معالم الهقار، إمدغاسن، ضريح ماسينيسا، وقصور وادي مزاب ودرج المخطوطات.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <div className="text-emerald-400 font-bold text-lg">📜 الخط الزمني التاريخي</div>
            <p className="text-xs text-slate-400">تسلسل يمتد من اعتلاء الملك شيشناق (950 ق.م) لتوحيد نوميديا وتدوين المعاهدات.</p>
          </div>
        </div>
      </div>
    `, 'المتحف الرقمي | أگـــــرّام'));
  } else if (req.url === '/learning') {
    res.end(htmlPage(`
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border-cyan-500/30 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-cyan-400 tifinagh-font">ⴰⵍⵎⵎⵓⴷ ⴷ ⵓⵙⵍⵎⴷ</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">المحور الثاني</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">الهندسة البيداغوجية والمسارات التعليمية المدمجة (LMS)</h1>
          <p className="text-slate-300 text-sm max-w-3xl">مسارات منظمة ومكيفة بالكامل مع المناهج الوطنية الرسمية المعتمدة في المدارس لكل الأطوار (الابتدائي، المتوسط، والثانوي).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/learning/primary" className="glass-panel p-6 rounded-2xl border-amber-500/30 hover:border-amber-400 transition-all space-y-3">
            <div className="text-amber-400 font-bold text-lg">1. الطور الابتدائي (Gamification)</div>
            <p className="text-xs text-slate-400">نقاط XP، الشارات، أيام التتابع، القصص المصورة الناطقة، والأغاني لتعليم الرصيد الأساسي.</p>
          </a>
          <a href="/learning/middle" className="glass-panel p-6 rounded-2xl border-cyan-500/30 hover:border-cyan-400 transition-all space-y-3">
            <div className="text-cyan-400 font-bold text-lg">2. الطور المتوسط (القواعد والتواصل)</div>
            <p className="text-xs text-slate-400">تركيب الجملة الفعلية VSO، الحوارات اليومية، والتطبيقات التفاعلية لمهارات الفهم.</p>
          </a>
          <a href="/learning/secondary" className="glass-panel p-6 rounded-2xl border-emerald-500/30 hover:border-emerald-400 transition-all space-y-3">
            <div className="text-emerald-400 font-bold text-lg">3. الطور الثانوي (الأدب والنقد)</div>
            <p className="text-xs text-slate-400">تحليل نصوص شعر الحكمة (Asefru)، النقد التاريخي للمخطوطات، والإنتاج الكتابي.</p>
          </a>
        </div>
      </div>
    `, 'مسارات التعلم LMS | أگـــــرّام'));
  } else if (req.url === '/learning/primary') {
    res.end(htmlPage(`
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border-amber-500/30 bg-gradient-to-r from-amber-950/30 to-amazigh-darkBg space-y-4">
          <h1 className="text-3xl font-extrabold text-white">الطور الابتدائي: واجهة التعلم المعتمدة على التلعيب (Gamification)</h1>
          <div className="flex gap-4 text-xs font-bold">
            <span className="text-amber-400">🏆 1,450 XP</span>
            <span className="text-rose-400">🔥 7 أيام متتابعة</span>
            <span className="text-cyan-400">🎖️ 3 شارات مكتسبة</span>
          </div>
        </div>
      </div>
    `, 'الطور الابتدائي | أگـــــرّام'));
  } else if (req.url === '/dictionary') {
    res.end(htmlPage(`
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 to-amazigh-darkBg space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 tifinagh-font">ⴰⵎⴰⵡⴰⵍ ⵓⵟⵟⵓNun</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">المحور الثالث</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">الهندسة اللغوية والمعجم الرقمي الذكي</h1>
          <p className="text-slate-300 text-sm max-w-3xl">محرك بحث متعدد المتغيرات (القبائلية، الشاوية، المزابية، التارقية، الشنوية...) مع إبراز المشترك المعجمي وورشة الأمازيغية المعيارية.</p>
        </div>
      </div>
    `, 'المعجم الرقمي الذكي | أگـــــرّام'));
  } else if (req.url === '/collaborative') {
    res.end(htmlPage(`
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border-rose-500/30 bg-gradient-to-r from-rose-950/30 to-amazigh-darkBg space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-rose-400 tifinagh-font">ⵜⴰⵎⵓⵏⵜ</span>
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">المحور الرابع</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">البيئة التشاركية واستقطاب الكفاءات الوطنية</h1>
          <p className="text-slate-300 text-sm max-w-3xl">بوابة آمنة لإيداع مساهمات الأساتذة من كل ولايات الوطن وملتقى التبادل الثقافي بين التلاميذ لترسيخ الوحدة والانسجام.</p>
        </div>
      </div>
    `, 'البيئة التشاركية | أگـــــرّام'));
  } else {
    res.end(htmlPage(`
      <div className="container mx-auto px-4 py-16 space-y-12 text-center">
        <div className="inline-block p-3 px-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs">
          ✨ المنصة الوطنية التفاعلية الموحدة للغة والثقافة الأمازيغية
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white">منصة <span className="text-amber-400">أگـــــرّام (AGY-AMAZIGH)</span> الرقمية</h1>
        <p className="text-amber-400 tifinagh-font text-2xl font-bold">ⴰⵙⴰⵍⴰⵢ ⵓⵟⵟⵓⵏⵉ • ⴰⵍⵎⵎⵓⴷ ⵉⵎⵙⴷⵉ • ⴰⵎⴰⵡⴰⵍ • ⵜⴰⵎⵓⵏⵜ</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right max-w-6xl mx-auto pt-8">
          <a href="/museum" className="glass-panel p-6 rounded-2xl border-amber-500/30 hover:border-amber-400 transition-all">
            <div className="text-amber-400 font-bold text-lg">المحور 1: المتحف الرقمي</div>
            <div className="text-xs text-slate-400 mt-2">مركز السمعي البصري، الخريطة الحضارية والخط الزمني.</div>
          </a>
          <a href="/learning" className="glass-panel p-6 rounded-2xl border-cyan-500/30 hover:border-cyan-400 transition-all">
            <div className="text-cyan-400 font-bold text-lg">المحور 2: مسارات التعلم LMS</div>
            <div className="text-xs text-slate-400 mt-2">المسارات البيداغوجية الثلاثة مع أدلة الأساتذة.</div>
          </a>
          <a href="/dictionary" className="glass-panel p-6 rounded-2xl border-emerald-500/30 hover:border-emerald-400 transition-all">
            <div className="text-emerald-400 font-bold text-lg">المحور 3: المعجم الذكي</div>
            <div className="text-xs text-slate-400 mt-2">المتغيرات، المشترك المعجمي، والأمازيغية المعيارية.</div>
          </a>
          <a href="/collaborative" className="glass-panel p-6 rounded-2xl border-rose-500/30 hover:border-rose-400 transition-all">
            <div className="text-rose-400 font-bold text-lg">المحور 4: التشاركية والخبراء</div>
            <div className="text-xs text-slate-400 mt-2">بوابة الأساتذة وملتقى التبادل عبر 58 ولاية.</div>
          </a>
        </div>
      </div>
    `, 'الرئيسية - أگـــــرّام AGY-AMAZIGH'));
  }
});

server.listen(PORT, () => {
  console.log(`Full server running on port ${PORT}`);
});
