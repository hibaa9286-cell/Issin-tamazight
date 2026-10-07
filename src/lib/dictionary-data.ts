import { DictionaryEntryData } from '@/types';

export const INITIAL_DICTIONARY_ENTRIES: DictionaryEntryData[] = [
  {
    id: 'dict-1',
    tifinagh: 'ⴰⵎⴰⵣⵉⵖ',
    latinTamaziɣt: 'Amazigh',
    arabicMeaning: 'الإنساني الحر / الأمازيغي (جمع: إيمازيغن ⵉⵎⴰⵣⵉⵖⵏ)',
    frenchMeaning: 'Homme libre / Amazigh (Pluriel: Imazighen)',
    root: 'M-Z-Ɣ',
    partOfSpeech: 'اسم مذكر (Noun m.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'الهوية والتاريخ',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c268c74070.mp3?filename=welcome.mp3',
    variants: [
      { id: 'v1-1', dialectCode: 'KAB', dialectName: 'القبائلية (ⵜⴰⵇⴱⴰⵢⵍⵉⵜ)', region: 'تيزي وزو / بجاية / بويرا', localSpelling: 'Amaziɣ' },
      { id: 'v1-2', dialectCode: 'CHA', dialectName: 'الشاوية (ⵜⴰⵛⴰⵡⵉⵜ)', region: 'باتنة / خنشلة / أم البواقي', localSpelling: 'Amaziɣ' },
      { id: 'v1-3', dialectCode: 'MOZ', dialectName: 'المزابية (ⵜⴰⵎⵣⴰⴱⵜ)', region: 'غرداية / وادي مزاب', localSpelling: 'Amaziɣ' },
      { id: 'v1-4', dialectCode: 'TUA', dialectName: 'التارقية (ⵜⴰⵎⴰⵌⴰⵇ)', region: 'تمنراست / إليزي / جانت', localSpelling: 'Amajeɣ / Amaheɣ' },
      { id: 'v1-5', dialectCode: 'CHE', dialectName: 'الشنوية (ⵜⴰⵛⵏⵡⵉⵜ)', region: 'تيبازة / شرشال', localSpelling: 'Amaziɣ' },
    ],
    commonRegions: ['القبائل', 'الأوراس', 'مزاب', 'الهقار والتاسيلي', 'تيبازة', 'قورارة']
  },
  {
    id: 'dict-2',
    tifinagh: 'ⵜⴰⴼⵓⴽⵜ',
    latinTamaziɣt: 'Tafukt',
    arabicMeaning: 'الشمس (نور وسناء)',
    frenchMeaning: 'Soleil',
    root: 'F-K-T',
    partOfSpeech: 'اسم مؤنث (Noun f.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'الطبيعة والفلك',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c268c74070.mp3',
    variants: [
      { id: 'v2-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'شمال الجزائر', localSpelling: 'Tafukt' },
      { id: 'v2-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'الأوراس', localSpelling: 'Tafukt' },
      { id: 'v2-3', dialectCode: 'TUA', dialectName: 'التارقية', region: 'الهقار والطاسيلي', localSpelling: 'Tafuk / Tafukt' },
      { id: 'v2-4', dialectCode: 'MOZ', dialectName: 'المزابية', region: 'وادي مزاب', localSpelling: 'Tafuyt / Tafukt' },
    ],
    commonRegions: ['القبائل', 'الأوراس', 'مزاب', 'الهقار والتاسيلي']
  },
  {
    id: 'dict-3',
    tifinagh: 'ⴰⵎⴰⵏ',
    latinTamaziɣt: 'Aman',
    arabicMeaning: 'الماء / مياه الحياة (جمع لا مفرد له)',
    frenchMeaning: 'Eau / Les eaux',
    root: 'M-N',
    partOfSpeech: 'اسم جمع (Noun pl.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'المشترك المعجمي الشامل',
    audioUrl: '',
    variants: [
      { id: 'v3-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'كافة المناطق', localSpelling: 'Aman' },
      { id: 'v3-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'كافة المناطق', localSpelling: 'Aman' },
      { id: 'v3-3', dialectCode: 'MOZ', dialectName: 'المزابية', region: 'كافة المناطق', localSpelling: 'Aman' },
      { id: 'v3-4', dialectCode: 'TUA', dialectName: 'التارقية', region: 'كافة المناطق', localSpelling: 'Aman' },
      { id: 'v3-5', dialectCode: 'CHE', dialectName: 'الشنوية', region: 'كافة المناطق', localSpelling: 'Aman' },
    ],
    commonRegions: ['القبائل', 'الأوراس', 'مزاب', 'الهقار والتاسيلي', 'تيبازة', 'قورارة']
  },
  {
    id: 'dict-4',
    tifinagh: 'ⵜⵉⴷⴷⵓⴽⵍⴰ',
    latinTamaziɣt: 'Tiddukla',
    arabicMeaning: 'الصداقة / الأخوة والتضامن الاجتماعي (التويزة)',
    frenchMeaning: 'Amitié / Fraternité / Solidarité',
    root: 'D-K-L',
    partOfSpeech: 'اسم مؤنث (Noun f.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'المجتمع والقيم',
    audioUrl: '',
    variants: [
      { id: 'v4-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'تيزي وزو', localSpelling: 'Tiddukla' },
      { id: 'v4-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'خنشلة', localSpelling: 'Tiddukt' },
      { id: 'v4-3', dialectCode: 'MOZ', dialectName: 'المزابية', region: 'غرداية', localSpelling: 'Tiddukla' },
    ],
    commonRegions: ['القبائل', 'الأوراس', 'مزاب']
  },
  {
    id: 'dict-5',
    tifinagh: 'ⵜⴰⵎⵓⵔⵜ',
    latinTamaziɣt: 'Tammurt',
    arabicMeaning: 'الوطن / الأرض / البلد الأم',
    frenchMeaning: 'Patrie / Terre natal',
    root: 'M-R-T',
    partOfSpeech: 'اسم مؤنث (Noun f.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'الجغرافيا والوطن',
    audioUrl: '',
    variants: [
      { id: 'v5-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'شمال الجزائر', localSpelling: 'Tamurt' },
      { id: 'v5-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'الأوراس', localSpelling: 'Tamurt' },
      { id: 'v5-3', dialectCode: 'MOZ', dialectName: 'المزابية', region: 'غرداية', localSpelling: 'Tamurt' },
      { id: 'v5-4', dialectCode: 'TUA', dialectName: 'التارقية', region: 'الجنوب', localSpelling: 'Tawhart / Tamurt' },
    ],
    commonRegions: ['القبائل', 'الأوراس', 'مزاب', 'الهقار']
  },
  {
    id: 'dict-6',
    tifinagh: 'ⴰⵙⴼⵔⵓ',
    latinTamaziɣt: 'Asfru',
    arabicMeaning: 'القصيدة الشعرية / حكمة المأثورات الشفهية',
    frenchMeaning: 'Poème / Poésie traditionnelle',
    root: 'F-R-Y',
    partOfSpeech: 'اسم مذكر (Noun m.)',
    isLexicalCommon: false,
    isStandardized: true,
    standardCategory: 'الأدب والشعر',
    audioUrl: '',
    variants: [
      { id: 'v6-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'بجاية / تيزي وزو', localSpelling: 'Asefru' },
      { id: 'v6-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'باتنة', localSpelling: 'Asefru' },
    ],
    commonRegions: ['القبائل', 'الأوراس']
  },
  {
    id: 'dict-7',
    tifinagh: 'ⵜⴰⵙⵏⴰⵍⵖⴰ',
    latinTamaziɣt: 'Tasnalɣa',
    arabicMeaning: 'علم الصرف والمورفولوجيا (مصطلح علمي حديث)',
    frenchMeaning: 'Morphologie (Linguistique)',
    root: 'L-ⵞ-A',
    partOfSpeech: 'مصطلح علمي (Technical Term)',
    isLexicalCommon: false,
    isStandardized: true,
    standardCategory: 'اللسانيات والتكنولوجيا',
    audioUrl: '',
    variants: [
      { id: 'v7-1', dialectCode: 'STD', dialectName: 'أمازيغية معيارية (Tanawayt)', region: 'معتمد وطنيا', localSpelling: 'Tasnalɣa' },
    ],
    commonRegions: ['معتمد في المناهج الوطنية']
  },
  {
    id: 'dict-8',
    tifinagh: 'ⴰⴷⵍⵉⵙ',
    latinTamaziɣt: 'Adlis',
    arabicMeaning: 'الكتاب / المجلد التعليمي',
    frenchMeaning: 'Livre / Manuel',
    root: 'D-L-S',
    partOfSpeech: 'اسم مذكر (Noun m.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'التعليم والثقافة',
    audioUrl: '',
    variants: [
      { id: 'v8-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'تيزي وزو', localSpelling: 'Adlis' },
      { id: 'v8-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'باتنة', localSpelling: 'Adlis' },
      { id: 'v8-3', dialectCode: 'MOZ', dialectName: 'المزابية', region: 'غرداية', localSpelling: 'Adlis' },
      { id: 'v8-4', dialectCode: 'TUA', dialectName: 'التارقية', region: 'تمنراست', localSpelling: 'Edeleis / Adlis' }
    ],
    commonRegions: ['القبائل', 'الأوراس', 'مزاب', 'الهقار والتاسيلي']
  },
  {
    id: 'dict-9',
    tifinagh: 'ⵜⵉⴼⴰⵡⵜ',
    latinTamaziɣt: 'Tifawt',
    arabicMeaning: 'الفيء / الضوء / الصباح المشرق',
    frenchMeaning: 'Lumière / Aube',
    root: 'F-W-T',
    partOfSpeech: 'اسم مؤنث (Noun f.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'الزمن والطبيعة',
    audioUrl: '',
    variants: [
      { id: 'v9-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'تيزي وزو', localSpelling: 'Tifawt' },
      { id: 'v9-2', dialectCode: 'CHA', dialectName: 'الشاوية', region: 'الأوراس', localSpelling: 'Tifawt' },
      { id: 'v9-3', dialectCode: 'TUA', dialectName: 'التارقية', region: 'الجنوب', localSpelling: 'Tifawt' }
    ],
    commonRegions: ['القبائل', 'الأوراس', 'الهقار']
  },
  {
    id: 'dict-10',
    tifinagh: 'ⴰⴳⵔⴰⵡ',
    latinTamaziɣt: 'Agraw',
    arabicMeaning: 'الجمعية / المجلس الاستشاري / الملتقى',
    frenchMeaning: 'Assemblée / Forum / Conseil',
    root: 'G-R-W',
    partOfSpeech: 'اسم مذكر (Noun m.)',
    isLexicalCommon: true,
    isStandardized: true,
    standardCategory: 'المجتمع والسياسة',
    audioUrl: '',
    variants: [
      { id: 'v10-1', dialectCode: 'KAB', dialectName: 'القبائلية', region: 'بجاية', localSpelling: 'Agraw' },
      { id: 'v10-2', dialectCode: 'MOZ', dialectName: 'المزابية', region: 'غرداية', localSpelling: 'Agraw (Tajmaɛt)' },
      { id: 'v10-3', dialectCode: 'TUA', dialectName: 'التارقية', region: 'جانين', localSpelling: 'Agraw' }
    ],
    commonRegions: ['القبائل', 'مزاب', 'الهقار']
  }
];

export interface StandardProposal {
  id: string;
  termLatin: string;
  termTifinagh: string;
  arabicMeaning: string;
  domain: string;
  justification: string;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
  votesCount: number;
  authorName: string;
}

export const INITIAL_PROPOSALS: StandardProposal[] = [
  {
    id: 'prop-1',
    termLatin: 'Tasmatsant',
    termTifinagh: 'ⵜⴰⵙⵎⴰⵜⵙⴰⵏⵜ',
    arabicMeaning: 'الذكاء الاصطناعي (Artificial Intelligence)',
    domain: 'الذكاء الاصطناعي والتكنولوجيا',
    justification: 'مشتقة من جذر (S-M-T) ويعني التعلم والتحليل الذهني العميق.',
    status: 'APPROVED',
    votesCount: 42,
    authorName: 'د. يوسف شريفي (جامعة تيزي وزو)'
  },
  {
    id: 'prop-2',
    termLatin: 'Tazilalana',
    termTifinagh: 'ⵜⴰⵣⵉⵍⴰⵍⴰⵏⴰ',
    arabicMeaning: 'الحوسبة السحابية (Cloud Computing)',
    domain: 'تكنولوجيا المعلومات',
    justification: 'تركيب معجمي يجمع بين السحاب (Asignew) والرقمنة.',
    status: 'PENDING',
    votesCount: 18,
    authorName: 'أ. مريم بوزيد (جامعة باتنة 1)'
  }
];
