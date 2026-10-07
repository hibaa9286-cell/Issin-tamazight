import { MuseumExhibitData } from '@/types';

export interface MuseumDocumentary {
  id: string;
  title: string;
  tifinaghTitle: string;
  type: 'MOTION_GRAPHICS' | 'LIVE_ACTION';
  duration: string;
  historicalEra: string;
  summary: string;
  videoUrl: string;
  thumbnailUrl: string;
  tags: string[];
}

export interface CulturalMapLocation {
  id: string;
  title: string;
  tifinaghTitle: string;
  regionName: string;
  wilaya: string;
  coordinates: { lat: number; lng: number };
  era: string;
  description: string;
  imageUrl: string;
  artifactsCount: number;
}

export interface TimelineEvent {
  id: string;
  yearBCE: string;
  title: string;
  tifinaghTitle: string;
  description: string;
  category: 'INSCRIPTIONS' | 'KINGDOMS' | 'ARCHITECTURE' | 'LITERATURE';
  icon: string;
}

export const MUSEUM_DOCUMENTARIES: MuseumDocumentary[] = [
  {
    id: 'doc-1',
    title: 'أصول اللغة الأمازيغية وتطور خط التيفيناغ الأصيل',
    tifinaghTitle: 'Aẓar n Tmaziɣt d Tifinagh',
    type: 'MOTION_GRAPHICS',
    duration: '14:20 دقيقة',
    historicalEra: 'العصر العتيق والماقبل تاريخي',
    summary: 'وثائقي غرافيكس عالي الدقة يستعرض جذور خط التيفيناغ في نقوش الهقار والتاسيلي، وكيف تطور من خط ليبي قديم إلى أبجدية عصرية موثقة دولياً.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    tags: ['Motion Graphics', 'خط التيفيناغ', 'التاريخ القديم', 'نقوش الصحراء']
  },
  {
    id: 'doc-2',
    title: 'مملكة نوميديا: شيشناق ومورثون الحضارة الأمازيغية',
    tifinaghTitle: 'Tagelda n Numidya d Massensen',
    type: 'LIVE_ACTION',
    duration: '22:45 دقيقة',
    historicalEra: 'العصر النوميدي (القرن 3 ق.م)',
    summary: 'مشاهد حية ومحاكاة تاريخية لعهد الملك ماسينيسا وتوحيد نوميديا، وسك العملات النقدية الأولى وتطوير الفلاحة والعمارة الوطنية.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    tags: ['Live Action', 'نوميديا', 'ماسينيسا', 'العمارة']
  },
  {
    id: 'doc-3',
    title: 'مخطوطات ومكتبات قصر الأوراس وقورارة ومزاب',
    tifinaghTitle: 'Tira d Tseqqifin n Tussna',
    type: 'LIVE_ACTION',
    duration: '18:10 دقيقة',
    historicalEra: 'العصر الوسيط والحديث',
    summary: 'جولة توثيقية داخل خزانات المخطوطات القديمة في وادي مزاب، قورارة، وجبال الأوراس والتي تحفظ الفقه والأدب والرياضيات باللغة الأمازيغية.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    tags: ['مخطوطات', 'خزانات التراث', 'مزاب', 'الأوراس']
  }
];

