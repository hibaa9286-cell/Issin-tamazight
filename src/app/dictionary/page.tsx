"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpenCheck, 
  Search, 
  Sparkles, 
  Volume2, 
  ShieldCheck, 
  ArrowRight, 
  Filter, 
  PlusCircle, 
  ThumbsUp, 
  BadgeCheck,
  CheckCircle2,
  Bookmark,
  Share2,
  Globe2,
  X,
  VolumeX
} from 'lucide-react';
import { INITIAL_DICTIONARY_ENTRIES, INITIAL_PROPOSALS, StandardProposal } from '@/lib/dictionary-data';
import { DictionaryEntryData } from '@/types';

export default function DictionaryPage() {
  const [activeTab, setActiveTab] = useState<'SEARCH' | 'COMMONS' | 'STANDARDIZATION'>('SEARCH');
  const [query, setQuery] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('ALL');
  const [lexicalOnly, setLexicalOnly] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // Proposal modal state
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposals, setProposals] = useState<StandardProposal[]>(INITIAL_PROPOSALS);
  const [newLatin, setNewLatin] = useState('');
  const [newTifinagh, setNewTifinagh] = useState('');
  const [newArabic, setNewArabic] = useState('');
  const [newDomain, setNewDomain] = useState('التكنولوجيا والرقمنة');
  const [newJustification, setNewJustification] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  // Audio Playback Handler using Web Speech Synthesis API fallback
  const handlePlayAudio = (id: string, text: string, audioUrl?: string) => {
    setPlayingAudioId(id);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ber'; // or fallback to fr/ar
      utterance.rate = 0.9;
      utterance.onend = () => setPlayingAudioId(null);
      utterance.onerror = () => setPlayingAudioId(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setPlayingAudioId(null), 1500);
    }
  };

  const filteredEntries = INITIAL_DICTIONARY_ENTRIES.filter((entry) => {
    const qLower = query.trim().toLowerCase();
    const matchesQuery = query === '' ||
      entry.arabicMeaning.toLowerCase().includes(qLower) ||
      entry.latinTamaziɣt.toLowerCase().includes(qLower) ||
      entry.tifinagh.includes(query) ||
      (entry.frenchMeaning && entry.frenchMeaning.toLowerCase().includes(qLower)) ||
      (entry.root && entry.root.toLowerCase().includes(qLower));

    const matchesVariant = selectedVariant === 'ALL' ||
      entry.variants.some((v) => v.dialectCode === selectedVariant);

    const matchesLexical = !lexicalOnly || entry.isLexicalCommon;

    const matchesTab = activeTab !== 'COMMONS' || entry.isLexicalCommon;

    return matchesQuery && matchesVariant && matchesLexical && matchesTab;
  });

  const handleAddProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLatin || !newArabic) return;

    const item: StandardProposal = {
      id: `prop-${Date.now()}`,
      termLatin: newLatin,
      termTifinagh: newTifinagh || newLatin,
      arabicMeaning: newArabic,
      domain: newDomain,
      justification: newJustification,
      status: 'PENDING',
      votesCount: 1,
      authorName: newAuthor || 'أستاذ لغوي مساهم'
    };

    setProposals([item, ...proposals]);
    setShowProposalModal(false);
    setNewLatin('');
    setNewTifinagh('');
    setNewArabic('');
    setNewJustification('');
  };

  const handleVoteProposal = (id: string) => {
    setProposals(proposals.map(p => p.id === id ? { ...p, votesCount: p.votesCount + 1 } : p));
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      
      {/* HEADER BANNER */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-amazigh-darkBg to-amazigh-darkCard space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-lg">
              <BookOpenCheck className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400 tifinagh-font">ⴰⵎⴰⵡⴰⵍ ⵓⵟⵟⵓⵏⵉ ⵉⵎⵙⴷⵉ</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  المحور الثالث
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">
                الهندسة اللغوية والمعجم الرقمي الذكي
              </h1>
            </div>
          </div>

          <Link href="/" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-2 border border-white/10 transition-colors">
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          محرك بحث لغوي متعدد المتغيرات يدعم البحث بالعربية، الفرنسية، والتيفيناغ. يُبرز **المشترك المعجمي (Lexical Commons)** بين جميع ولايات الوطن لتعزيز وحدة اللغة، ويوفر ورشة اعتماد **الأمازيغية المعيارية (Tamaziɣt Tanawayt)** للمجالات الحديثة.
        </p>

        {/* TAB SWITCHER */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          <button
            onClick={() => setActiveTab('SEARCH')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'SEARCH'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>قاموس البحث متعدد المتغيرات</span>
          </button>

          <button
            onClick={() => setActiveTab('COMMONS')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'COMMONS'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>إبراز المشترك المعجمي (Lexical Commons)</span>
          </button>

          <button
            onClick={() => setActiveTab('STANDARDIZATION')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'STANDARDIZATION'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
            <span>بيئة الأمازيغية المعيارية (Tamaziɣt Tanawayt)</span>
          </button>
        </div>
      </div>

      {/* TAB 1 & 2: SEARCH & LEXICAL COMMONS */}
      {(activeTab === 'SEARCH' || activeTab === 'COMMONS') && (
        <div className="space-y-8">
          
          {/* SEARCH & FILTERS CONTROLS */}
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Search input */}
              <div className="md:col-span-6 relative">
                <Search className="w-5 h-5 text-emerald-400 absolute right-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="ابحث بالعربية (مثال: الماء)، اللاتينية (Aman)، التيفيناغ (ⴰⵎⴰⵏ)، أو الجذر..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Variant Selector */}
              <div className="md:col-span-3">
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="w-full bg-amazigh-darkCard border border-white/10 rounded-xl px-4 py-3 text-xs font-bold text-amber-300 focus:outline-none focus:border-emerald-500"
                >
                  <option value="ALL">جميع اللهجات والمتغيرات الإقليمية</option>
                  <option value="KAB">القبائلية (ⵜⴰⵇⴱⴰⵢⵍⵉⵜ)</option>
                  <option value="CHA">الشاوية (ⵜⴰⵛⴰⵡⵉⵜ)</option>
                  <option value="MOZ">المزابية (ⵜⴰⵎⵣⴰⴱⵜ)</option>
                  <option value="TUA">التارقية (ⵜⴰⵎⴰⵌⴰⵇ)</option>
                  <option value="CHE">الشنوية (ⵜⴰⵛⵏⵡⵉⵜ)</option>
                </select>
              </div>

              {/* Lexical Checkbox */}
              <div className="md:col-span-3 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-200">
                  <input
                    type="checkbox"
                    checked={lexicalOnly}
                    onChange={(e) => setLexicalOnly(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded"
                  />
                  <span>تصفية المشترك المعجمي فقط</span>
                </label>
              </div>

            </div>
          </div>

          {/* RESULTS GRID */}
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400 px-2">
              <span>عرض النتائج المطابقة: <strong className="text-emerald-400 font-bold">{filteredEntries.length} مفردة معجمية</strong></span>
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                شارة المشترك المعجمي (Lexical Common Badge) ترمز للكلمات الجامعة
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredEntries.map((entry) => (
                <div 
                  key={entry.id}
                  className={`glass-panel p-6 rounded-2xl border transition-all hover-lift space-y-6 ${
                    entry.isLexicalCommon 
                      ? 'border-emerald-500/40 bg-gradient-to-r from-emerald-950/20 via-amazigh-darkCard to-amazigh-darkBg' 
                      : 'border-white/10'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-3xl font-black text-amber-400 tifinagh-font">{entry.tifinagh}</span>
                        <span className="text-2xl font-bold text-white font-mono">{entry.latinTamaziɣt}</span>
                        
                        {entry.isLexicalCommon && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-extrabold shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            مشترك معجمي شامل (Lexical Common)
                          </span>
                        )}

                        {entry.isStandardized && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                            أمازيغية معيارية موحدة
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-bold text-slate-200 flex flex-wrap items-center gap-4">
                        <span>الترجمة بالعربية: <span className="text-amber-300 font-extrabold">{entry.arabicMeaning}</span></span>
                        {entry.frenchMeaning && <span className="text-slate-400 text-xs font-mono">| {entry.frenchMeaning}</span>}
                        {entry.root && <span className="text-cyan-400 text-xs font-mono">| الجذر: [{entry.root}]</span>}
                        <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-xs">{entry.partOfSpeech}</span>
                      </div>
                    </div>

                    {/* Audio Playback Button */}
                    <button
                      onClick={() => handlePlayAudio(entry.id, entry.latinTamaziɣt, entry.audioUrl)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                        playingAudioId === entry.id
                          ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                          : 'bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 border-white/10'
                      }`}
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{playingAudioId === entry.id ? 'جارٍ التشغيل الصوتي...' : 'نطق الكلمة'}</span>
                    </button>
                  </div>

                  {/* Common Regions Badges */}
                  {entry.commonRegions && entry.commonRegions.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-400">مناطق الانتشار والتداول المشترك:</span>
                      {entry.commonRegions.map((region, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-semibold">
                          ✓ {region}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Dialect Variants */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-2">
                      <Globe2 className="w-4 h-4" />
                      <span>التنوع الإقليمي وتعدد المتغيرات (Regional Dialect Variants):</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {entry.variants.map((v) => (
                        <div key={v.id} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all text-xs space-y-1">
                          <div className="font-extrabold text-amber-300">{v.dialectName}</div>
                          <div className="text-white font-mono font-bold">{v.localSpelling}</div>
                          <div className="text-[10px] text-slate-400 truncate">{v.region}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: STANDARDIZATION WORKSPACE (Tamaziɣt Tanawayt) */}
      {activeTab === 'STANDARDIZATION' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="glass-panel p-8 rounded-3xl border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-amazigh-darkBg to-amazigh-darkCard space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>بيئة عمل الأمازيغية المعيارية المعتمدة (Tamaziɣt Tanawayt)</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  ورشة اعتماد المصطلحات العلمية والتقنية الحديثة
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
                  مساحة مخصصة للجنة اللغويين المعتمدة والخبراء باقتراح واعتماد مصطلحات موحدة وطسبياً في مجالات الذكاء الاصطناعي، الطب، التكنولوجيا، والعلوم المعاصرة دون إقصاء الثراء المحلي.
                </p>
              </div>

              <button
                onClick={() => setShowProposalModal(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-gold-glow flex items-center gap-2 transition-all"
              >
                <PlusCircle className="w-4 h-4" />
                <span>اقتراح مصطلح معياري جديد</span>
              </button>
            </div>
          </div>

          {/* Proposals List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-cyan-400" />
              <span>جدول المقترحات والمصطلحات المعيارية قيد التقييم التصويتي:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proposals.map((prop) => (
                <div key={prop.id} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                      {prop.domain}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${
                      prop.status === 'APPROVED' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {prop.status === 'APPROVED' ? '✓ معتمد وطنياً' : '⏳ قيد المراجعة التصويتية'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-amber-400 tifinagh-font">{prop.termTifinagh}</span>
                      <span className="text-xl font-bold text-white font-mono">({prop.termLatin})</span>
                    </div>
                    <div className="text-sm font-bold text-slate-200">
                      المعنى بالعربية: <span className="text-cyan-300">{prop.arabicMeaning}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                      <strong>التأصيل والتعليل اللغوي:</strong> {prop.justification}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">صاحب الاقتراح: <strong className="text-slate-200">{prop.authorName}</strong></span>

                    <button
                      onClick={() => handleVoteProposal(prop.id)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 font-bold flex items-center gap-1.5 border border-cyan-500/30 transition-all"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>تأييد الخبراء ({prop.votesCount})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* PROPOSAL MODAL */}
      {showProposalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-8 rounded-3xl border-cyan-500/40 max-w-xl w-full space-y-6 relative animate-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">اقتراح مصطلح للأمازيغية المعيارية</h3>
              </div>
              <button 
                onClick={() => setShowProposalModal(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProposal} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">المصطلح باللاتينية الأمازيغية *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: Tazilalana"
                  value={newLatin}
                  onChange={(e) => setNewLatin(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">المصطلح بالتيفيناغ</label>
                <input
                  type="text"
                  placeholder="مثال: ⵜⴰⵣⵉⵍⴰⵍⴰⵏⴰ"
                  value={newTifinagh}
                  onChange={(e) => setNewTifinagh(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-amber-300 tifinagh-font focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">المعنى والمقابل بالعربية *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: الحوسبة السحابية"
                  value={newArabic}
                  onChange={(e) => setNewArabic(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">المجال العلمي / التقني</label>
                <select
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  className="w-full bg-amazigh-darkCard border border-white/10 rounded-xl px-4 py-2.5 text-xs font-bold text-cyan-300"
                >
                  <option value="الذكاء الاصطناعي والتكنولوجيا">الذكاء الاصطناعي والتكنولوجيا</option>
                  <option value="العلوم الطبيعية والطب">العلوم الطبيعية والطب</option>
                  <option value="الإعلام والاتصال">الإعلام والاتصال</option>
                  <option value="الرياضيات والفيزياء">الرياضيات والفيزياء</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">التأصيل والتعليل اللغوي</label>
                <textarea
                  rows={3}
                  placeholder="اشرح الجذر اللغوي والمبرر الاشتقاقي للمصطلح..."
                  value={newJustification}
                  onChange={(e) => setNewJustification(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">اسم الباحث / الأستاذ المساهم</label>
                <input
                  type="text"
                  placeholder="مثال: د. عبد الرحمن بوزيد"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowProposalModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md"
                >
                  تقديم الاقتراح للجنة
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
