"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Trophy, 
  Flame, 
  Sparkles, 
  Music, 
  Image as ImageIcon, 
  Volume2, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  X, 
  Award,
  BookOpen,
  ChevronLeft,
  RotateCcw,
  Smile
} from 'lucide-react';
import { LMS_COURSES, LessonContent } from '@/lib/lms-data';

export default function PrimaryLearningPage() {
  const primaryCourse = LMS_COURSES.find(c => c.levelId === 'PRIMARY')!;
  const [xp, setXp] = useState(1450);
  const [streak, setStreak] = useState(7);
  const [activeLesson, setActiveLesson] = useState<LessonContent | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([
    'شارة البداية المشرفة 🌟',
    'مكتشف الحروف والأرقام 🔤'
  ]);

  const handleStartLesson = (lesson: LessonContent) => {
    setActiveLesson(lesson);
    setQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setQuizScore(0);
    setShowResultModal(false);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || !activeLesson || !activeLesson.quizQuestions) return;
    setIsAnswerSubmitted(true);
    const currentQ = activeLesson.quizQuestions[quizIndex];
    if (selectedOption === currentQ.correctAnswerIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!activeLesson || !activeLesson.quizQuestions) return;
    if (quizIndex + 1 < activeLesson.quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Finished Quiz
      const reward = activeLesson.xpReward || 50;
      setXp(prev => prev + reward);
      if (!unlockedBadges.includes('بطل التحديات الابتدائي 🏆')) {
        setUnlockedBadges([...unlockedBadges, 'بطل التحديات الابتدائي 🏆']);
      }
      setShowResultModal(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      
      {/* HEADER WITH GAMIFICATION STATUS */}
      <div className="glass-panel p-8 rounded-3xl border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-amazigh-darkBg to-amazigh-darkCard space-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg">
              <Trophy className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 tifinagh-font">ⴰⵍⵎⵎⵓⴷ ⴰⵎⵏⵣⵓ</span>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  الطور الابتدائي (Gamification)
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white mt-1">
                واجهة التعلم المعتمدة على التلعيب والتفاعل
              </h1>
            </div>
          </div>

          <Link href="/learning" className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold flex items-center gap-2 border border-white/10">
            <span>العودة للأطوار</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Live Gamification Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400">نقاط التحدي (XP)</div>
                <div className="text-xl font-black text-amber-400">{xp} XP</div>
              </div>
            </div>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-1 rounded font-bold">+50 اليوم</span>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
                <Flame className="w-6 h-6 fill-rose-500" />
              </div>
              <div>
                <div className="text-xs text-slate-400">أيام التتابع (Streak)</div>
                <div className="text-xl font-black text-rose-400">{streak} أيام متتالية</div>
              </div>
            </div>
            <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-1 rounded font-bold">نشط 🔥</span>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400">الشارات المكتسبة</div>
                <div className="text-sm font-bold text-cyan-300">{unlockedBadges.length} شارات تذكارية</div>
              </div>
            </div>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded font-bold">المستوى 2</span>
          </div>
        </div>

      </div>

      {/* MODULES & LESSONS LIST */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-amber-400" />
          <span>الوحدات الدراسية المقررة (المستوى الابتدائي):</span>
        </h2>

        {primaryCourse.modules.map((mod) => (
          <div key={mod.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 tifinagh-font">{mod.tifinaghTitle}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{mod.title}</h3>
                <span className="text-xs text-slate-400">{mod.targetGrade}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                {mod.lessons.length} دروس تفاعلية
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mod.lessons.map((lesson) => (
                <div key={lesson.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all hover-lift space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                        {lesson.contentType === 'SONG_FLASHCARD' ? '🎵 نشيد وبطاقات' : '📚 قصة مصورة'}
                      </span>
                      <span className="text-xs font-bold text-amber-400">+{lesson.xpReward} XP</span>
                    </div>

                    <h4 className="text-base font-bold text-white">{lesson.title}</h4>
                    <span className="text-xs text-amber-400 font-mono block">{lesson.tifinaghTitle}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{lesson.summary}</p>
                  </div>

                  <button
                    onClick={() => handleStartLesson(lesson)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>ابدأ الدرس والتحدي</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE LESSON & QUIZ MODAL */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-amber-500/40 max-w-2xl w-full space-y-6 relative animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 tifinagh-font">{activeLesson.tifinaghTitle}</span>
                <h3 className="text-xl font-bold text-white">{activeLesson.title}</h3>
              </div>
              <button 
                onClick={() => setActiveLesson(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lesson Body Content */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h4 className="text-xs font-bold text-amber-300">محتوى القصة والأناشيد الناطقة:</h4>
                <pre className="text-xs text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">
                  {activeLesson.textBody}
                </pre>
              </div>

              {/* Audio Pronunciations list if any */}
              {activeLesson.audioPronunciations && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400">النطق الصوتي التفاعلي:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeLesson.audioPronunciations.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if ('speechSynthesis' in window) {
                            const utt = new SpeechSynthesisUtterance(item.text);
                            window.speechSynthesis.speak(utt);
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs flex items-center gap-1.5 border border-amber-500/30 transition-all"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quiz Interactive Section */}
              {activeLesson.quizQuestions && activeLesson.quizQuestions.length > 0 && !showResultModal && (
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-cyan-300">
                    <span>التحدي التفاعلي (السؤال {quizIndex + 1} من {activeLesson.quizQuestions.length})</span>
                    <span>+{activeLesson.xpReward} XP عند الفوز</span>
                  </div>

                  {(() => {
                    const q = activeLesson.quizQuestions[quizIndex];
                    return (
                      <div className="space-y-4 bg-slate-900/80 p-5 rounded-2xl border border-white/10">
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-white">{q.question}</h4>
                          {q.tifinaghQuestion && <span className="text-xs text-amber-400 tifinagh-font block">{q.tifinaghQuestion}</span>}
                        </div>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = selectedOption === optIdx;
                            const isCorrect = optIdx === q.correctAnswerIndex;

                            let btnStyle = 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10';
                            if (isAnswerSubmitted) {
                              if (isCorrect) btnStyle = 'bg-emerald-500/30 border-emerald-400 text-emerald-200 font-bold';
                              else if (isSelected) btnStyle = 'bg-rose-500/30 border-rose-400 text-rose-200';
                            } else if (isSelected) {
                              btnStyle = 'bg-amber-500/30 border-amber-400 text-amber-200 font-bold';
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswerSubmitted}
                                onClick={() => setSelectedOption(optIdx)}
                                className={`w-full p-3 rounded-xl border text-right text-xs transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Box */}
                        {isAnswerSubmitted && (
                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                            <strong>الشرح البيداغوجي:</strong> {q.explanation}
                          </div>
                        )}

                        <div className="pt-2 flex justify-end gap-3">
                          {!isAnswerSubmitted ? (
                            <button
                              disabled={selectedOption === null}
                              onClick={handleCheckAnswer}
                              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold text-xs shadow-md disabled:opacity-50"
                            >
                              تأكيد الإجابة
                            </button>
                          ) : (
                            <button
                              onClick={handleNextQuestion}
                              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs shadow-md flex items-center gap-1"
                            >
                              <span>السؤال التالي</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Quiz Success Modal */}
              {showResultModal && (
                <div className="pt-4 border-t border-white/10 text-center space-y-4 bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/40">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-gold-glow animate-bounce">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-white">تهانينا! أكملت التحدي بنجاح! 🎉</h4>
                  <p className="text-xs text-emerald-300 font-bold">
                    حصلت على +{activeLesson.xpReward} XP وتمت إضافة الوسام لحسابك البيداغوجي!
                  </p>
                  <button
                    onClick={() => {
                      setActiveLesson(null);
                      setShowResultModal(false);
                    }}
                    className="px-8 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md"
                  >
                    متابعة الدروس الأخرى
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
