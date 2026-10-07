"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Upload, 
  MessageSquare, 
  ShieldCheck, 
  MapPin, 
  Heart, 
  ArrowRight, 
  PlusCircle, 
  Filter, 
  FileText, 
  CheckCircle2, 
  X,
  Share2,
  Sparkles,
  ThumbsUp
} from 'lucide-react';
import { INITIAL_TEACHER_CONTRIBUTIONS, INITIAL_CULTURAL_POSTS } from '@/lib/collaborative-data';
import { TeacherContributionData, CulturalPostData } from '@/types';

export default function CollaborativePage() {
  const [activeTab, setActiveTab] = useState<'TEACHERS' | 'FORUM'>('TEACHERS');
  const [contributions, setContributions] = useState<TeacherContributionData[]>(INITIAL_TEACHER_CONTRIBUTIONS);
  const [posts, setPosts] = useState<CulturalPostData[]>(INITIAL_CULTURAL_POSTS);
  const [selectedWilaya, setSelectedWilaya] = useState('ALL');

  // Modals state
  const [showContribModal, setShowContribModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  // New Contribution form
  const [cAuthor, setCAuthor] = useState('');
  const [cWilaya, setCWilaya] = useState('تيزي وزو (ولاية 15)');
  const [cTitle, setCTitle] = useState('');
  const [cLevel, setCLevel] = useState<'PRIMARY' | 'MIDDLE' | 'SECONDARY'>('PRIMARY');
  const [cSummary, setCSummary] = useState('');

  // New Post form
  const [pAuthor, setPAuthor] = useState('');
  const [pWilaya, setPWilaya] = useState('خنشلة');
  const [pCategory, setPCategory] = useState('عادات وتقاليد');
  const [pTitle, setPTitle] = useState('');
  const [pContent, setPContent] = useState('');

  const handleAddContrib = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cTitle || !cSummary) return;

    const newItem: TeacherContributionData = {
      id: `contrib-${Date.now()}`,
      authorName: cAuthor || 'أستاذ مساهم',
      wilaya: cWilaya,
      title: cTitle,
      targetLevel: cLevel,
      summary: cSummary,
      createdAt: 'اليوم'
    };

    setContributions([newItem, ...contributions]);
    setShowContribModal(false);
    setCTitle('');
    setCSummary('');
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pTitle || !pContent) return;

    const newPost: CulturalPostData = {
      id: `post-${Date.now()}`,
      authorName: pAuthor || 'تلميذ تواصل',
      wilayaOrigin: pWilaya,
      category: pCategory,
      title: pTitle,
      content: pContent,
      likesCount: 1,
      createdAt: 'الآن'
    };

    setPosts([newPost, ...posts]);
    setShowPostModal(false);
    setPTitle('');
    setPContent('');
  };

  const handleLikePost = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likesCount: p.likesCount + 1 } : p));
  };

  const filteredContribs = selectedWilaya === 'ALL'
    ? contributions
    : contributions.filter(c => c.wilaya.includes(selectedWilaya));

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      
      {/* HEADER */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-amazigh-darkBg to-amazigh-darkCard space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-lg">
              <Users className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-rose-400 tifinagh-font">ⵜⴰⵎⵓⵏⵜ ⴷ ⵓⵎⵢⴰⵡⴰⵙ</span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                  المحور الرابع
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">
                البيئة التشاركية واستقطاب الكفاءات الوطنية
              </h1>
            </div>
          </div>

          <Link href="/" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-2 border border-white/10 transition-colors">
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          فضاء وطني موحد يربط الكفاءات، الأساتذة، الباحثين، والتلاميذ من كافة ولايات الوطن الـ 58. يهدف لإضافة المحتوى التعليمي المحلي وتبادل العادات والتقاليد اللغوية الثقافية لترسيخ الوحدة الوطنية والانسجام الحضاري.
        </p>

        {/* TABS SWITCHER */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          <button
            onClick={() => setActiveTab('TEACHERS')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'TEACHERS'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>بوابة الأساتذة والخبراء وإيداع المحتوى</span>
          </button>

          <button
            onClick={() => setActiveTab('FORUM')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'FORUM'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-cyan-300" />
            <span>ملتقى التبادل الثقافي بين التلاميذ (58 ولاية)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: TEACHER & EXPERT PORTAL */}
      {activeTab === 'TEACHERS' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
                <span>المشاركات والمواد التعليمية المودعة من الأساتذة</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">مركز معتمد لإضافة الدروس، التمارين، والأبحاث اللغوية الإقليمية</p>
            </div>

            <button
              onClick={() => setShowContribModal(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs shadow-gold-glow flex items-center gap-2 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>إضافة مساهمة تعليمية جديدة</span>
            </button>
          </div>

          {/* WILAYA FILTER */}
          <div className="glass-panel p-4 rounded-2xl border-white/10 flex items-center gap-4">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-amber-400" />
              <span>تصفية المساهمات حسب الولاية:</span>
            </span>

            <select
              value={selectedWilaya}
              onChange={(e) => setSelectedWilaya(e.target.value)}
              className="bg-amazigh-darkCard border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-amber-300 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">جميع ولايات الوطن (58 ولاية)</option>
              <option value="تيزي وزو">تيزي وزو</option>
              <option value="باتنة">باتنة</option>
              <option value="غرداية">غرداية</option>
              <option value="تمنراست">تمنراست</option>
              <option value="بجاية">بجاية</option>
              <option value="خنشلة">خنشلة</option>
              <option value="تيبازة">تيبازة</option>
            </select>
          </div>

          {/* CONTRIBUTIONS LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredContribs.map((item) => (
              <div key={item.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.wilaya}
                    </span>

                    <span className="text-[11px] px-2.5 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/5 font-bold">
                      {item.targetLevel === 'PRIMARY' ? 'الطور الابتدائي' : item.targetLevel === 'MIDDLE' ? 'الطور المتوسط' : 'الطور الثانوي'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">الأستاذ: <strong className="text-amber-200">{item.authorName}</strong></span>
                  <button className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs transition-colors flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>تحميل المادة التعليمية</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 2: CULTURAL EXCHANGE FORUM */}
      {activeTab === 'FORUM' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                <span>ملتقى التبادل الثقافي والتواصل بين التلاميذ</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">منشورات التلاميذ من مختلف الولايات للتعرف على التراث والعادات الأمازيغية</p>
            </div>

            <button
              onClick={() => setShowPostModal(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-gold-glow flex items-center gap-2 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>إضافة مشاركة في الملتقى</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-amber-300 font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      ولاية {post.wilayaOrigin}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">{post.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                    "{post.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">الناشر: <strong className="text-slate-200">{post.authorName}</strong></span>

                  <button
                    onClick={() => handleLikePost(post.id)}
                    className="px-3 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-slate-950 font-bold flex items-center gap-1.5 transition-all"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-400" />
                    <span>اعجاب ({post.likesCount})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TEACHER CONTRIB MODAL */}
      {showContribModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl border-amber-500/40 max-w-xl w-full space-y-6 relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Upload className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">إيداع مادة تعليمية جديدة (بوابة الأساتذة)</h3>
              </div>
              <button onClick={() => setShowContribModal(false)} className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddContrib} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">عنوان المادة أو التمرين *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: مطبوعات تمارين التعبير الكتابي بالسنة الرابعة"
                  value={cTitle}
                  onChange={(e) => setCTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الولاية المساهمة</label>
                  <input
                    type="text"
                    value={cWilaya}
                    onChange={(e) => setCWilaya(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-amber-300 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الطور التعليمي المستهدف</label>
                  <select
                    value={cLevel}
                    onChange={(e) => setCLevel(e.target.value as any)}
                    className="w-full bg-amazigh-darkCard border border-white/10 rounded-xl px-4 py-2.5 text-xs text-amber-300"
                  >
                    <option value="PRIMARY">الطور الابتدائي</option>
                    <option value="MIDDLE">الطور المتوسط</option>
                    <option value="SECONDARY">الطور الثانوي</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">اسم الأستاذ / الباحث *</label>
                <input
                  type="text"
                  placeholder="مثال: أ. عبد القادر بوزيد"
                  value={cAuthor}
                  onChange={(e) => setCAuthor(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">ملخص المادة البيداغوجية *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="اشرح محتوى المادة البيداغوجية وأهدافها التعليمية..."
                  value={cSummary}
                  onChange={(e) => setCSummary(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <button type="button" onClick={() => setShowContribModal(false)} className="px-5 py-2.5 rounded-xl bg-white/5 text-slate-300 text-xs font-bold">
                  إلغاء
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold text-xs shadow-md">
                  نشر المادة البيداغوجية
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* STUDENT POST MODAL */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl border-cyan-500/40 max-w-xl w-full space-y-6 relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">إضافة مشاركة في ملتقى التبادل الثقافي</h3>
              </div>
              <button onClick={() => setShowPostModal(false)} className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">عنوان المشاركة *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: الأمثال الشعبية الأمازيغية الشائعة في منطقتنا"
                  value={pTitle}
                  onChange={(e) => setPTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الولاية</label>
                  <input
                    type="text"
                    value={pWilaya}
                    onChange={(e) => setPWilaya(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-cyan-300 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">الفئة Cultural Category</label>
                  <select
                    value={pCategory}
                    onChange={(e) => setPCategory(e.target.value)}
                    className="w-full bg-amazigh-darkCard border border-white/10 rounded-xl px-4 py-2.5 text-xs text-cyan-300"
                  >
                    <option value="عادات وتقاليد">عادات وتقاليد</option>
                    <option value="الأمثال الشعبية">الأمثال الشعبية</option>
                    <option value="شعر وأهليل">شعر وأهليل</option>
                    <option value="فلكلور وموسيقى">فلكلور وموسيقى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">محتوى المنشور *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="اكتب التعبير أو العادة التراثية ليتعرف عليها زملاؤك من باقي الولايات..."
                  value={pContent}
                  onChange={(e) => setPContent(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">الاسم / اللقب</label>
                <input
                  type="text"
                  placeholder="مثال: يونس من بجاية"
                  value={pAuthor}
                  onChange={(e) => setPAuthor(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <button type="button" onClick={() => setShowPostModal(false)} className="px-5 py-2.5 rounded-xl bg-white/5 text-slate-300 text-xs font-bold">
                  إلغاء
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md">
                  نشر في الملتقى
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
