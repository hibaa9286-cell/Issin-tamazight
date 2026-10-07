import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'منصة أگـــــرّام (AGY-AMAZIGH) | المنصة الوطنية التفاعلية للغة والثقافة الأمازيغية',
  description: 'منصة رقمية تفاعلية موحدة، عالية الأداء، وقابلة للتوسع مخصصة للغة والثقافة الأمازيغية. تضم المتحف الرقمي، نظام LMS التعليمي للطور الابتدائي والمتوسط والثانوي، القاموس الذكي متعدد المتغيرات، والبيئة التشاركية الوطنية.',
  keywords: [
    'الأمازيغية',
    'تعليم الأمازيغية',
    'قاموس أمازيغي',
    'تيفيناغ',
    'Tifinagh',
    'Tamazight',
    'LMS الأمازيغية',
    'المتحف الأمازيغي الرقمي',
    'المشترك المعجمي',
    'الأمازيغية المعيارية'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="bg-amazigh-darkBg text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