export const CULTURAL_MAP_LOCATIONS: CulturalMapLocation[] = [
  {
    id: 'loc-1',
    title: 'نقوش الطاسيلي ناجر والرسومات الكهفية',
    tifinaghTitle: 'Tassili n Ajjer',
    regionName: 'الهقار والطاسيلي',
    wilaya: 'إليزي / جانت (ولاية إليزي)',
    coordinates: { lat: 24.87, lng: 9.42 },
    era: '10,000 سنة قبل الميلاد',
    description: 'أكبر متحف طبيعي مفتوح للنقوش الصخرية ورموز التيفيناغ الأبدية الموثقة على الجبال.',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    artifactsCount: 120
  },
  {
    id: 'loc-2',
    title: 'ضريح إمدغاسن النوميدي (Imedghassen)',
    tifinaghTitle: 'Imedɣasen n Nummidya',
    regionName: 'الأوراس',
    wilaya: 'باتنة (ولاية باتنة)',
    coordinates: { lat: 35.67, lng: 6.43 },
    era: 'القرن 3 قبل الميلاد',
    description: 'أقدم ضريح ملكي نوميدي في شمال إفريقيا يجسد الإبداع الهندسي والشموخ الحضاري الأمازيغي.',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    artifactsCount: 45
  },
  {
    id: 'loc-3',
    title: 'ضريح ماسينيسا (صومعة الخروب)',
    tifinaghTitle: 'Aẓekka n Masensen',
    regionName: 'الشرق الجزائري',
    wilaya: 'قسنطينة (ولاية قسنطينة)',
    coordinates: { lat: 36.26, lng: 6.69 },
    era: '203 قبل الميلاد',
    description: 'المعلم التاريخي للمؤسس الأول لمملكة نوميديا الموحدة وخاتم الهوية الوطنية.',
    imageUrl: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=800&q=80',
    artifactsCount: 30
  },
  {
    id: 'loc-4',
    title: 'قصور وقرى وادي مزاب المعمارية',
    tifinaghTitle: 'Iɣerman n Mẓab',
    regionName: 'شمال الصحراء',
    wilaya: 'غرداية (ولاية غرداية)',
    coordinates: { lat: 32.48, lng: 3.67 },
    era: 'القرن 10 الميلادي',
    description: 'الهندسة المعمارية التراثية المتميزة بالبساطة والانسجام الاجتماعي والتحصين المائي.',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    artifactsCount: 85
  },
  {
    id: 'loc-5',
    title: 'قلعة بني حماد التاريخية',
    tifinaghTitle: 'Qalɛa n At Ḥammad',
    regionName: 'الحضنة',
    wilaya: 'المسيلة (ولاية المسيلة)',
    coordinates: { lat: 35.81, lng: 4.78 },
    era: '1007 الميلادي',
    description: 'عاصمة حمادية تعكس الامتزاج الأمازيغي الإسلامي في العمارة والتخطيط العمراني.',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    artifactsCount: 60
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'time-1',
    yearBCE: '950 ق.م',
    title: 'اعتلاء الملك شيشناق للعرش وتأسيس التقويم الأمازيغي (Yennayer)',
    tifinaghTitle: 'Asawen n Ssecnaq d Yennayer',
    description: 'بداية التقويم الأمازيغي (2976) المعتمد رسمياً في الجزائر والذي يرمز للخصب والارتباط بالأرض.',
    category: 'KINGDOMS',
    icon: '👑'
  },
  {
    id: 'time-2',
    yearBCE: '202 ق.م',
    title: 'توحيد نوميديا تحت راية الملك ماسينيسا (Massensen)',
    tifinaghTitle: 'Tawada n Numidya',
    description: 'توحيد قبائل الماسيل والماساسيل وسك العملة المكتوبة بالخط الليبي/التيفيناغ القديم.',
    category: 'KINGDOMS',
    icon: '🏛️'
  },
  {
    id: 'time-3',
    yearBCE: 'القرن 2 ق.م',
    title: 'تدوين النقوش المزدوجة (التيفيناغ واللاتينية) في ضريح دوجة',
    tifinaghTitle: 'Tira n Tifinagh d Tlatinit',
    description: 'أول دليل أرشيفي يثبت دقة قواعد الأبجدية الأمازيغية واستخدامها في المعاهدات والوثائق.',
    category: 'INSCRIPTIONS',
    icon: '📜'
  },
  {
    id: 'time-4',
    yearBCE: 'القرن 12 م',
    title: 'تأليف المخطوطات العلمية والفقهية باللغة الأمازيغية',
    tifinaghTitle: 'Tira n Idlisen n Tussna',
    description: 'تدوين الكتب الطبية والشرعية والمعاجم بالحرف العربي والتيفيناغ في خزانات بجاية والأوراس ومزاب.',
    category: 'LITERATURE',
    icon: '📚'
  }
];
