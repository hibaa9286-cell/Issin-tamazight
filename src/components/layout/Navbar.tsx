"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Landmark, 
  GraduationCap, 
  BookOpenCheck, 
  Users, 
  Flame, 
  Trophy, 
  Globe, 
  Menu, 
  X,
  Search,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTifinaghSub, setShowTifinaghSub] = useState(true);

  const navLinks = [
    {
      name: 'المتحف الرقمي',
      tifinagh: 'ⴰⵙⴰⵍⴰⵢ',
      href: '/museum',
      icon: Landmark,
      color: 'from-amber-500 to-yellow-600',
    },
    {
      name: 'مسارات التعلم (LMS)',
      tifinagh: 'ⴰⵍⵎⵎⵓⴷ',
      href: '/learning',
      icon: GraduationCap,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'المعجم الرقمي الذكي',
      tifinagh: 'ⴰⵎⴰⵡⴰⵍ',
      href: '/dictionary',
      icon: BookOpenCheck,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'البيئة التشاركية',
      tifinagh: 'ⵜⴰⵎⵓⵏⵜ',
      href: '/collaborative',
      icon: Users,
      color: 'from-rose-500 to-red-600',
    },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-amazigh-darkBg/80 border-b border-amazigh-darkBorder transition-all duration-300">
      {/* Top Announcement & Tifinagh Banner */}
      <div className="bg-gradient-to-r from-amazigh-blue-dark via-amazigh-darkBg to-amazigh-blue-dark border-b border-white/5 py-1.5 px-4 text-xs font-medium text-amber-200/90 flex justify-between items-center">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
              <Sparkles className="w-3 h-3 text-amber-400" />
              المنصة الرقمية الموحدة
            </span>
            <span className="hidden md:inline text-slate-300">
              برنامج وطني شامل للتأصيل اللغوي، التلعيب البيداغوجي، والبحث المعجمي
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => setShowTifinaghSub(!showTifinaghSub)}
              className="hover:text-amber-400 flex items-center gap-1 transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10"
            >
              <Globe className="w-3 h-3 text-cyan-400" />
              <span>{showTifinaghSub ? 'إخفاء التيفيناغ' : 'إظهار التيفيناغ'}</span>
            </button>
            <div className="flex items-center gap-3 border-r border-white/10 pr-3">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                <span>7 أيام متتابعة</span>
              </span>
              <span className="flex items-center gap-1 text-cyan-400 font-bold">
                <Trophy className="w-3.5 h-3.5 text-cyan-400" />
                <span>1,450 XP</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-emerald-500 to-cyan-600 p-[2px] shadow-gold-glow transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-amazigh-darkBg rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="text-2xl font-black text-amber-400 tifinagh-font transition-transform group-hover:rotate-6">
                  ⵣ
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-amber-100 to-cyan-300 bg-clip-text text-transparent">
                  أگـــــرّام
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono font-bold border border-amber-500/30">
                  AGY
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                المنصة الوطنية للغة والثقافة الأمازيغية
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
            <Link
              href="/"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                pathname === '/' 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-bold' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              الرئيسية
            </Link>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center ${
                    active
                      ? 'bg-gradient-to-r from-amber-500/20 to-cyan-500/20 text-amber-300 border border-amber-500/40 shadow-glass'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${active ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span>{link.name}</span>
                  </div>
                  {showTifinaghSub && (
                    <span className="text-[10px] text-amber-400/80 tifinagh-font font-normal">
                      {link.tifinagh}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/dictionary"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-2 text-xs"
              title="البحث السريع في القاموس"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden xl:inline">البحث في المعجم</span>
            </Link>

            <Link
              href="/learning/primary"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-gold-glow hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-slate-950" />
              <span>دخول بوابة التعلم</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-amber-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amazigh-darkBg/95 border-b border-amazigh-darkBorder backdrop-blur-2xl px-4 py-6 space-y-3 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-3 rounded-xl bg-white/5 text-amber-300 font-bold"
          >
            الرئيسية
          </Link>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold text-sm">{link.name}</span>
                </div>
                <span className="text-xs text-amber-400/90 tifinagh-font">{link.tifinagh}</span>
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/learning/primary"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold text-sm shadow-md"
            >
              دخول مسارات التعلم التفاعلي
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
