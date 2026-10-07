export interface QuizQuestion {
  id: string;
  question: string;
  tifinaghQuestion?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LessonContent {
  id: string;
  title: string;
  tifinaghTitle: string;
  contentType: 'AUDIO_COMIC' | 'SONG_FLASHCARD' | 'GRAMMAR_UNIT' | 'LITERATURE_ANALYSIS' | 'QUIZ';
  summary: string;
  durationMinutes: number;
  xpReward: number;
  mediaUrl?: string;
  textBody?: string;
  audioPronunciations?: { label: string; text: string; audioUrl: string }[];
  quizQuestions?: QuizQuestion[];
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  tifinaghTitle: string;
  targetGrade: string;
  description: string;
  lessons: LessonContent[];
}

export interface EducationLevelCourse {
  levelId: 'PRIMARY' | 'MIDDLE' | 'SECONDARY';
  title: string;
  tifinaghTitle: string;
  curriculumCode: string;
  description: string;
  modules: CourseModule[];
}

export const LMS_COURSES: EducationLevelCourse[] = [
  {
    levelId: 'PRIMARY',
    title: 'الطور الابتدائي (المستوى الأساسي والتلعيب)',
    tifinaghTitle: 'ⴰⵍⵎⵎⵓⴷ ⴰⵎⵏⵣⵓ',
    curriculumCode: 'ALG-MIN-EDU-PRIM-2026',
    description: 'مناهج منظمة وفق المقررات المعتمدة في المدارس الوطنية الابتدائية (السنة 3، 4، 5) يعتمد كلياً على التلعيب (Gamification)، القصص المصورة الناطقة، بطاقات الألوان والأرقام، والأناشيد التفاعلية.',
    modules: [
      {
        id: 'prim-mod-1',
        moduleNumber: 1,
        title: 'الوحدة 1: الحروف والتيفيناغ والأرقام (Agemmay d Imḍanen)',
        tifinaghTitle: 'ⵯⴰⵃⴷⴰ 1: ⴰⴳⵎⵎⴰⵢ ⴷ ⵉⵎⴹⴰⵏⵏ',
        targetGrade: 'السنة الثالثة ابتدائي',
        description: 'التعرف التفاعلي على أصوات وتشكيل خط التيفيناغ مع الأعداد الأولى والألوان.',
        lessons: [
          {
            id: 'p-les-1',
            title: 'الدرس 1: نشيد حروف التيفيناغ الناطق',
            tifinaghTitle: 'Izli n Ugemmay n Tifinagh',
            contentType: 'SONG_FLASHCARD',
            summary: 'استمع للأغنية التفاعلية وتعرّف على كتابة ونطق الحروف الأساسية: ⵣ (Yaz)، ⴰ (Ya)، ⵎ (Yam)، ⵀ (Yah).',
            durationMinutes: 10,
            xpReward: 50,
            mediaUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
            textBody: 'أغنية الحروف الأمازيغية:\n- ⵣ (Yaz) : ⴰⵎⴰⵣⵉⵖ (Amazigh - الإنسان الحر)\n- ⴰ (Ya) : ⴰⵎⴰⵏ (Aman - الماء)\n- ⵜ (Yat) : ⵜⴰⴼⵓⴽⵜ (Tafukt - الشمس)\n- ⴷ (Yad) : ⵜⵉⴷⴷⵓⴽⵍⴰ (Tiddukla - الصداقة)',
            audioPronunciations: [
              { label: 'حرف الياز ⵣ', text: 'Yaz - ⵣ', audioUrl: '' },
              { label: 'حرف الألف ⴰ', text: 'Ya - ⴰ', audioUrl: '' },
              { label: 'حرف التاء ⵜ', text: 'Yat - ⵜ', audioUrl: '' },
            ],
            quizQuestions: [
              {
                id: 'q1',
                question: 'ما هو الحرف الذي يرمز للإنساني الحر والهوية الأمازيغية؟',
                tifinaghQuestion: 'Anwa agemmay i d-iskan Amazigh?',
                options: ['حرف ⵣ (Yaz)', 'حرف ⵎ (Yam)', 'حرف ⴱ (Yab)', 'حرف ⵔ (Yar)'],
                correctAnswerIndex: 0,
                explanation: 'حرف ⵣ (Yaz) هو الحرف المركزي في التيفيناغ ويرمز للحرية والأصالة الأمازيغية.'
              },
              {
                id: 'q2',
                question: 'ما معنى كلمة "ⴰⵎⴰⵏ" (Aman) بالعربية؟',
                tifinaghQuestion: 'D acu i d anamek n wawal "Aman"?',
                options: ['الأرض', 'الماء', 'الشمس', 'القمر'],
                correctAnswerIndex: 1,
                explanation: 'كلمة "ⴰⵎⴰⵏ" (Aman) تعني الماء وهي مشتركة بين جميع المناطق الأمازيغية.'
              }
            ]
          },
          {
            id: 'p-les-2',
            title: 'الدرس 2: قصة مصورة ناطقة - ألوان ونعم الطبيعة',
            tifinaghTitle: 'Iniyn d Ugama',
            contentType: 'AUDIO_COMIC',
            summary: 'قصة تفاعلية ناطقة للطفل يوغرتة وصديقته تيزيري في الغابة للتعرف على الألوان بالأمازيغية.',
            durationMinutes: 12,
            xpReward: 60,
            textBody: 'قصة يوغرتة وتيزيري:\n- الأزرق: ⴰⵎⵍⴰⵍ / ⴰⵣⴳⵣⴰⵡ (Azegzaw - لون البحر والسماء)\n- الأخضر: ⴰⵣⴳⵣⴰⵡ (Azegzaw n tuga - لون الأشجار)\n- الأصفر: ⴰⵡⵔⴰⵖ (Awraɣ - لون أشعة الشمس ⵜⴰⴼⵓⴽⵜ)\n- الأحمر: ⴰⵣⴳⴳⵯⴰⵖ (Azegggaɣ - لون ورد الأوراس)',
            quizQuestions: [
              {
                id: 'q3',
                question: 'كيف نقول اللون "الأصفر" بالأمازيغية؟',
                options: ['Azegzaw', 'Awraɣ (ⴰⵡⵔⴰⵖ)', 'Azeggwaɣ', 'Amellal'],
                correctAnswerIndex: 1,
                explanation: 'Awraɣ (ⴰⵡⵔⴰⵖ) هو اللون الأصفر المستوحى من رمال الصحراء وأشعة الشمس.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    levelId: 'MIDDLE',
    title: 'الطور المتوسط (المستوى التواصلي والقواعد)',
    tifinaghTitle: 'ⴰⵍⵎⵎⵓⴷ ⴰⵎⵙⵎⴰⵙ',
    curriculumCode: 'ALG-MIN-EDU-MID-2026',
    description: 'مناهج منظمة لمرحلة التعليم المتوسط (من 1 إلى 4 متوسط) تركز على قواعد النحو، بناء الجمل، الحوارات اليومية، وتنمية الاستماع والتحليل.',
    modules: [
      {
        id: 'mid-mod-1',
        moduleNumber: 1,
        title: 'الوحدة 1: قواعد صياغة الجملة الأمازيغية (Tajerrumt d Tseddast)',
        tifinaghTitle: 'ⵯⴰⵃⴷⴰ 1: ⵜⴰⵊⵔⵓⵎⵜ ⴷ ⵜⵙⴷⴷⴰⵙⵜ',
        targetGrade: 'السنة الثانية متوسط',
        description: 'دراسة تركيب الجملة الفعلية والجملة الاسمية والضمائر المتصلة.',
        lessons: [
          {
            id: 'm-les-1',
            title: 'الدرس 1: الجملة الفعلية وترتيب عناصرها (فعل + فاعل + مفعول)',
            tifinaghTitle: 'Taseddast n Tefyirt Tansemyant',
            contentType: 'GRAMMAR_UNIT',
            summary: 'في اللسانيات الأمازيغية يتقدم الفعل عادة على الفاعل: VSO (Verb + Subject + Object).',
            durationMinutes: 20,
            xpReward: 100,
            textBody: 'تركيب الجملة الفعلية:\n1. الفعل (Amyag): Yura (كتب / ⵢⵓⵔⴰ)\n2. الفاعل (Amassag): unelmad (التلميذ / ⵓⵏⵍⵎⴰⴷ)\n3. المفعول به (Asemmad): adlis (الكتاب / ⴰⴷⵍⵉⵙ)\nالجملة الكاملة: Yura unelmad adlis (كتب التلميذ الكتاب).',
            quizQuestions: [
              {
                id: 'qm1',
                question: 'ما هو الترتيب القياسي لعناصر الجملة الفعلية في اللغة الأمازيغية؟',
                options: ['فاعل + فعل + مفعول', 'فعل + فاعل + مفعول (VSO)', 'مفعول + فعل + فاعل', 'فاعل + مفعول + فعل'],
                correctAnswerIndex: 1,
                explanation: 'الترتيب الأصيل في الأمازيغية هو تبدئة الجملة بالفعل ثم الفاعل ثم المفعول به.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    levelId: 'SECONDARY',
    title: 'الطور الثانوي (المستوى الأكاديمي والنقدي)',
    tifinaghTitle: 'ⴰⵍⵎⵎⵓⴷ ⴰⵙⵉⵏⴰⵏ',
    curriculumCode: 'ALG-MIN-EDU-SEC-2026',
    description: 'مناهج موجهة لطلاب مرحلة التعليم الثانوي تركز على تحليل النصوص الأدبية، تاريخ الأدب الأمازيغي، الصرف المعمق، والإنتاج الكتابي الأكاديمي.',
    modules: [
      {
        id: 'sec-mod-1',
        moduleNumber: 1,
        title: 'الوحدة 1: تحليل الشعر الأدبي والمأثورات (Tasleḍt n Usefru)',
        tifinaghTitle: 'ⵯⴰⵃⴷⴰ 1: ⵜⴰⵙⵍⴹⵜ ⵯ ⵓⵙⴼⵔⵓ',
        targetGrade: 'السنة الثالثة ثانوي (بكالوريا)',
        description: 'دراسة وتحليل خصائص الشعر الشفهي والكتابي لدى شعراء وحكماء الجزائر.',
        lessons: [
          {
            id: 's-les-1',
            title: 'الدرس 1: تحليل قصائد الحكمة (Asefru n Tmusni)',
            tifinaghTitle: 'Tasleḍt n Usefru n Tmusni d Tissas',
            contentType: 'LITERATURE_ANALYSIS',
            summary: 'قراءة نقدية لقصائد الحكمة الأمازيغية واستخراج الصور البيانية والبلاغية والقيم الإنسانية.',
            durationMinutes: 30,
            xpReward: 150,
            textBody: 'النص الأدبي المشروح:\n"Awin yebɣan tamusni, ad iswel ar lqas: nnefɛa n wawal d tidet, tin n tussna d ssfa."\n(من أراد الحكمة والتسلح بالعلم، فنفع الكلام في صدقه، ونفع المعرفة في نقاء جوهرها).\nالتحليل البلاغي:\n- الجناس والطباق في مفردات (Tidet) و (Tussna).\n- قيم الصدق والوفاء كمرتكز أخلاقي في التراث.',
            quizQuestions: [
              {
                id: 'qs1',
                question: 'ما معنى الجذور البلاغية لمصطلح "Tamusni" في الأدب الأمازيغي؟',
                options: ['الفروسية', 'الحكمة والمعرفة العميقة', 'التجارة', 'الفلاحة'],
                correctAnswerIndex: 1,
                explanation: 'Tamusni تعني المعرفة والحكمة المنقولة عبر الأجيال والتأمل.'
              }
            ]
          }
        ]
      }
    ]
  }
];
