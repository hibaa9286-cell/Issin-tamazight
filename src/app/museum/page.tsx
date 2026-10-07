"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Landmark, 
  Compass, 
  Film, 
  MapPin, 
  History, 
  ArrowRight, 
  Play, 
  Sparkles, 
  Layers, 
  X, 
  Info,
  Calendar,
  Eye,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { MUSEUM_DOCUMENTARIES, CULTURAL_MAP_LOCATIONS, TIMELINE_EVENTS, MuseumDocumentary, CulturalMapLocation } from '@/lib/museum-data';

export default function MuseumPage() {
  const [activeTab, setActiveTab] = useState<'EXHIBIT' | 'DOCUMENTARY' | 'MAP' | 'TIMELINE'>('EXHIBIT');
  const [selectedDoc, setSelectedDoc] = useState<MuseumDocumentary | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<CulturalMapLocation>(CULTURAL_MAP_LOCATIONS[0]);
  const [activeEraFilter, setActiveEraFilter] = useState('ALL');

  const filteredDocs = activeEraFilter === 'ALL' 
    ? MUSEUM_DOCUMENTARIES 
    : MUSEUM_DOCUMENTARIES.filter(d => d.type === activeEraFilter);

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      
      {/* HERO BANNER */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border-amber-500/30 bg-gradient-to-r from-amazigh-darkCard via-amazigh-darkBg to-amber-950/40 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg">
              <Landmark className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 tifinagh-font">ⴰⵙⴰⵍⴰⵢ ⵓⵟⵟⵓⵏⵉ</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  المحور الأول
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">
                المتحف الرقمي التفاعلي والتأصيل الحضاري
              </h1>
            </div>
          </div>

          <Link href="/" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-2 border border-white/10 transition-colors">
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          بوابة تاريخية تفاعلية تعود لبدايات الحضارة الأمازيغية. تضم **مركز الإنتاج السمعي البصري الوثائقي** (Motion Graphics & Live Action)، **الخريطة الحضارية التفاعلية** لشمال إفريقيا، والخط الزمني للإسهامات التاريخية التي تربط اللغة مباشرة بالهوية الوطنية.
        </p>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
          <button
            onClick={() => setActiveTab('EXHIBIT')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'EXHIBIT'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Landmark className="w-4 h-4 text-slate-950" />
            <span>معرض المتحف الرقمي 3D</span>
          </button>

          <button
            onClick={() => setActiveTab('DOCUMENTARY')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'DOCUMENTARY'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <Film className="w-4 h-4 text-amber-400" />
            <span>مركز الإنتاج السمعي البصري</span>
          </button>

          <button
            onClick={() => setActiveTab('MAP')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'MAP'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span>الخريطة الحضارية التفاعلية</span>
          </button>

          <button
            onClick={() => setActiveTab('TIMELINE')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'TIMELINE'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md font-extrabold'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            <History className="w-4 h-4 text-emerald-300" />
            <span>الخط الزمني للإسهامات</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: EXHIBIT HALL */}
      {activeTab === 'EXHIBIT' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>قاعة المقتنيات والمعالم الأثرية المحاكاة</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">استعرض المقتنيات التاريخية والتحف الأمازيغية بأسلوب العرض ثلاثي الأبعاد</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all hover-lift space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" 
                  alt="نقوش التيفيناغ"
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]">
                  نقوش صخرية
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">ألواح النقوش الصخرية بالتيفيناغ</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                نصوص منقوشة بالأبجدية التوارقية القديمة تعود لآلاف السنين توثق الرحلات وقيم الشجاعة والوفاء.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                <span className="text-amber-400 font-bold">الموقع: الهقار والتاسيلي</span>
                <span className="text-slate-400">العصر القديم</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all hover-lift space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80" 
                  alt="ضريح إمدغاسن"
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px]">
                  معمار نوميدي
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">ضريح إمدغاسن الجنائزي</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                أحد أقدم المعالم الجنائزية نوميدية التراث بالأوراس يبرز عبقرية البناء الهندسي الدائري بالأحجار الضخمة.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                <span className="text-cyan-400 font-bold">الموقع: باتنة (الأوراس)</span>
                <span className="text-slate-400">القرن 3 ق.م</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all hover-lift space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" 
                  alt="مخطوطات أمازيغية"
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px]">
                  مخطوطات نادرة
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">مخطوطات الفقه والطب بالأمازيغية</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                نسخ نادرة من المخطوطات الفقهية والأدبية المكتوبة بالأمازيغية بالحرفين العربي والتيفيناغ الأصيل.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                <span className="text-emerald-400 font-bold">الموقع: وادي مزاب / بجاية</span>
                <span className="text-slate-400">العصر الوسيط</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: AUDIOVISUAL PRODUCTION CENTER */}
      {activeTab === 'DOCUMENTARY' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Film className="w-6 h-6 text-amber-400" />
                <span>مركز الإنتاج السمعي البصري الوثائقي</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">مقاطع عالية الجودة تقدم نبذة تاريخية شاملة عن الأمازيغ وتطور لغتهم عبر العصور</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveEraFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeEraFilter === 'ALL' ? 'bg-amber-500 text-slate-950' : 'bg-white/5 text-slate-300'}`}
              >
                جميع الأفلام
              </button>
              <button
                onClick={() => setActiveEraFilter('MOTION_GRAPHICS')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeEraFilter === 'MOTION_GRAPHICS' ? 'bg-amber-500 text-slate-950' : 'bg-white/5 text-slate-300'}`}
              >
                Motion Graphics
              </button>
              <button
                onClick={() => setActiveEraFilter('LIVE_ACTION')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${activeEraFilter === 'LIVE_ACTION' ? 'bg-amber-500 text-slate-950' : 'bg-white/5 text-slate-300'}`}
              >
                Live Action (محاكاة حية)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDocs.map((doc) => (
              <div 
                key={doc.id}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-900">
                    <img src={doc.thumbnailUrl} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedDoc(doc)}
                        className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-gold-glow hover:scale-110 transition-transform"
                      >
                        <Play className="w-6 h-6 fill-slate-950 mr-0.5" />
                      </button>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-amber-300 text-[10px] font-mono">
                      ⏱ {doc.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-amber-400 tifinagh-font">{doc.tifinaghTitle}</span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {doc.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-cyan-300 font-semibold">{doc.historicalEra}</span>
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
                  >
                    <span>مشاهدة الوثائقي</span>
                    <Play className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* SECTION 3: INTERACTIVE CULTURAL MAP */}
      {activeTab === 'MAP' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-amazigh-darkBg to-amazigh-darkCard space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span>الخريطة الحضارية التفاعلية لشمال إفريقيا والجزائر</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              اضغط على أي معلم أو ولاية في الخريطة لاستكشاف الإسهامات الحضارية، المعالم العمرانية، والنقوش التراثية المرتبطة بها:
            </p>

            {/* Map Interactive Interface Concept */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              
              {/* Left Column: Interactive Pins */}
              <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border-white/10 min-h-[380px] relative overflow-hidden bg-slate-950/60 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0077b6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                <div className="flex items-center justify-between text-xs font-bold text-cyan-300 border-b border-white/10 pb-3">
                  <span>🗺️ المحاكاة التفاعلية لمواقع التراث الوطني (شمال إفريقيا)</span>
                  <span className="text-amber-400">انقر لعرض المعطيات التاريخية</span>
                </div>

                {/* Simulated Location Pins Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6 z-10">
                  {CULTURAL_MAP_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocation.id === loc.id;
                    return (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc)}
                        className={`p-4 rounded-xl text-right transition-all flex flex-col justify-between border ${
                          isSelected
                            ? 'bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border-cyan-400 text-white shadow-blue-glow scale-105'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <MapPin className={`w-5 h-5 ${isSelected ? 'text-amber-400 animate-bounce' : 'text-cyan-400'}`} />
                          <span className="text-[10px] text-amber-300 font-bold">{loc.era}</span>
                        </div>
                        <div className="mt-3 space-y-1">
                          <div className="text-xs font-bold">{loc.title}</div>
                          <div className="text-[10px] text-slate-400">{loc.wilaya}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-400 border-t border-white/10 pt-3 flex items-center justify-between">
                  <span>إحداثيات الموقع: Lat {selectedLocation.coordinates.lat}, Lng {selectedLocation.coordinates.lng}</span>
                  <span className="text-cyan-400 font-bold">عدد التحف الموثقة: {selectedLocation.artifactsCount} تحفة</span>
                </div>
              </div>

              {/* Right Column: Location Detail Card */}
              <div className="glass-panel p-6 rounded-2xl border-cyan-500/40 space-y-4">
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900">
                  <img src={selectedLocation.imageUrl} alt={selectedLocation.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 right-2 px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-black text-[10px]">
                    {selectedLocation.regionName}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 tifinagh-font">{selectedLocation.tifinaghTitle}</span>
                  <h3 className="text-lg font-bold text-white leading-snug">{selectedLocation.title}</h3>
                  <div className="text-xs font-bold text-cyan-300">الولاية: {selectedLocation.wilaya}</div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {selectedLocation.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="text-xs font-bold text-slate-400">القيمة الحضارية والتاريخية:</div>
                  <p className="text-[11px] text-amber-200 bg-white/5 p-3 rounded-xl border border-white/5">
                    يرتبط هذا المعلم بتأصيل الهوية الأمازيغية وتطوير المعارف التراثية في شمال إفريقيا.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* SECTION 4: TIMELINE */}
      {activeTab === 'TIMELINE' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <History className="w-6 h-6 text-emerald-400" />
              <span>الخط الزمني للتأصيل والإسهامات الحضارية</span>
            </h2>
            <p className="text-xs text-slate-400">محطات تاريخية فارقة تبرز عراقة اللغة والثقافة الأمازيغية عبر القرون</p>
          </div>

          <div className="relative border-r-2 border-emerald-500/40 pr-6 mr-4 sm:mr-10 space-y-8 max-w-4xl mx-auto">
            {TIMELINE_EVENTS.map((event) => (
              <div key={event.id} className="relative group">
                {/* Bullet Node */}
                <div className="absolute -right-[33px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-amazigh-darkBg shadow-gold-glow group-hover:scale-125 transition-transform"></div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-500/30">
                      {event.yearBCE}
                    </span>
                    <span className="text-2xl">{event.icon}</span>
                  </div>

                  <span className="text-xs font-bold text-amber-400 tifinagh-font block">{event.tifinaghTitle}</span>
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-3xl border-amber-500/40 max-w-3xl w-full space-y-4 relative animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">{selectedDoc.title}</h3>
                <span className="text-xs text-amber-400 font-mono">{selectedDoc.tifinaghTitle}</span>
              </div>
              <button 
                onClick={() => setSelectedDoc(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
              <video src={selectedDoc.videoUrl} controls autoPlay className="w-full h-full object-cover"></video>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedDoc.summary}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
