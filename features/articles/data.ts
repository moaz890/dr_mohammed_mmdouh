import type { AppLocale } from "@/i18n/routing";

import type { ArticleContent } from "./types";

const DOCTOR_AUTHOR_AR = {
  name: "أ.د. محمد ممدوح صالح",
  title: "أستاذ واستشاري أمراض النساء والتوليد وجراحة المناظير والحقن المجهري",
  credentials: "دكتوراه النساء والتوليد - كلية الطب | معتمد دولياً GESEA Level 2 MIGS",
  avatar: "/logo_transparent_clean.png",
};

const DOCTOR_AUTHOR_EN = {
  name: "Prof. Dr. Mohamed Mamdouh Saleh",
  title:
    "Professor & Consultant of Obstetrics, Gynecology, Minimally Invasive Surgery & IVF",
  credentials:
    "Ph.D. in OB/GYN — Faculty of Medicine | Certified GESEA Level 2 MIGS European Endoscopy",
  avatar: "/logo_transparent_clean.png",
};

export const ARTICLES_DATA: Record<AppLocale, Record<string, ArticleContent>> = {
  ar: {
    "painless-delivery": {
      slug: "painless-delivery",
      category: "painless-delivery",
      categoryLabel: "الولادة بدون ألم",
      title:
        "دليلك الطبي الشامل للولادة الطبيعية والقيصرية بدون ألم: كسر حاجز الخوف وتطمين الأمهات",
      subtitle:
        "حقائق طبية موثقة حول التخدير النصفي (حقنة الظهر)، مسكنات الولادة الحديثة، والتعافي السريع وفق توصيات ACOG و RCOG",
      excerpt:
        "هل حقنة الظهر تسبب شللاً أو ألم ظهر مزمن؟ وكيف تضمن بروتوكولات الولادة الحديثة تجربة آمنة خالية من المعاناة مع سرعة الحركة بعد ساعات؟",
      imageSrc: "/services/natural-birth.jpeg",
      readTimeMinutes: 7,
      publishedAt: "2025-01-20",
      updatedAt: "2025-03-01",
      author: DOCTOR_AUTHOR_AR,
      keyTakeaways: [
        "التخدير فوق الجافية (Epidural) هو المعيار الذهبي المعتمد عالمياً لتسكين آلام المخاض دون تأثير سلبي على صحة الجنين أو قدرة الأم على الدفع.",
        "حقنة الظهر تُعطى في الحيز القطني السفلي (تحت انتهاء الحبل الشوكي تماماً)، مما يجعل احتمالية الإصابة العصبية الدائمة شبه منعدمة طبياً (< 1 في 250,000 حالة).",
        "تطبيق بروتوكول التعافي السريع (ERAS) في القيصرية يتيح للأم المشي وتناول السوائل بعد 4-6 ساعات فقط، مع التحكم الكامل في الألم بواسطة حقن TAP Block الموضعية.",
        "الولادة بدون ألم تقلل إفراز هرمونات التوتر (الكورتيزول والأدرينالين)، مما يحسن تدفق الدم والأكسجين إلى المشيمة والجنين.",
      ],
      fears: [
        {
          id: "f-1",
          fear: "أخشى أن تسبب لي حقنة الظهر (الإبيديورال) شللاً دائماً أو ألماً مزمناً في العمود الفقري يمتد لسنوات.",
          reality:
            "هذا من أكثر المعتقدات المغلوطة شيوعاً. تشريحياً، ينتهي الحبل الشوكي عند الفقرة القطنية الأولى (L1)، بينما تُحقن الإبيديورال أسفل ذلك في الفقرات (L3-L4 أو L4-L5). تؤكد الكلية الأمريكية (ACOG) أن احتمالية المضاعفات الخطيرة أقل من 1 في ربع مليون، وأن ألم أسفل الظهر بعد الولادة يعود عادةً لتغيرات أربطة الحوض وزيادة الوزن أثناء الحمل، وليس بسبب الإبرة.",
          sourceTag: "ACOG Practice Bulletin No. 209",
        },
        {
          id: "f-2",
          fear: "أخاف أن توقف الإبيديورال انقباضات الطلق فتتحول ولادتي الطبيعية إجبارياً إلى قيصرية طارئة.",
          reality:
            "تعتمد عياداتنا بروتوكول (Walking Epidural) بجرعات متوازنة تخدر أعصاب الألم الحسية دون إضعاف عضلات الدفع أو إيقاف الطلق. أثبتت الدراسات المرجعية للكلية الملكية البريطانية (RCOG) أن التسكين النصفي الحديث لا يزيد إطلاقاً من احتمالية اللجوء للقيصرية.",
          sourceTag: "RCOG Green-top Guideline",
        },
        {
          id: "f-3",
          fear: "أخشى ألم الجرح بعد الولادة القيصرية وعدم القدرة على حمل طفلي أو الحركة بمفردي.",
          reality:
            "نعتمد بروتوكول التسكين متعدد الوسائط (Multimodal Analgesia) مع حقن عضلات جدار البطن بمخدر موضعي ممتد المفعول (TAP Block) وجهاز تسكين الألم الذاتي (PCA). يختفي 90% من ألم الجرح، وتتمكن الأم من إرضاع مولودها والمشي في نفس يوم العملية.",
          sourceTag: "ERAS Society Obstetric Consensus",
        },
      ],
      sections: [
        {
          id: "modern-analgesia",
          title: "كيف تطورت الولادة بدون ألم في الطب الحديث؟",
          content: [
            "لم تعد الولادة مرادفة للمعاناة والألم الشديد كما كان قديماً؛ فالطب التوليدي الحديث يعتبر تسكين الألم حقاً أساسياً لكل أم مقبلة على الإنجاب، وليس مجرد رفاهية إضافية.",
            "عندما تعاني الأم من ألم حاد أثناء المخاض، يفرز جسمها كميات كبيرة من الكاتيكولامينات وهرمونات الشدة، مما يؤدي إلى انقباض الأوعية الدموية الرحمية وارتفاع ضغط الدم. استخدام التسكين الآمن يهدئ الجهاز العصبي للأم، ويضمن وصول تدفق دموي مثالي للجنين، مما يجعل الولادة تجربة مريحة وسعيدة للأبوين.",
          ],
        },
        {
          id: "natural-vs-csection",
          title: "الولادة الطبيعية vs القيصرية بدون ألم: الفروق الطبية",
          content: [
            "في الولادة الطبيعية: يُوضع قسطار الإبيديورال عندما يبدأ اتساع عنق الرحم المنتظم (3-4 سم)، ويتم تزويد الأم بجرعات مستمرة ومحسوبة بدقة عبر مضخة إلكترونية حتى خروج الجنين ومشيمته، مع خياطة تجميلية لمنطقة العجان بدون أي إحساس بالوخز.",
            "في الولادة القيصرية بدون ألم: يُستخدم التخدير النصفي النخاعي (Spinal) الذي يبدأ مفعوله خلال دقيقتين، وتبقى الأم واعية تماماً لتسمع صرخة طفلها الأولى وتحتضنه فوراً (Skin-to-Skin contact)، يليه تقنية حقن العصب الحسي لجلد البطن (TAP block) وخياطة تجميلية ليزرية داخلية بدون غرز خارجية تُزال لاحقاً.",
          ],
        },
      ],
      advices: [
        {
          id: "adv-1",
          title: "التحضير في الشهر التاسع",
          description:
            "مارسي المشي اليومي لمدة 20-30 دقيقة وتمارين كيجل لتقوية عضلات قاع الحوض، وتناولي وجبات غنية بالألياف وشرب ما لا يقل عن 2.5 لتر ماء يومياً لتفادي الإمساك.",
          type: "do",
        },
        {
          id: "adv-2",
          title: "لا تترددي في طلب التسكين مبكراً",
          description:
            "أخبري الطبيب برغبتك في الولادة بدون ألم منذ بداية دخول المستشفى حتى يتم تجهيز فريق التخدير المتخصص ولا تنتظري حتى بلوغ الألم أقصى درجاته.",
          type: "tip",
        },
        {
          id: "adv-3",
          title: "الحركة المبكرة بعد الولادة",
          description:
            "احرصي على النزول من السرير بمساعدة التمريض بعد 4-6 ساعات في القيصرية وساعة واحدة في الطبيعية؛ فالحركة تنشط الدورة الدموية وتمنع الجلطات والغازات المعوية.",
          type: "do",
        },
        {
          id: "adv-4",
          title: "تجنبي حمل الأوزان الثقيلة في الأسابيع الأولى",
          description:
            "لا ترفعي أي وزن أثقل من رضيعك خلال أول 4 أسابيع بعد القيصرية لحماية عضلات البطن وأنسجة الحوض من الضغط.",
          type: "dont",
        },
      ],
      warningSigns: {
        title: "علامات خطر تستوجب التواصل الفوري مع العيادة أو طوارئ المستشفى:",
        items: [
          "نزيف مهبلي غزير يتجاوز ملء فوطة صحية كبيرة خلال ساعة واحدة.",
          "ارتفاع درجة الحرارة إلى 38 درجة مئوية فما فوق أو قشعريرة شديدة.",
          "صداع مفاجئ عنيف لا يستجيب للمسكنات ومصحوب بزغللة في العين أو طنين بالأذن.",
          "احمرار وتورم شديد أو خروج إفرازات صديدية من جرح القيصرية.",
          "ألم حاد وتورم في إحدى الساقين (خاصة بطة الساق).",
        ],
      },
      faqs: [
        {
          id: "q-1",
          question:
            "متى هو التوقيت الأمثل لطلب حقنة الإبيديورال أثناء الولادة الطبيعية؟",
          answer:
            "يمكن إعطاء الإبيديورال بمجرد دخول الأم في مرحلة المخاض النشط (اتساع عنق الرحم نحو 3 سم مع انقباضات منتظمة). تنصح توصيات ACOG بعدم تأخير التسكين بحجة انتظار اتساع معين، طالما أن المخاض قد بدأ بالفعل.",
        },
        {
          id: "q-2",
          question: "هل يؤثر مخدر الإبيديورال على حليب الأم أو بداية الرضاعة الطبيعية؟",
          answer:
            "على الإطلاق. الجرعات المستخدمة في التخدير النصفي موضعية جداً وكميات الدواء الممتصة في مجرى دم الأم ضئيلة للغاية ولا تنتقل للجنين أو لحليب الثدي، مما يتيح للأم إرضاع طفلها فور ولادته بأمان تام.",
        },
        {
          id: "q-3",
          question: "متى يمكنني الاستحمام بعد عملية الولادة القيصرية التجميلية؟",
          answer:
            "نستخدم لاصقات طبية عازلة ومقاومة للماء فوق الجرح التجميلي، مما يسمح للأم بالاستحمام الخفيف بعد 48 ساعة من العملية دون ملامسة الصابون المباشر للجرح، مع تجفيف المنطقة بلطف شديد.",
        },
      ],
      references: [
        {
          title: "Practice Bulletin No. 209: Obstetric Analgesia and Anesthesia",
          organization: "American College of Obstetricians and Gynecologists (ACOG)",
          year: "2019 / Reaffirmed 2023",
          summary:
            "إرشادات معتمدة توضح أمان التخدير فوق الجافية وموثوقيته ومعدل المضاعفات النادر جداً.",
        },
        {
          title: "Pain Relief in Labour: Information for You",
          organization: "Royal College of Obstetricians and Gynaecologists (RCOG)",
          year: "2022",
          summary:
            "دليل إرشادي بريطاني يؤكد عدم وجود علاقة بين الإبيديورال وزيادة معدلات القيصرية الطارئة.",
        },
        {
          title:
            "Consensus Guidelines for Enhanced Recovery After Surgery (ERAS) for Cesarean Delivery",
          organization: "ERAS Society",
          year: "2021",
          summary:
            "بروتوكول التسكين متعدد الوسائط والتغذية والحركة المبكرة لتسريع شفاء الأمهات.",
        },
      ],
    },

    "high-risk-pregnancy": {
      slug: "high-risk-pregnancy",
      category: "high-risk-pregnancy",
      categoryLabel: "الحمل عالي الخطورة",
      title:
        "الحمل عالي الخطورة والإجهاض المتكرر: خارطة طريق طبية لاجتياز المخاوف والوصول بمولودك لبر الأمان",
      subtitle:
        "بروتوكولات دقيقة لإدارة الإجهاض المتكرر، سكر الحمل، تسمم الحمل، وعمر الأم فوق 35 عاماً استناداً لأحدث أدلة RCOG و SMFM",
      excerpt:
        "هل تكرار الإجهاض يعني استحالة إتمام الحمل؟ وما حقيقة الراحة التامة في الفراش وحقن السيولة؟ إجابات طبية صريحة وتوجيهات عملية.",
      imageSrc: "/services/c-section.jpeg",
      readTimeMinutes: 8,
      publishedAt: "2025-02-10",
      updatedAt: "2025-03-05",
      author: DOCTOR_AUTHOR_AR,
      keyTakeaways: [
        "أكثر من 70% من السيدات اللاتي تعرضن لإجهاض متكرر (حتى بعد 3 مرات) ينجحن في إنجاب طفل سليم عند خضوعهن لتقييم بروتوكولي دقيق وإشراف استشاري متخصص.",
        "الراحة التامة في الفراش (Strict Bed Rest) لم تعد توصية طبية علمية؛ بل ترفع مخاطر الجلطات الدموية واكتئاب الحمل دون فائدة في منع الإجهاض.",
        "فحص السونار التفصيلي المتطور رباعي الأبعاد (4D) وقياس دوبلر الشريان الرحمي وعنق الرحم بين الأسبوعين 11-14 والأسبوعين 20-22 هو الركيزة الأساسية لحماية الأم والجنين.",
        "السيطرة المبكرة على عوامل التخثر والمناعة (مثل متلازمة مضادات الفوسفوليبيد) باستخدام الأسبرين والجرعات الوقائية من الهيبارين تحول نسب النجاح جذرياً.",
      ],
      fears: [
        {
          id: "hr-f-1",
          fear: "أشعر بالرعب من خسارة جنيني مجدداً؛ هل جسدي عاجز عن الاحتفاظ بالحمل؟",
          reality:
            "هذا الخوف النفسي عميق ومشروع لدى كل أم مرت بتجربة إجهاض. لكن علمياً، أكثر من 60% من حالات الإجهاض المبكر المفرد ناتجة عن خلل صبغي عشوائي في البويضة أو الحيوان المنوي ولا يتكرر بالضرورة. بالتشخيص الدقيق للرحم والمناعة وتجلط الدم والكروموسومات، نصل في أكثر من 75% من الحالات لسبب قابل للعلاج الناجح.",
          sourceTag: "RCOG Green-top Guideline No. 17",
        },
        {
          id: "hr-f-2",
          fear: "هل يجب أن أقضي 9 أشهر نائمة في السرير دون حركة حتى لا يسقط الحمل؟",
          reality:
            "هذه خرافة قديمة أثبتت الأبحاث ضررها. تؤكد الكلية الأمريكية (ACOG) وجمعية طب الأم والجنين (SMFM) أن المكوث في السرير لا يمنع الإجهاض ولا الولادة المبكرة، بل يزيد من ركود الدم وخطر تكون جلطات الساقين وهشاشة العضلات. الحركة المعتدلة والمشي الخفيف هما الأفضل لمعظم الحالات.",
          sourceTag: "ACOG Practice Advisory & SMFM Guidelines",
        },
        {
          id: "hr-f-3",
          fear: "هل حقن السيولة (Clexane) أو حبوب الكورتيزون تسبب تشوهات أو أضراراً لطفلي؟",
          reality:
            "مضادات التخثر من فئة الهيبارين منخفض الوزن الجزيئي جزيئات كبيرة الحجم لا تعبر المشيمة مطلقاً ولا تصل لدم الجنين؛ لذلك فهي آمنة تماماً عند استخدامها بالجرعة المحسوبة التي يحددها الطبيب لعلاج تخثر الدم وتحسين تدفق الغذاء للمشيمة.",
          sourceTag: "ACOG Practice Bulletin No. 197",
        },
      ],
      sections: [
        {
          id: "definition",
          title: "ما الذي يجعل الحمل يُصنف كـ 'حمل عالي الخطورة'؟",
          content: [
            "يُصنف الحمل بأنه عالي الخطورة عند وجود عوامل صحية لدى الأم أو الجنين تستلزم مراقبة متكررة وخطة علاجية مخصصة لتفادي المضاعفات.",
            "تشمل هذه العوامل: الإجهاض المتكرر، الحمل بتوائم، سكري الحمل أو ما قبل الحمل، ارتفاع ضغط الدم، ضعف وتوسع عنق الرحم المبكر، تسمم الحمل السابق، أو أمراض الغدة الدرقية والمناعة الذاتية.",
          ],
        },
        {
          id: "investigations",
          title: "خطة التقييم الشامل للإجهاض المتكرر",
          content: [
            "نبدأ قبل الحمل الجديد أو في الأسابيع الأولى بفحص تجويف الرحم بالمنظار الرحمي الدقيق أو السونار ثلاثي الأبعاد لنفي وجود حاجز رحمي أو التصاقات.",
            "ثم إجراء تحاليل الأجسام المضادة (Antiphospholipid antibodies)، وتحليل وراثي للزوجين (Karyotyping)، وتقييم الغدة الدرقية ومقاومة الأنسولين لوضع خطة استباقية قبل الإخصاب.",
          ],
        },
      ],
      advices: [
        {
          id: "hr-adv-1",
          title: "المتابعة الدورية بالموجات فوق الصوتية والدوبلر",
          description:
            "التزمي بقياس طول عنق الرحم دورياً بين الأسبوعين 16-24 للتأكد من عدم وجود قصر يستلزم ربط عنق الرحم، وفحص تدفق الدم المشيمي بالدوبلر بانتظام.",
          type: "do",
        },
        {
          id: "hr-adv-2",
          title: "الانتظام الصارم في تناول أدوية التثبيت والسيولة",
          description:
            "خذي حقن السيولة أو حبوب الأسبرين والبروجستيرون في نفس الموعد يومياً دون تفويت أي جرعة إلا باستشارة صريحة من طبيبك المعالج.",
          type: "do",
        },
        {
          id: "hr-adv-3",
          title: "لا توقفي الدواء من تلقاء نفسك بمجرد استقرار الأعراض",
          description:
            "استقرار الحالة لا يعني زوال المشكلة الكامنة؛ إيقاف الأسبرين أو الهيبارين فجأة قد يعيد تجلط المشيمة لا قدر الله.",
          type: "dont",
        },
        {
          id: "hr-adv-4",
          title: "مراقبة ضغط الدم المنزلي وحركة الجنين",
          description:
            "احتفظي بجهاز ضغط منزلي وسجلي القراءات يومياً، واحرصي على عد حركات الجنين بعد الأسبوع الثامن والعشرين والتواصل مع العيادة عند أي بطء ملحوظ.",
          type: "tip",
        },
      ],
      warningSigns: {
        title: "علامات تستدعي التوجه الفوري لطوارئ المستشفى دون تأخير:",
        items: [
          "نزول دم مهبلي مهما كانت كميته أو وجود ألم تقلصي أسفل الظهر والبطن منتظم ومتزايد.",
          "تسرب سائل شفاف دافئ من المهبل (احتمال تمزق كيس الجنين).",
          "صداع مستمر لا يزول مع مسكن الباراسيتامول ومصحوب بزغللة رؤية وألم أسفل القفص الصدري الأيمن.",
          "انتفاخ مفاجئ وكبير في الوجه واليدين مع زيادة وزن سريعة خلال يومين.",
          "انخفاض ملحوظ في عدد ركلات أو حركات الجنين عن المعتاد بعد الأسبوع الـ 28.",
        ],
      },
      faqs: [
        {
          id: "hr-q-1",
          question: "متى نحتاج لإجراء عملية ربط عنق الرحم (Cervical Cerclage)؟",
          answer:
            "يُجرى الربط في حالات قصور عنق الرحم (Incompetent Cervix)، والذي يُشخص بوجود تاريخ ولادات مبكرة غير مصحوبة بألم في الثلث الثاني، أو عند رصد قصر طول عنق الرحم لأقل من 25 ملم بالسونار المهبلي قبل الأسبوع 24. يُجرى الإجراء عادةً بين الأسبوعين 12-14 تحت تخدير خفيف وآمن.",
        },
        {
          id: "hr-q-2",
          question: "هل تكرار السونار كل أسبوعين يشكل أي خطر إشعاعي على الجنين؟",
          answer:
            "الموجات فوق الصوتية (Ultrasound) هي موجات صوتية ميكانيكية ولا تحتوي على أي إشعاع نووي أو كهرومغناطيسي ضار. أثبت المعهد الأمريكي للموجات فوق الصوتية في الطب (AIUM) أمان السونار التام حتى مع تكراره طوال أشهر الحمل للمراقبة الدقيقة.",
        },
        {
          id: "hr-q-3",
          question: "هل يؤثر الحمل بعد سن الـ 35 عاماً سلباً على سلامة الحمل؟",
          answer:
            "رغم أن فرص بعض المضاعفات مثل سكري الحمل والضغط ترتفع قليلاً مع التقدم في العمر، إلا أن الغالبية الساحقة من السيدات فوق 35 عاماً يلدن أطفالاً أصحاء عند التزامهن بالفحوصات الجينية المبكرة (مثل فحص NIPT) والمتابعة الاستشارية الدقيقة.",
        },
      ],
      references: [
        {
          title: "The Investigation and Management of Recurrent Pregnancy Loss",
          organization: "Royal College of Obstetricians and Gynaecologists (RCOG)",
          year: "2023 (Green-top Guideline No. 17)",
          summary:
            "البروتوكول الشامل لفحوصات الأجسام المضادة وتجلط الدم وعلاج الإجهاض المتكرر المبكر.",
        },
        {
          title: "Practice Bulletin No. 200: Early Pregnancy Loss",
          organization: "American College of Obstetricians and Gynecologists (ACOG)",
          year: "2018 / Reaffirmed 2022",
          summary: "الأدلة السريرية لإدارة الحمل الحرج ومعدلات نجاح الولادات اللاحقة.",
        },
        {
          title: "Consult Series: Evaluation and Management of Recurrent Miscarriage",
          organization: "Society for Maternal-Fetal Medicine (SMFM)",
          year: "2021",
          summary:
            "توصيات اختصاصيي طب الجنين حول الفحوصات الإلزامية وتجنب الراحة الفراشية المفرطة.",
        },
      ],
    },

    "icsi-ivf-journey": {
      slug: "icsi-ivf-journey",
      category: "icsi-ivf",
      categoryLabel: "الحقن المجهري والخصوبة",
      title:
        "دليلك الشامل لرحلة الحقن المجهري: بروتوكولات رفع نسب النجاح وتبديد مخاوف الفشل",
      subtitle:
        "خطوات التنشيط الدقيق، زراعة الأجنة بمرحلة البلاستوسيست، والعوامل الحاسمة لانغراس الجنين استناداً لمعايير ESHRE و ASRM",
      excerpt:
        "هل الحقن المجهري يسبب تشوهات للأجنة؟ ولماذا تفشل بعض المحاولات الأولى وكيف نتجاوزها ببروتوكولات التخصيص الفردي المتقدمة؟",
      imageSrc: "/services/prp.jpeg",
      readTimeMinutes: 9,
      publishedAt: "2025-01-28",
      updatedAt: "2025-03-02",
      author: DOCTOR_AUTHOR_AR,
      keyTakeaways: [
        "الوصول إلى نقل الأجنة في اليوم الخامس (Blastocyst stage) يرفع معدلات انغراس الحمل ليتجاوز 60-65% في المراكز المتقدمة.",
        "فشل محاولة أولى للحقن المجهري لا يعني أبداً العقم الدائم؛ فالمعدل التراكمي للنجاح عبر 3 دورات يتجاوز 75-80% عند تعديل البروتوكول وتحسين جودة البويضات والحيوانات المنوية.",
        "حقن البلازما الغنية بالصفائح (PRP) في بطانة الرحم والمبيض تمثل أملاً حقيقياً للسيدات ذوات البطانة الرقيقة أو ضعف المخزون المبيضي.",
        "الأطفال المولودون عبر تقنية الحقن المجهري يتمتعون بصحة ونمو مساويين تماماً للأطفال المولودين طبيعياً دون زيادة في التشوهات الخلقية.",
      ],
      fears: [
        {
          id: "ivf-f-1",
          fear: "أخشى أن يفشل الحقن المجهري وأفقد الأمل نهائياً في الإنجاب.",
          reality:
            "الحقن المجهري عملية تراكمية وليست فرصة واحدة ونهائية. تؤكد الجمعية الأوروبية للخصوبة (ESHRE) أن لكل محاولة بيانات بيولوجية قيّمة تفيد في اختيار بروتوكول تحفيز أفضل، فحص جيني للأجنة (PGT)، أو تقوية بطانة الرحم لرفع فرص النجاح في الدورة التالية.",
          sourceTag: "ESHRE Guideline: Ovarian Stimulation",
        },
        {
          id: "ivf-f-2",
          fear: "هل يؤثر سحب البويضات أو هرمونات التنشيط على مخزون مبيضي الطبيعي ويقرب سن اليأس؟",
          reality:
            "هذا وهم فسيولوجي شائع. في كل دورة شهرية طبيعية، يستدعي المبيض مجموعة من البويضات (نحو 10-20 بويضة) تنضج واحدة منها وتضمر البقية طبيعياً وتفنى. هرمونات التنشيط لا تستنزف المخزون المستقبلي، بل تنقذ تلك المجموعة من الضمور وتجعلها تنضج جميعاً لتلك الدورة فقط.",
          sourceTag: "ASRM Practice Committee Opinion",
        },
      ],
      sections: [
        {
          id: "protocols",
          title: "البروتوكولات الحديثة في عيادات د. محمد ممدوح صالح",
          content: [
            "نبتعد تماماً عن تطبيق بروتوكول موحد لجميع الحالات؛ بل يتم تفصيل الخطة بناءً على قياس مخزون المبيض (AMH)، عدد الحويصلات الغارية (AFC)، ومؤشر كتلة الجسم.",
            "استخدام تقنيات التجميد الزجاجي السريع (Vitrification) لنقل الأجنة في دورة مجمدة لاحقة يجنب المريضة فرط تنشيط المبيض ويوفر بيئة هرمونية طبيعية لبطانة الرحم تزيد من ثبات الأجنة.",
          ],
        },
      ],
      advices: [
        {
          id: "ivf-adv-1",
          title: "التحضير الغذائي ومضادات الأكسدة لمدة 3 أشهر",
          description:
            "تحتاج البويضة والحيوان المنوي نحو 90 يوماً للنضج. الالتزام بالأوميغا 3 والإنزيم المساعد Q10 وحمض الفوليك وفيتامين D يحسن جودة الأجنة بصورة مثبتة علمياً.",
          type: "do",
        },
        {
          id: "ivf-adv-2",
          title: "تجنبي النوم التام بعد نقل الأجنة",
          description:
            "الدراسات الدولية المعتمدة من ASRM أثبتت أن المشي الخفيف بعد إرجاع الأجنة يحسن التروية الدموية للرحم ويزيد انغراس الأجنة مقارنة بالاستلقاء المستمر.",
          type: "do",
        },
      ],
      warningSigns: {
        title: "أعراض تستدعي الاتصال المباشر بالفريق الطبي:",
        items: [
          "انتفاخ حاد ومفاجئ في البطن مصحوب بضيق في التنفس بعد سحب البويضات.",
          "نقص كمية البول وزيادة الوزن السريعة (علامات فرط التنشيط).",
          "نزيف مهبلي مصحوب بألم حاد في أحد الجانبين.",
        ],
      },
      faqs: [
        {
          id: "ivf-q-1",
          question: "متى نجري اختبار الحمل بالدم الرقمي بعد إرجاع الأجنة؟",
          answer:
            "يُجرى فحص Beta-hCG في الدم بعد 14 يوماً بالضبط من يوم النقل، ويجب تجنب اختبارات البول المنزلية لأنها قد تعطي نتائج سلبية أو إيجابية كاذبة بسبب إبر التفجير.",
        },
      ],
      references: [
        {
          title: "ESHRE Guideline: Ovarian Stimulation for IVF/ICSI",
          organization: "European Society of Human Reproduction and Embryology (ESHRE)",
          year: "2020 / Updated 2023",
          summary:
            "المعايير الأوروبية لأعلى أمان ومعدلات إخصاب وحماية المريضات من فرط التنشيط.",
        },
      ],
    },

    "advanced-laparoscopy": {
      slug: "advanced-laparoscopy",
      category: "laparoscopy",
      categoryLabel: "جراحة المناظير المتقدمة",
      title:
        "جراحة المناظير النسائية لبطانة الرحم المهاجرة والأورام الليفية: تفوق الجراحة طفيفة التوغل على الفتح التقليدي",
      subtitle:
        "استئصال الأكياس المعقدة والتصاقات الحوض بدقة مليمترية والمحافظة على الخصوبة باعتماد GESEA Level 2 الدولي",
      excerpt:
        "لماذا أصبحت الجراحة بالمنظار المعيار الذهبي لعلاج بطانة الرحم المهاجرة واستئصال الألياف الرحمية؟ وكيف تضمن الخروج في نفس اليوم؟",
      imageSrc: "/services/laparoscopy.jpeg",
      readTimeMinutes: 6,
      publishedAt: "2025-02-15",
      updatedAt: "2025-03-04",
      author: DOCTOR_AUTHOR_AR,
      keyTakeaways: [
        "المنظار البطني يوفر تكبيراً بصرياً فائق الدقة (High Definition) يصل إلى 10 أضعاف، مما يسمح باستئصال بؤر بطانة الرحم المهاجرة العميقة دون المساس بالمبيض أو الأنابيب.",
        "الفتحات الجراحية تتراوح بين 5 إلى 10 مليمترات فقط، مما يقلل الألم والنزيف ويلغي تشوهات الجروح الكبيرة.",
        "أكثر من 95% من مريضات المناظير المتقدمة في مركزنا يغادرن المستشفى في نفس يوم العملية ويعدن للحياة اليومية خلال أسبوع واحد.",
        "الحفاظ على سلامة بطانة الرحم وعضلاته أثناء استئصال الأورام الليفية بالمنظار يضمن قدرة الرحم على الحمل والولادة الآمنة مستقبلاً.",
      ],
      fears: [
        {
          id: "lap-f-1",
          fear: "أخشى أن يؤدي استئصال الورم الليفي أو بطانة الرحم المهاجرة إلى استئصال الرحم أو فقدان القدرة على الإنجاب.",
          reality:
            "تعتمد جراحة المناظير المتقدمة (Minimally Invasive Surgery) مبدأ الحفاظ على الأعضاء (Organ-Preserving). بفضل اعتماد الدكتور محمد ممدوح صالح الدولي (GESEA Level 2)، يتم استئصال الأورام والبؤر المرضية فقط مع إعادة بناء جدار الرحم بدقة مجهرية تحفظ الخصوبة والقدرة على الحمل.",
          sourceTag: "ESGE / GESEA Clinical Guidelines",
        },
      ],
      sections: [
        {
          id: "advantages",
          title: "مميزات جراحة المناظير مقارنة بالفتح الجراحي التقليدي",
          content: [
            "الفتح الجراحي التقليدي يتطلب شقاً بطنياً كبيراً يؤدي لالتصاقات حوضية إضافية قد تزيد من أسباب العقم وألم الحوض المزمن.",
            "المنظار البطني المتقدم يدخل عبر فتحات ميكروسكوبية، ويستخدم طاقة متطورة لمنع النزيف وتفادي الالتصاقات، مع سرعة مذهلة في التعافي والتئام الأنسجة.",
          ],
        },
      ],
      advices: [
        {
          id: "lap-adv-1",
          title: "المشي الخفيف في مساء يوم العملية",
          description:
            "المشي القصير داخل الغرفة يساعد في التخلص من غاز ثاني أكسيد الكربون المستخدم أثناء المنظار ويمنع ألم الكتف العارض.",
          type: "do",
        },
      ],
      warningSigns: {
        title: "علامات تستوجب مراجعة الطبيب:",
        items: [
          "ألم بطني متزايد لا يستجيب للمسكنات.",
          "حمى أعلى من 38 درجة مئوية.",
          "إفرازات صديدية أو احمرار متزايد حول فتحات المنظار.",
        ],
      },
      faqs: [
        {
          id: "lap-q-1",
          question: "متى يمكنني العودة للعمل بعد عملية المنظار البطني؟",
          answer:
            "تستطيع معظم السيدات العودة للعمل المكتبي والأنشطة الروتينية الخفيفة خلال 5 إلى 7 أيام من إجراء العملية، مقارنة بـ 4 إلى 6 أسابيع في حالة الجراحة التقليدية.",
        },
      ],
      references: [
        {
          title: "The Investigation and Management of Endometriosis",
          organization: "Royal College of Obstetricians and Gynaecologists (RCOG)",
          year: "2021 (Green-top Guideline No. 24)",
          summary:
            "المبادئ التوجيهية للتشخيص والاستئصال الجراحي بالمنظار كعلاج أولي للألم والعقم.",
        },
      ],
    },
  },

  en: {
    "painless-delivery": {
      slug: "painless-delivery",
      category: "painless-delivery",
      categoryLabel: "Painless Delivery",
      title:
        "Your Comprehensive Clinical Guide to Painless Childbirth: Overcoming Maternal Fears & Safe Delivery",
      subtitle:
        "Evidence-based realities of epidural analgesia, spinal anesthesia, and rapid postpartum recovery according to ACOG and RCOG guidelines",
      excerpt:
        "Does the epidural injection cause chronic back pain or paralysis? How do modern labor analgesia protocols ensure a pain-free, dignified, and safe birth experience?",
      imageSrc: "/services/natural-birth.jpeg",
      readTimeMinutes: 7,
      publishedAt: "2025-01-20",
      updatedAt: "2025-03-01",
      author: DOCTOR_AUTHOR_EN,
      keyTakeaways: [
        "Epidural analgesia is the globally established gold standard for labor pain relief with no negative effects on neonatal Apgar scores or maternal pushing ability.",
        "The epidural needle is introduced in the lower lumbar space (L3-L4/L4-L5) well below the termination of the spinal cord (L1), making permanent neurological injury virtually impossible (< 1 in 250,000).",
        "ERAS (Enhanced Recovery After Surgery) protocols for cesarean deliveries enable ambulation and oral intake within 4-6 hours with targeted TAP block analgesia.",
        "Effective pain management suppresses maternal stress hormones (cortisol & catecholamines), optimizing placental perfusion and fetal oxygenation.",
      ],
      fears: [
        {
          id: "en-f-1",
          fear: "I'm terrified that an epidural injection will cause permanent paralysis or severe chronic back pain for years.",
          reality:
            "Anatomically, the adult spinal cord ends at L1. The epidural catheter is safely positioned in the lower lumbar spine (L3-L4 or L4-L5) where only nerve roots float freely in cerebrospinal fluid. The American College of Obstetricians and Gynecologists (ACOG) confirms that the risk of permanent nerve damage is under 1 in 250,000. Postpartum backache is overwhelmingly caused by physiological pelvic ligament laxity and postural changes during pregnancy, not the epidural.",
          sourceTag: "ACOG Practice Bulletin No. 209",
        },
        {
          id: "en-f-2",
          fear: "Will an epidural stall my labor contractions and force me into an emergency cesarean section?",
          reality:
            "Our clinic utilizes modern low-dose 'Walking Epidural' regimens combining ultra-dilute local anesthetics with opioids. This selectively eliminates visceral pain fibers while preserving motor strength and contraction quality. Landmark RCOG randomized trials prove epidural analgesia does not increase cesarean delivery rates.",
          sourceTag: "RCOG Green-top Guideline",
        },
        {
          id: "en-f-3",
          fear: "I am scared of severe postoperative pain and immobility after a cesarean delivery.",
          reality:
            "We implement multimodal analgesia and ultrasound-guided Transversus Abdominis Plane (TAP) blocks, alongside Patient-Controlled Analgesia (PCA). Over 90% of incision pain is mitigated, enabling mothers to hold and nurse their baby immediately and walk comfortably the same day.",
          sourceTag: "ERAS Society Obstetric Consensus",
        },
      ],
      sections: [
        {
          id: "modern-analgesia",
          title: "How Modern Obstetrics Revolutionized Painless Birth",
          content: [
            "Childbirth should be an empowering and joy-filled milestone, not an agonizing trial of endurance. In modern obstetric practice, pain management is recognized as a fundamental patient right, not an elective luxury.",
            "Unmanaged acute labor pain induces severe hyperventilation and a massive catecholamine surge, causing uterine vasoconstriction and decreased placental blood flow. Effective, timely analgesia stabilizes maternal hemodynamics and maintains consistent oxygenation for the baby.",
          ],
        },
        {
          id: "natural-vs-csection",
          title: "Painless Natural Birth vs. Cesarean: Clinical Comparison",
          content: [
            "In natural delivery: The epidural catheter is placed once active labor is established (3-4 cm dilation). Continuous, titrated infusion maintains comfort through delivery and perineal repair without any sharp sensation.",
            "In planned cesarean: Fast-acting spinal anesthesia takes effect in under 2 minutes. The mother remains awake and alert to witness her newborn's first cry and initiate immediate skin-to-skin contact, followed by cosmetic intradermal sutures.",
          ],
        },
      ],
      advices: [
        {
          id: "en-adv-1",
          title: "Third Trimester Conditioning",
          description:
            "Engage in daily 20-30 minute walks, pelvic tilts, and Kegel exercises to tone pelvic floor musculature and drink at least 2.5 liters of water daily to prevent constipation.",
          type: "do",
        },
        {
          id: "en-adv-2",
          title: "Request Pain Relief Proactively",
          description:
            "Notify your obstetric care team of your preference for painless delivery upon admission rather than waiting for severe exhaustion and pain to set in.",
          type: "tip",
        },
        {
          id: "en-adv-3",
          title: "Early Postpartum Ambulation",
          description:
            "Walk with nursing assistance 4-6 hours after a cesarean or 1 hour after a natural birth. Early mobility stimulates gastrointestinal motility and protects against venous thromboembolism.",
          type: "do",
        },
        {
          id: "en-adv-4",
          title: "Avoid Heavy Lifting",
          description:
            "Do not lift anything heavier than your baby during the first 4 weeks following surgery to protect abdominal fascial healing.",
          type: "dont",
        },
      ],
      warningSigns: {
        title: "Red Flag Warning Signs Requiring Immediate Medical Attention:",
        items: [
          "Heavy vaginal bleeding soaking more than one large sanitary pad per hour.",
          "Fever above 38°C (100.4°F) or severe shaking chills.",
          "Sudden severe headache that does not respond to acetaminophen, accompanied by visual disturbances or epigastric pain.",
          "Severe redness, worsening swelling, or purulent discharge from the cesarean incision.",
          "Unilateral calf pain, tenderness, or swelling.",
        ],
      },
      faqs: [
        {
          id: "en-q-1",
          question:
            "When is the optimal time to request an epidural during active labor?",
          answer:
            "An epidural can be safely administered as soon as regular active labor begins (around 3 cm dilation with consistent contractions). ACOG guidelines emphasize that maternal request is a sufficient medical indication for pain relief without arbitrary dilation barriers.",
        },
        {
          id: "en-q-2",
          question:
            "Does the epidural medicine pass into breast milk or affect the baby?",
          answer:
            "No. The medication doses used in regional epidural analgesia are localized to the epidural space. Systemic maternal bloodstream absorption is negligible, meaning virtually zero transfer to breast milk and no sedation for the newborn.",
        },
        {
          id: "en-q-3",
          question: "How soon can I shower after a cosmetic cesarean delivery?",
          answer:
            "We utilize waterproof medical dressings over the surgical incision, allowing gentle showering after 48 hours without direct scrubbing of the wound.",
        },
      ],
      references: [
        {
          title: "Practice Bulletin No. 209: Obstetric Analgesia and Anesthesia",
          organization: "American College of Obstetricians and Gynecologists (ACOG)",
          year: "2019 / Reaffirmed 2023",
          summary:
            "Definitive clinical guidelines on regional analgesia safety and labor progress management.",
        },
        {
          title: "Pain Relief in Labour: Information for You",
          organization: "Royal College of Obstetricians and Gynaecologists (RCOG)",
          year: "2022",
          summary:
            "Authoritative patient evidence establishing no link between epidurals and emergency cesareans.",
        },
        {
          title:
            "Consensus Guidelines for Enhanced Recovery After Surgery (ERAS) for Cesarean Delivery",
          organization: "ERAS Society",
          year: "2021",
          summary:
            "Multimodal analgesia, early oral hydration, and rapid rehabilitation standards.",
        },
      ],
    },

    "high-risk-pregnancy": {
      slug: "high-risk-pregnancy",
      category: "high-risk-pregnancy",
      categoryLabel: "High-Risk Pregnancy",
      title:
        "High-Risk Pregnancy & Recurrent Pregnancy Loss: A Compassionate Medical Roadmap to Safe Delivery",
      subtitle:
        "Precision management protocols for recurrent miscarriage, gestational diabetes, preeclampsia, and advanced maternal age based on RCOG and SMFM guidelines",
      excerpt:
        "Does a history of miscarriage mean you cannot carry to term? What is the clinical truth behind strict bed rest and anticoagulant therapy? Honest answers from an obstetric specialist.",
      imageSrc: "/services/c-section.jpeg",
      readTimeMinutes: 8,
      publishedAt: "2025-02-10",
      updatedAt: "2025-03-05",
      author: DOCTOR_AUTHOR_EN,
      keyTakeaways: [
        "Over 70% of women with recurrent pregnancy loss (even after 3 consecutive miscarriages) achieve a healthy live birth with structured investigation and specialized consultant care.",
        "Strict bed rest is no longer recommended by international guidelines; it increases DVT risk and muscle atrophy without proven benefit in preventing miscarriage.",
        "Advanced high-resolution 4D ultrasound, uterine artery Doppler, and serial cervical length assessments between 11-14 weeks and 20-22 weeks form the cornerstone of safe management.",
        "Targeted management of thrombophilia and autoimmune markers (such as Antiphospholipid Syndrome) with low-dose aspirin and LMWH dramatically improves live birth rates.",
      ],
      fears: [
        {
          id: "en-hr-f-1",
          fear: "I am terrified of losing another pregnancy; does this mean my body is incapable of carrying a child?",
          reality:
            "This emotional trauma is profound and valid. However, over 60% of single early losses are sporadic chromosomal abnormalities that do not recur systematically. Through comprehensive parental karyotyping, anatomical uterine assessment, thrombophilia, and endocrine profiling, an actionable and treatable factor is identified in the vast majority of recurrent cases, leading to excellent live birth rates.",
          sourceTag: "RCOG Green-top Guideline No. 17",
        },
        {
          id: "en-hr-f-2",
          fear: "Do I have to stay strictly in bed for all 9 months to keep the baby safe?",
          reality:
            "This is an outdated myth refuted by modern maternal-fetal medicine. ACOG and SMFM guidelines emphasize that strict bed rest does not prevent miscarriage or preterm delivery and exposes mothers to venous thromboembolism, bone demineralization, and psychological distress. Moderate, gentle activity is encouraged.",
          sourceTag: "ACOG & SMFM Practice Advisory",
        },
        {
          id: "en-hr-f-3",
          fear: "Are blood-thinning injections (LMWH/Clexane) dangerous for fetal development?",
          reality:
            "Low-Molecular-Weight Heparin consists of large polar molecules that do not cross the placental barrier. It has zero teratogenic effect on the fetus while protecting vital placental microcirculation in indicated thrombophilic conditions.",
          sourceTag: "ACOG Practice Bulletin No. 197",
        },
      ],
      sections: [
        {
          id: "definition",
          title: "What Defines a High-Risk Pregnancy?",
          content: [
            "A pregnancy is classified as high-risk when preexisting maternal health conditions, pregnancy-specific complications, or fetal factors necessitate specialized multidisciplinary monitoring.",
            "Common indications include recurrent miscarriage, multiple gestations, gestational diabetes, chronic hypertension, preeclampsia, cervical insufficiency, and autoimmune or thyroid disorders.",
          ],
        },
        {
          id: "investigations",
          title: "Comprehensive Diagnostic Protocol for Recurrent Pregnancy Loss",
          content: [
            "Evaluation begins preconceptionally with 3D ultrasound or diagnostic hysteroscopy to exclude uterine septa, fibroids, or intrauterine adhesions.",
            "This is coupled with antiphospholipid antibody panels (lupus anticoagulant, anticardiolipin, anti-beta-2-glycoprotein), thyroid peroxidase antibodies, HbA1c, and parental cytogenetic analysis.",
          ],
        },
      ],
      advices: [
        {
          id: "en-hr-adv-1",
          title: "Serial Ultrasound & Cervical Screening",
          description:
            "Adhere to transvaginal cervical length screening every 2 weeks between 16-24 weeks if there is a history of mid-trimester loss or cervical surgery.",
          type: "do",
        },
        {
          id: "en-hr-adv-2",
          title: "Strict Medication Compliance",
          description:
            "Administer prescribed anticoagulants (LMWH) and low-dose aspirin at the same time each day without missing doses unless advised by your consultant.",
          type: "do",
        },
        {
          id: "en-hr-adv-3",
          title: "Never Discontinue Medications Abruptly",
          description:
            "Symptom improvement does not indicate the underlying condition has resolved. Ceasing anticoagulants prematurely may compromise placental perfusion.",
          type: "dont",
        },
        {
          id: "en-hr-adv-4",
          title: "Monitor Home Blood Pressure & Fetal Kicks",
          description:
            "Maintain a home blood pressure log and track fetal movements after 28 weeks, promptly contacting the clinic if movements noticeably decrease.",
          type: "tip",
        },
      ],
      warningSigns: {
        title: "Immediate Warning Signs Requiring Emergency Evaluation:",
        items: [
          "Any vaginal bleeding or regular rhythmic lower back and abdominal cramping.",
          "Sudden gush or continuous leaking of warm clear fluid from the vagina.",
          "Persistent severe headache unresponsive to paracetamol, accompanied by visual blurs or upper abdominal pain.",
          "Sudden rapid facial or hand edema with rapid weight gain over 48 hours.",
          "Noticeable decrease in fetal movement frequency after gestational week 28.",
        ],
      },
      faqs: [
        {
          id: "en-hr-q-1",
          question: "When is cervical cerclage (stitch) indicated?",
          answer:
            "Cervical cerclage is performed for cervical insufficiency, diagnosed by a history of painless second-trimester deliveries or a transvaginal ultrasound showing cervical shortening (<25 mm) before 24 weeks. It is typically placed between 12 and 14 weeks under safe anesthesia.",
        },
        {
          id: "en-hr-q-2",
          question: "Is frequent ultrasound imaging harmful to the developing baby?",
          answer:
            "No. Diagnostic ultrasound utilizes non-ionizing mechanical sound waves, not radiation. The American Institute of Ultrasound in Medicine (AIUM) confirms its complete safety for both mother and fetus throughout pregnancy.",
        },
        {
          id: "en-hr-q-3",
          question: "Does maternal age above 35 prevent having a healthy pregnancy?",
          answer:
            "While risks for gestational diabetes and chromosomal variations increase with age, the overwhelming majority of women aged 35 and older deliver healthy infants with modern early screening (NIPT) and vigilant obstetric care.",
        },
      ],
      references: [
        {
          title: "The Investigation and Management of Recurrent Pregnancy Loss",
          organization: "Royal College of Obstetricians and Gynaecologists (RCOG)",
          year: "2023 (Green-top Guideline No. 17)",
          summary:
            "Comprehensive evidence-based guidelines on immunological, anatomical, and genetic investigations.",
        },
        {
          title: "Practice Bulletin No. 200: Early Pregnancy Loss",
          organization: "American College of Obstetricians and Gynecologists (ACOG)",
          year: "2018 / Reaffirmed 2022",
          summary:
            "Clinical guidelines on spontaneous loss management and positive outcomes in subsequent pregnancies.",
        },
        {
          title: "Consult Series: Evaluation and Management of Recurrent Miscarriage",
          organization: "Society for Maternal-Fetal Medicine (SMFM)",
          year: "2021",
          summary:
            "Clinical standards refuting prolonged bed rest and supporting tailored medical interventions.",
        },
      ],
    },

    "icsi-ivf-journey": {
      slug: "icsi-ivf-journey",
      category: "icsi-ivf",
      categoryLabel: "ICSI & IVF",
      title:
        "Your Comprehensive Guide to the ICSI & IVF Journey: Enhancing Success & Alleviating Doubts",
      subtitle:
        "Personalized ovarian stimulation, blastocyst-stage transfer, and endometrial receptivity protocols based on ESHRE and ASRM standards",
      excerpt:
        "Does IVF carry risk of congenital anomalies? Why do some first cycles fail, and how do advanced protocols turn subsequent attempts into success?",
      imageSrc: "/services/prp.jpeg",
      readTimeMinutes: 9,
      publishedAt: "2025-01-28",
      updatedAt: "2025-03-02",
      author: DOCTOR_AUTHOR_EN,
      keyTakeaways: [
        "Extended embryo culture to Day 5 blastocyst stage increases implantation rates beyond 60-65% in advanced reproductive laboratories.",
        "A failed first cycle does not denote permanent infertility; cumulative live birth rates across 3 cycles exceed 75-80% with individualized protocol refinement.",
        "Autologous Platelet-Rich Plasma (PRP) therapy offers promising clinical outcomes for refractory thin endometrium and diminished ovarian reserve.",
        "Extensive international registries confirm children conceived via ICSI have identical developmental, cognitive, and health outcomes as naturally conceived peers.",
      ],
      fears: [
        {
          id: "en-ivf-f-1",
          fear: "I am terrified that if this IVF cycle fails, I will never become a mother.",
          reality:
            "Assisted reproduction is a cumulative science. ESHRE guidelines emphasize that each treatment cycle yields crucial biological data on gamete quality, fertilization dynamics, and endometrial response, enabling tailored protocol adjustments in subsequent attempts.",
          sourceTag: "ESHRE Guideline: Ovarian Stimulation",
        },
        {
          id: "en-ivf-f-2",
          fear: "Will ovarian stimulation hormones exhaust my natural egg supply and cause early menopause?",
          reality:
            "In every normal menstrual cycle, a cohort of 10-20 follicles is recruited by the ovaries; one becomes dominant while the remainder undergo natural atresia (cell death). Stimulation medications merely rescue that existing cohort from degeneration for that single cycle, without depleting future ovarian reserves.",
          sourceTag: "ASRM Practice Committee Opinion",
        },
      ],
      sections: [
        {
          id: "protocols",
          title: "Modern Individualized Protocols at Dr. Mohamed Mamdouh Saleh Clinics",
          content: [
            "We reject one-size-fits-all regimens. Treatment stimulation is customized according to serum AMH levels, antral follicle count (AFC), and metabolic parameters.",
            "Our freeze-all (vitrification) strategy circumvents ovarian hyperstimulation syndrome (OHSS) and facilitates frozen embryo transfer in a physiologically optimized uterine environment.",
          ],
        },
      ],
      advices: [
        {
          id: "en-ivf-adv-1",
          title: "90-Day Preconception Gamete Optimization",
          description:
            "Oocyte and spermatogenesis maturation takes approximately 90 days. Daily CoQ10, Omega-3 fatty acids, active folate, and Vitamin D significantly optimize embryo quality.",
          type: "do",
        },
        {
          id: "en-ivf-adv-2",
          title: "Avoid Prolonged Bed Rest Post-Transfer",
          description:
            "ASRM guidelines confirm that gentle walking improves uterine blood flow and implantation compared to prolonged recumbency.",
          type: "do",
        },
      ],
      warningSigns: {
        title: "Symptoms Requiring Immediate Medical Attention:",
        items: [
          "Severe abdominal distension or shortness of breath following egg retrieval.",
          "Rapid unexplained weight gain or marked oliguria (reduced urination).",
          "Unilateral acute pelvic pain with bleeding.",
        ],
      },
      faqs: [
        {
          id: "en-ivf-q-1",
          question:
            "When should I take the quantitative pregnancy blood test after embryo transfer?",
          answer:
            "Serum quantitative Beta-hCG should be performed exactly 14 days after embryo transfer. Urine pregnancy tests should be avoided beforehand as residual trigger medication can produce false positives.",
        },
      ],
      references: [
        {
          title: "ESHRE Guideline: Ovarian Stimulation for IVF/ICSI",
          organization: "European Society of Human Reproduction and Embryology (ESHRE)",
          year: "2020 / Updated 2023",
          summary:
            "Gold-standard European guidelines on tailored stimulation and OHSS prevention.",
        },
      ],
    },

    "advanced-laparoscopy": {
      slug: "advanced-laparoscopy",
      category: "laparoscopy",
      categoryLabel: "Advanced Laparoscopy",
      title:
        "Minimally Invasive Laparoscopy for Endometriosis & Fibroids: Precision Over Open Surgery",
      subtitle:
        "Millimeter-precision cyst excision, adhesiolysis, and fertility preservation under GESEA Level 2 international surgical accreditation",
      excerpt:
        "Why has laparoscopy become the gold standard for endometriosis and uterine fibroids? How does it guarantee same-day discharge and rapid healing?",
      imageSrc: "/services/laparoscopy.jpeg",
      readTimeMinutes: 6,
      publishedAt: "2025-02-15",
      updatedAt: "2025-03-04",
      author: DOCTOR_AUTHOR_EN,
      keyTakeaways: [
        "Advanced high-definition laparoscopy provides up to 10x optical magnification, allowing radical excision of deep infiltrating endometriosis without injuring ovaries or fallopian tubes.",
        "Surgical incisions are only 5 to 10 mm in size, minimizing tissue trauma, postoperative pain, and cosmetic scarring.",
        "Over 95% of patients undergoing advanced laparoscopic surgery at our center are discharged safely the same day and resume normal activities within 7 days.",
        "Uterine muscle preservation during laparoscopic myomectomy maintains structural integrity for future safe pregnancy and natural delivery.",
      ],
      fears: [
        {
          id: "en-lap-f-1",
          fear: "I am scared that removing large fibroids or severe endometriosis will require a hysterectomy or damage my fertility.",
          reality:
            "Minimally invasive gynecologic surgery adheres to organ-preserving principles. With Prof. Dr. Mohamed Mamdouh Saleh's international GESEA Level 2 certification, pathological lesions and fibroids are excised meticulously while micro-suturing the uterine architecture to safeguard reproductive function.",
          sourceTag: "ESGE / GESEA Clinical Guidelines",
        },
      ],
      sections: [
        {
          id: "advantages",
          title: "Laparoscopic Precision vs. Conventional Open Laparotomy",
          content: [
            "Traditional open surgery entails large abdominal incisions with high rates of secondary pelvic adhesions, which can paradoxically aggravate infertility and chronic pelvic pain.",
            "Laparoscopy utilizes micro-incisions and advanced ultrasonic or bipolar energy to achieve bloodless dissection, drastically reducing postoperative adhesion formation.",
          ],
        },
      ],
      advices: [
        {
          id: "en-lap-adv-1",
          title: "Early Gentle Walking on Day of Surgery",
          description:
            "Short walks down the corridor help absorb residual CO2 insufflation gas, preventing transient diaphragmatic shoulder discomfort.",
          type: "do",
        },
      ],
      warningSigns: {
        title: "Signs Requiring Immediate Contact:",
        items: [
          "Worsening sharp abdominal pain unresponsive to analgesics.",
          "Fever above 38°C.",
          "Purulent discharge or spreading erythema around trocar puncture sites.",
        ],
      },
      faqs: [
        {
          id: "en-lap-q-1",
          question: "How soon can I return to work after laparoscopic surgery?",
          answer:
            "Most patients comfortably return to sedentary desk work and daily routines within 5-7 days, compared to 4-6 weeks after conventional open laparotomy.",
        },
      ],
      references: [
        {
          title: "The Investigation and Management of Endometriosis",
          organization: "Royal College of Obstetricians and Gynaecologists (RCOG)",
          year: "2021 (Green-top Guideline No. 24)",
          summary:
            "Authoritative recommendations establishing laparoscopic excision as optimal for pain relief and fertility.",
        },
      ],
    },
  },
};

export function getArticles(locale: AppLocale): ArticleContent[] {
  const localized = ARTICLES_DATA[locale] || ARTICLES_DATA.en;
  return Object.values(localized);
}

export function getArticleBySlug(
  locale: AppLocale,
  slug: string,
): ArticleContent | undefined {
  const localized = ARTICLES_DATA[locale] || ARTICLES_DATA.en;
  return localized[slug];
}

export function getAllArticleSlugs(): string[] {
  return Object.keys(ARTICLES_DATA.en);
}
