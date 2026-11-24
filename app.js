// SimpleEnergy Sangamner - Combinatorial AI Review Generator Engine
// 100% Pure Language Integrity (Zero Mixed Languages)
// Strict Line Counts (2-4, 4-6, 7-9) & Optional Owner Appreciation

const DEFAULT_GOOGLE_REVIEW_URL = 'https://share.google/Ez8gatw2OtRbE2urZ';
const DEFAULT_GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/kRE9Zcui61BRVoaZ8';

const SCOOTER_CATALOG = {
  'Simple Wave': [
    'Wave S EBN – 2.2 kWh',
    'Wave S EBN – 2.7 kWh',
    'Wave S TFT',
    'Wave EBN',
    'Wave TFT',
    'Wave Plus'
  ],
  'Simple One': [
    'Simple One – 5.0 kWh'
  ],
  'Simple Ultra': [
    'Simple Ultra STD – 6.5 kWh'
  ]
};

// Application State
const state = {
  rating: 5,
  purpose: 'buy', // 'buy' or 'service'
  modelCategory: 'Simple One',
  variant: 'Simple One – 5.0 kWh',
  experience: 'Excellent',
  highlights: [],
  includeThanks: true, // Optional Owner & Staff appreciation
  length: 'medium', // 'short', 'medium', 'deep'
  language: 'en', // 'en', 'mr', 'hi'
  photoDataUrl: null,
  photoFileName: '',
  generatedReview: '',
  googleReviewUrl: localStorage.getItem('se_google_review_url') || DEFAULT_GOOGLE_REVIEW_URL,
  customExperience: ''
};

// 100% PURE LANGUAGE LEXICON (Zero Mixed-Language Words)
const pureLexicon = {
  // 100% PURE ENGLISH
  en: {
    buy: {
      openers: [
        "Delighted to take delivery of my brand new {model} from Simple Energy Sangamner (Viraaj EV Motors)!",
        "Proud moment taking delivery of our new {model} at the Simple Energy showroom in Sangamner.",
        "Had a wonderful experience purchasing our new {model} from Viraaj EV Motors Sangamner.",
        "Just received the keys to my new {model} at Simple Energy Sangamner, and it has been fantastic!",
        "Finally upgraded to clean electric mobility with the {model} from Simple Energy Sangamner showroom."
      ],
      experiences: {
        'Excellent': [
          "The showroom staff handled the test ride, paperwork, and handover with absolute professionalism.",
          "Everything from booking to final vehicle handover was completely seamless, transparent, and prompt.",
          "The team explained all smart digital features, battery charging habits, and app controls thoroughly."
        ],
        'Good': [
          "Very pleasant buying experience with all our questions answered patiently by the team.",
          "Showroom atmosphere is welcoming and all handover formalities were completed on time.",
          "Good and dependable dealership service with courteous assistance at every single step."
        ],
        'Other': [
          "The scooter build quality, comfortable ergonomics, and futuristic design are truly impressive.",
          "The electric powertrain delivers punchy acceleration, stability, and smooth control."
        ]
      },
      highlightsPool: {
        'smooth_delivery': [
          "The delivery celebration and key handover ceremony made our family milestone memorable. 🎉",
          "Loved the organized delivery setup and the warm hospitality shown by the showroom team. 🎊"
        ],
        'great_range': [
          "The battery range and instant throttle response are truly the best in class. ⚡",
          "Impressive battery efficiency that easily covers our daily commutes with total peace of mind. 🔋"
        ],
        'polite_staff': [
          "The executives were polite, knowledgeable, and guided us with complete patience. 🤝",
          "Great hospitality and humble behavior from every staff member at the showroom. 👍"
        ],
        'quick_finance': [
          "Loan paperwork and registration formalities were completed swiftly without delays. 📄",
          "Clear financing terms and prompt processing with zero hidden charges. 💳"
        ],
        'test_ride': [
          "The detailed test ride gave full confidence in the scooter's suspension and braking. 🛵",
          "Testing on open roads convinced me instantly to choose Simple Energy. 🛣️"
        ]
      },
      praiseLines: [
        "Riding on city roads is comfortable with its well-balanced suspension setup.",
        "A stylish electric scooter that delivers the ideal balance of range, speed, and safety.",
        "The digital dashboard and comfortable seating make daily riding enjoyable."
      ],
      thanksOptions: [
        "Heartfelt special thanks to the owner and all staff of Simple Energy Sangamner for ensuring such a smooth delivery! 👏💐",
        "Special thanks to the owner and all staff of Simple Energy Sangamner for the smooth delivery and great hospitality! 🛵✨",
        "A very warm special thanks to the owner and all staff of Simple Energy Sangamner for making this delivery memorable! 🙌🎉"
      ],
      closings: [
        "Strongly recommend Simple Energy Sangamner to anyone planning to switch to electric! 🌟",
        "Full 5 stars to the showroom team for a flawless delivery experience! 🚀",
        "Very happy with our purchase and highly recommend Viraaj EV Motors Sangamner! 👍"
      ]
    },
    service: {
      openers: [
        "Recently visited Simple Energy Sangamner (Viraaj EV Motors) for scheduled servicing of my {model}.",
        "Sharing my genuine service feedback for my {model} at Simple Energy Sangamner service center.",
        "Took my {model} in for regular maintenance and checkup at Simple Energy Sangamner.",
        "Completed routine servicing of my {model} at Viraaj EV Motors Simple Energy workshop in Sangamner."
      ],
      experiences: {
        'Excellent': [
          "The technicians inspected every point thoroughly and resolved all issues with precision.",
          "Fast turnaround time and complete transparency on every maintenance step.",
          "The scooter feels as smooth, silent, and responsive as brand new post-service."
        ],
        'Good': [
          "Prompt and dependable service support provided by the service desk team.",
          "Standard maintenance points were checked and resolved satisfactorily.",
          "Polite service advisors, honest billing, and on-time vehicle handover."
        ],
        'Other': [
          "Appreciate the technical transparency and maintenance advice from the head technician."
        ]
      },
      highlightsPool: {
        'on_time': [
          "The scooter was serviced and returned right on committed time without delays. ⏱️",
          "Punctual service turnaround and timely status updates. ⏰"
        ],
        'clean_wash': [
          "The washing, polishing, and exterior cleaning left the scooter spotless. ✨",
          "Thorough vehicle wash done with proper care for electrical components. 🚿"
        ],
        'polite_tech': [
          "Technicians were courteous, patient, and explained the battery diagnostics clearly. 👨‍🔧",
          "Professional service advisors who know electric scooter diagnostics inside out. 🛠️"
        ],
        'battery_check': [
          "Battery cell health, BMS diagnostics, and firmware software were thoroughly updated. 🔋",
          "Software diagnostics and brake calibration were completed accurately. ⚡"
        ],
        'fair_charges': [
          "Honest and transparent billing with zero unnecessary part replacements. 💰",
          "Reasonable service charges and clear breakdown of work done. 🧾"
        ]
      },
      praiseLines: [
        "Riding feels remarkably refined and tight with zero vibrations after service.",
        "Great peace of mind having reliable official service support right here in Sangamner."
      ],
      thanksOptions: [
        "Special thanks to the owner and all staff of Simple Energy Sangamner for the smooth service experience! 🔧✨",
        "A heartfelt special thanks to the owner and all staff of Simple Energy Sangamner for their quick assistance and smooth service! 🛵👏",
        "Special thanks to the owner and all staff of Simple Energy Sangamner (Viraaj EV Motors) for the wonderful service support! 🙌🛠️"
      ],
      closings: [
        "Best authorized EV service center in Sangamner! Keep maintaining these standards. 🌟",
        "Five stars to the service team at Viraaj EV Motors Sangamner! 🚀",
        "Truly dependable service support for Simple Energy scooter owners in our town. 👍"
      ]
    }
  },

  // 100% PURE MARATHI (अस्सल व शुद्ध मराठी - एकही इंग्रजी ओळ नाही)
  mr: {
    buy: {
      openers: [
        "सिंपल एनर्जी संगमनेर (विराज ईव्ही मोटर्स) येथून माझी नवीन {model} ची डिलिव्हरी घेतली, खूप छान वाटले!",
        "आज आमच्या घरी सिंपल एनर्जी संगमनेर शोरूममधून नवीन {model} इलेक्ट्रिक स्कूटर आली. खूप आनंद झाला!",
        "विराज ईव्ही मोटर्स, नगर रोड, संगमनेर यांच्याकडून आज {model} ची डिलिव्हरी अतिशय आनंदी वातावरणात झाली.",
        "संगमनेरमधील सिंपल एनर्जीच्या अधिकृत शोरूममधून {model} खरेदी करण्याचा अनुभव मनापासून समाधान देणारा ठरला.",
        "पर्यावरणास पूरक प्रवासासाठी सिंपल एनर्जी संगमनेर येथून नवी {model} गाडी खरेदी केली."
      ],
      experiences: {
        'Excellent': [
          "टेस्ट राइडपासून ते गाडीची चावी मिळेपर्यंतचा संपूर्ण अनुभव अतिशय उत्कृष्ट आणि पारदर्शक होता.",
          "शोरूममधील कर्मचाऱ्यांनी गाडीची सर्व वैशिष्ट्ये, बॅटरी चार्जिंग आणि फिचर्स अत्यंत आपुलकीने समजावून सांगितले.",
          "गाडीची डिलिव्हरी ठरलेल्या वेळेत आणि सन्मानपूर्वक पद्धतीने पार पडली."
        ],
        'Good': [
          "गाडी खरेदी करताना चांगला अनुभव आला. सर्व कामांची पूर्तता वेळेवर झाली.",
          "कर्मचारी अत्यंत नम्र आहेत आणि त्यांनी प्रत्येक शंकेचे व्यवस्थित निरसन केले.",
          "कागदपत्रांची पूर्तता आणि गाडीची डिलिव्हरी अगदी सुरळीतपणे पार पडली."
        ],
        'Other': [
          "गाडीचा मजबूत लूक, सस्पेंशन आणि उत्तम पिकअप संगमनेरच्या रस्त्यांसाठी एकदम योग्य आहे.",
          "इलेक्ट्रिक स्कूटरमध्ये डिझाइन आणि बॅटरी रेंजच्या बाबतीत सिंपल एनर्जी सर्वोत्तम आहे."
        ]
      },
      highlightsPool: {
        'smooth_delivery': [
          "गाडीचा डिलिव्हरी सोहळा खूपच छान, पेढे वाटून आणि अविस्मरणीय पद्धतीने केला. 🎉",
          "डिलिव्हरीच्या वेळी केलेले स्वागत आणि फोटो क्षण आमच्या कुटुंबासाठी संस्मरणीय ठरले. 🎊"
        ],
        'great_range': [
          "गाडीची बॅटरी रेंज आणि पिकअप या श्रेणीमध्ये खरोखरच सर्वोत्तम आणि विश्वासार्ह आहे. ⚡",
          "एका चार्जमध्ये मिळणारी रेंज दैनंदिन प्रवासासाठी एकदम उत्तम आणि पैशांची मोठी बचत करणारी आहे. 🔋"
        ],
        'polite_staff': [
          "शोरूममधील सर्व कर्मचारी अतिशय नम्र, सहकार्यशील आणि आपुलकीने मार्गदर्शन करणारे आहेत. 🤝",
          "कर्मचाऱ्यांचे संभाषण आणि ग्राहकांना दिलेला वेळ खूपच आदरयुक्त होता. 🌟"
        ],
        'quick_finance': [
          "कर्ज, विमा आणि नोंदणीचे सर्व कागदपत्र अगदी कमी वेळेत विनासायास पूर्ण करून दिले. 📄",
          "फायनान्सचे नियम आणि हप्ते पारदर्शकपणे समजावून सांगितले, कसलाही छुपा खर्च नाही. 💳"
        ],
        'test_ride': [
          "खरेदी करण्यापूर्वी दिलेली सविस्तर टेस्ट राइड गाडीच्या क्षमतेवर विश्वास बसवण्यासाठी खूप उपयुक्त ठरली. 🛵",
          "रस्त्यावर गाडी चालवून पाहताना सस्पेंशन आणि ब्रेकची खात्री पटली. 🛣️"
        ]
      },
      praiseLines: [
        "गाडी चालवताना खूपच आरामदायी वाटते आणि लुक एकदम आधुनिक व देखणा आहे.",
        "कमी खर्चात दैनंदिन प्रवासासाठी ही इलेक्ट्रिक स्कूटर प्रत्येक संगमनेरकरांसाठी वरदान आहे.",
        "सस्पेंशन खूप मजबूत आहे, ज्यामुळे ग्रामीण व शहरी रस्त्यांवर गाडी अतिशय स्थिर चालते."
      ],
      thanksOptions: [
        "सिंपल एनर्जी संगमनेर (विराज ईव्ही मोटर्स) चे संचालक व सर्व कर्मचाऱ्यांचे सुरळीत डिलिव्हरीबद्दल मनापासून विशेष आभार! 👏💐",
        "गाडीच्या उत्तम डिलिव्हरी अनुभवाबद्दल सिंपल एनर्जी संगमनेरचे संचालक व सर्व कर्मचाऱ्यांचे मनापासून आभार! 🛵✨",
        "सिंपल एनर्जी संगमनेरचे संचालक व सर्व स्टाफचे सुरळीत सहकार्य व आदरातिथ्याबद्दल मनःपूर्वक विशेष आभार! 🙌🎉"
      ],
      closings: [
        "संगमनेर आणि परिसरातील सर्वांना सिंपल एनर्जी संगमनेर शोरूमला नक्की भेट देण्याची शिफारस करतो! 🌟",
        "इलेक्ट्रिक स्कूटर घ्यायची असेल तर विराज ईव्ही मोटर्स, संगमनेर हाच सर्वोत्तम पर्याय आहे! 👍",
        "अतिशय समाधानी ग्राहक! संपूर्ण संगमनेर टिमला ५ पैकी ५ स्टार! 🚀"
      ]
    },
    service: {
      openers: [
        "माझ्या {model} स्कूटरच्या नियमित सर्व्हिसिंगसाठी सिंपल एनर्जी संगमनेर (विराज ईव्ही मोटर्स) येथे गेलो होतो.",
        "विराज ईव्ही मोटर्स संगमनेर येथे {model} ची सर्व्हिसिंग पूर्ण केली. अतिशय उत्तम अनुभव आला.",
        "सिंपल एनर्जी संगमनेरच्या अधिकृत सर्व्हिस सेंटरमधील कामाचा दर्जा खरोखरच समाधानकारक आहे.",
        "स्कूटरच्या तपासणी आणि मेंटेनन्ससाठी सिंपल एनर्जी संगमनेर वर्कशॉपला भेट दिली."
      ],
      experiences: {
        'Excellent': [
          "टेक्निकल टिमने गाडीचे संपूर्ण काम अतिशय बारकाईने, काळजीपूर्वक आणि तत्परतेने पूर्ण केले.",
          "गाडीची तपासणी, वॉशिंग आणि सॉफ्टवेअर अपडेट अगदी योग्य पद्धतीने केले गेले.",
          "गाडी सर्व्हिसिंगनंतर एकदम नव्यासारखी, शांत आणि स्मूथ चालत आहे."
        ],
        'Good': [
          "चांगली व तत्पर सर्व्हिसिंग सेवा मिळाली. कर्मचारी अत्यंत सहकार्यशील आहेत.",
          "वेळेवर गाडी परत मिळाली आणि केलेल्या सर्व कामाबद्दल स्पष्ट माहिती दिली.",
          "वाजवी दर आणि प्रामाणिक काम पाहून मन समाधानी झाले."
        ],
        'Other': [
          "इलेक्ट्रिक वाहनांची योग्य काळजी कशी घ्यावी याबद्दल उत्तम मार्गदर्शन मिळाले."
        ]
      },
      highlightsPool: {
        'on_time': [
          "दिलेल्या वेळेत गाडी सर्व्हिस करून दिली, अजिबात अनावश्यक थांबावे लागले नाही. ⏱️",
          "कामाची तत्परता आणि वेळेचे नियोजन खूप चांगले होते. ⏰"
        ],
        'clean_wash': [
          "गाडीचे वॉशिंग आणि पॉलिशिंग अतिशय चकाचक केले असून गाडी नव्यासारखी चमकत आहे. ✨",
          "इलेक्ट्रिक भागांची काळजी घेत केलेले वॉटर वॉश खूप समाधानकारक होते. 🚿"
        ],
        'polite_tech': [
          "तंत्रज्ञांचे संभाषण खूप नम्र, आदरयुक्त आणि कामात परिपूर्ण होते. 👨‍🔧",
          "बॅटरी व डिजिटल डिस्प्लेबद्दल तंत्रज्ञांनी दिलेली माहिती उपयुक्त ठरली. 🤝"
        ],
        'battery_check': [
          "बॅटरी तपासणी, ब्रेक सिस्टीम आणि सॉफ्टवेअर व्यवस्थित तपासून अपडेट केले. 🔋",
          "तांत्रिक तपासणी अहवाल स्पष्टपणे दाखवून गाडी पूर्ण सुरक्षित असल्याचे सांगितले. ⚡"
        ],
        'fair_charges': [
          "सर्व्हिसचे बिल अतिशय वाजवी, पारदर्शक आणि कामाचे पूर्ण समाधान देणारे होते. 💰",
          "अनावश्यक खर्च न लावता प्रामाणिकपणे काम केले. 🧾"
        ]
      },
      praiseLines: [
        "सर्व्हिसिंगनंतर गाडीचे रायडिंग खूप आरामदायक आणि आवाजमुक्त झाले आहे.",
        "ग्राहकांच्या वाहनाची स्वतःच्या वाहनासारखी काळजी घेणारे संगमनेरमधील हे उत्तम सेंटर आहे."
      ],
      thanksOptions: [
        "उत्कृष्ट आणि तत्पर सर्व्हिसिंगसाठी सिंपल एनर्जी संगमनेरचे संचालक व सर्व स्टाफचे मनापासून विशेष आभार! 🔧💐",
        "गाडीच्या उत्तम सर्व्हिस अनुभवाबद्दल सिंपल एनर्जी संगमनेरचे संचालक व सर्व कर्मचाऱ्यांचे हार्दिक आभार! 🛵👏",
        "सिंपल एनर्जी संगमनेर (विराज ईव्ही मोटर्स) चे संचालक व सर्व कर्मचाऱ्यांचे छान सर्व्हिसबद्दल विशेष आभार! 🙌🛠️"
      ],
      closings: [
        "सिंपल एनर्जीच्या गाडी मालकांसाठी संगमनेरमधील सर्व्हिस नक्कीच विश्वासार्ह आहे! 🌟",
        "उत्कृष्ट सेवेबद्दल विराज ईव्ही मोटर्स संगमनेर टिमचे मनःपूर्वक आभार! 👍",
        "५ पैकी ५ स्टार! संगमनेर परिसरातील सर्वांसाठी सर्वोत्तम सर्व्हिस सेंटर! 🚀"
      ]
    }
  },

  // 100% PURE HINDI (शुद्ध व स्पष्ट हिंदी - कोई मिश्रित भाषा नहीं)
  hi: {
    buy: {
      openers: [
        "सिंपल एनर्जी संगमनेर (विराज ईवी मोटर्स) से अपनी नई {model} की डिलीवरी ली। बहुत ही सुखद अनुभव रहा!",
        "आज हमारे परिवार में सिंपल एनर्जी संगमनेर से नई {model} इलेक्ट्रिक स्कूटर आई है। बेहद खुशी का दिन है!",
        "विराज ईवी मोटर्स संगमनेर से {model} खरीदी। शोरूम का माहौल, व्यवस्था और स्टाफ सभी बहुत शानदार हैं।",
        "इलेक्ट्रिक मोबिलिटी अपनाने के लिए सिंपल एनर्जी संगमनेर पर {model} लेना हमारा सबसे बेहतरीन फैसला रहा।",
        "संगमनेर नगर रोड स्थित शोरूम से अपनी नई {model} की डिलीवरी लेते हुए बहुत गर्व महसूस हो रहा है।"
      ],
      experiences: {
        'Excellent': [
          "टेस्ट राइड से लेकर फाइनल डिलीवरी तक का पूरा सफर बहुत ही सहज, पारदर्शी और व्यवस्थित रहा।",
          "स्टाफ ने गाड़ी के सभी डिजिटल फीचर्स, चार्जिंग प्रक्रिया और राइडिंग मोड्स को बहुत अच्छी तरह समझाया।",
          "ग्राहकों के प्रति इनका व्यवहार, समय की पाबंदी और मदद करने की भावना सच में सराहनीय है।"
        ],
        'Good': [
          "खरीदारी का अनुभव काफी अच्छा रहा और सभी औपचारिकताएं बिना किसी झंझट के पूरी हुईं।",
          "स्टाफ विनम्र है और उन्होंने हमारे सभी सवालों का धैर्यपूर्वक समाधान किया।",
          "गाड़ी की स्थिति एकदम साफ-सुथरी और शानदार तरीके से डिलीवर की गई।"
        ],
        'Other': [
          "गाड़ी की मजबूत बनावट, शानदार पिकअप और आरामदायक सीटिंग संगमनेर की सड़कों के लिए एकदम सही है।",
          "इलेक्ट्रिक स्कूटर्स में सिंपल एनर्जी का डिजाइन और रेंज दोनों ही बेमिसाल हैं।"
        ]
      },
      highlightsPool: {
        'smooth_delivery': [
          "गाड़ी की डिलीवरी बहुत ही सुंदर, मीठा मुंह कराकर और यादगार पलों के साथ संपन्न हुई। 🎉",
          "डिलीवरी के समय परिवार का किया गया आदर-सत्कार दिल को छू गया। 🎊"
        ],
        'great_range': [
          "गाड़ी की असली बैटरी रेंज और पिकअप बाकी सभी स्कूटर्स से कहीं ज्यादा भरोसेमंद है। ⚡",
          "एक बार चार्ज करने पर मिलने वाली रेंज से रोजाना के सफर का खर्चा बहुत कम हो जाता है। 🔋"
        ],
        'polite_staff': [
          "शोरूम स्टाफ का व्यवहार अत्यंत विनम्र, सहयोगी और हर कदम पर मार्गदर्शन करने वाला रहा। 🤝",
          "सभी कर्मचारियों ने बहुत ही आत्मीयता से स्वागत और मदद की। 🌟"
        ],
        'quick_finance': [
          "फाइनेंस, बीमा और रजिस्ट्रेशन का काम बिना किसी परेशानी के बहुत जल्दी पूरा हो गया। 📄",
          "सभी शर्तें पूरी तरह पारदर्शी थीं, कोई भी छुपा हुआ चार्ज नहीं था। 💳"
        ],
        'test_ride': [
          "विस्तृत टेस्ट राइड से गाड़ी के सस्पेंशन, ब्रेकिंग और पिकअप पर पूरा भरोसा हो गया। 🛵",
          "खुले रास्ते पर चलाकर देखने से ईवी को लेकर मन के सभी संशय दूर हो गए। 🛣️"
        ]
      },
      praiseLines: [
        "सवारी बहुत ही आरामदायक है और इसका डिजिटल डिस्प्ले बेहद स्मार्ट और आधुनिक है।",
        "कम खर्च में लंबी दूरी तय करने के लिए यह सबसे बेहतरीन और शक्तिशाली इलेक्ट्रिक स्कूटर है।"
      ],
      thanksOptions: [
        "सिंपल एनर्जी संगमनेर (विराज ईवी मोटर्स) के संचालक एवं सभी कर्मचारियों का सुगम डिलीवरी के लिए सहृदय विशेष धन्यवाद! 👏💐",
        "गाड़ी की शानदार डिलीवरी के लिए सिंपल एनर्जी संगमनेर के संचालक एवं सभी स्टाफ का बहुत-बहुत धन्यवाद! 🛵✨",
        "सिंपल एनर्जी संगमनेर के संचालक एवं पूरी टीम को इस सुखद डिलीवरी अनुभव के लिए हार्दिक विशेष धन्यवाद! 🙌🎉"
      ],
      closings: [
        "संगमनेर और आसपास के सभी लोगों को सिंपल एनर्जी संगमनेर जाने की पुरजोर सिफारिश करता हूँ! 🌟",
        "विराज ईवी मोटर्स संगमनेर को पूरे 5 स्टार! बहुत-बहुत धन्यवाद। 🚀",
        "इलेक्ट्रिक स्कूटर के लिए संगमनेर में यह सबसे बेहतरीन जगह है! 👍"
      ]
    },
    service: {
      openers: [
        "सिंपल एनर्जी संगमनेर (विराज ईवी मोटर्स) में अपनी {model} स्कूटर की नियमित सर्विस करवाई।",
        "विराज ईवी मोटर्स संगमनेर सर्विस सेंटर का अनुभव बहुत ही संतोषजनक और पेशेवर रहा।",
        "अपनी {model} के मेंटेनेंस के लिए अधिकृत सिंपल एनर्जी संगमनेर वर्कशॉप का अनुभव साझा कर रहा हूँ।"
      ],
      experiences: {
        'Excellent': [
          "टेक्निशियन ने स्कूटर का पूरा काम बहुत ही बारीकी, कुशलता और तत्परता से पूरा किया।",
          "सर्विस के बाद गाड़ी बिल्कुल नई जैसी शांत और स्मूथ चल रही है।",
          "समय की पाबंदी और काम की गुणवत्ता दोनों ही स्तर पर यह सेंटर बहुत बढ़िया है।"
        ],
        'Good': [
          "अच्छी और त्वरित सर्विसिंग सुविधा मिली। स्टाफ काफी सहयोगी और विनम्र है।",
          "समय पर गाड़ी डिलीवर की गई और पूरी सर्विस डिटेल स्पष्ट रूप से समझाई गई।"
        ],
        'Other': [
          "इलेक्ट्रिक स्कूटर के रखरखाव के लिए दी गई सलाह बहुत उपयोगी और व्यावहारिक रही।"
        ]
      },
      highlightsPool: {
        'on_time': [
          "गाड़ी बिना किसी देरी के तय समय पर सर्विस होकर मिल गई। ⏱️",
          "समय के प्रति प्रतिबद्धता बहुत सराहनीय रही। ⏰"
        ],
        'clean_wash': [
          "गाड़ी की वॉशिंग और पॉलिशिंग बहुत ही चमचमाती हुई और साफ-सुथरी थी। ✨",
          "इलेक्ट्रिक पार्ट्स का ध्यान रखते हुए की गई सफाई बेहतरीन रही। 🚿"
        ],
        'polite_tech': [
          "टेक्निशियन बहुत विनम्र और अपने काम में माहिर थे। 👨‍🔧",
          "तकनीकी सवालों के जवाब बहुत ही धैर्य से दिए गए। 🤝"
        ],
        'battery_check': [
          "बैटरी हेल्थ, ब्रेक कैलिब्रेशन और सॉफ्टवेयर डायग्नोस्टिक्स को अच्छी तरह चेक किया गया। 🔋",
          "गाड़ी की संपूर्ण सुरक्षा जांच करके आश्वस्त किया गया। ⚡"
        ],
        'fair_charges': [
          "सर्विस चार्ज बिल्कुल उचित, पारदर्शी और काम के अनुसार सही रहे। 💰",
          "कोई भी अनावश्यक काम नहीं थोपा गया। 🧾"
        ]
      },
      praiseLines: [
        "सर्विस के बाद गाड़ी की राइडिंग पहले से भी ज्यादा आरामदायक और सुरक्षित हो गई है।",
        "संगमनेर में ही अधिकृत कंपनी का इतना अच्छा सर्विस सपोर्ट होना बहुत बड़ी सुविधा है।"
      ],
      thanksOptions: [
        "उत्कृष्ट एवं समयबद्ध सर्विस के लिए सिंपल एनर्जी संगमनेर के संचालक एवं पूरी टीम का हार्दिक धन्यवाद! 🔧💐",
        "गाड़ी की बेहतरीन सर्विस के लिए सिंपल एनर्जी संगमनेर के संचालक एवं सभी कर्मचारियों का विशेष धन्यवाद! 🛵👏",
        "सिंपल एनर्जी संगमनेर (विराज ईवी मोटर्स) के संचालक एवं सभी स्टाफ का अच्छी सर्विस के लिए बहुत-बहुत धन्यवाद! 🙌🛠️"
      ],
      closings: [
        "संगमनेर में सिंपल एनर्जी स्कूटर के लिए सबसे भरोसेमंद सर्विस सेंटर! 🌟",
        "उत्कृष्ट सेवा के लिए विराज ईवी मोटर्स की पूरी टीम का आभार! 👍",
        "पूरे 5 स्टार! बेहतरीन काम। 🚀"
      ]
    }
  }
};

function pickRandom(arr) {
  if (!arr || arr.length === 0) return '';
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderVariants() {
  const container = document.getElementById('variantChipsContainer');
  if (!container) return;

  const variants = SCOOTER_CATALOG[state.modelCategory] || [];
  container.innerHTML = '';

  variants.forEach((vName) => {
    const btn = document.createElement('button');
    btn.className = `chip-btn variant-chip px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
      state.variant === vName ? 'active' : ''
    }`;
    btn.textContent = vName;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.variant-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.variant = vName;
      generateReview();
    });
    container.appendChild(btn);
  });
}

// Generate review with strict line constraints and 100% language purity
function generateReview() {
  const lang = state.language || 'en';
  const purpose = state.purpose; // 'buy' or 'service'
  const modelToMention = state.variant || state.modelCategory;
  const exp = state.experience || 'Excellent';
  const len = state.length || 'medium'; // 'short', 'medium', 'deep'
  const includeThanks = state.includeThanks;

  const langPack = pureLexicon[lang] || pureLexicon.en;
  const branch = langPack[purpose] || langPack.buy;

  // 1. Opener
  let opener = pickRandom(branch.openers).replace(/{model}/g, modelToMention);

  // 2. Experience Description
  const expList = branch.experiences[exp] || branch.experiences['Excellent'];
  let expDesc = pickRandom(expList);

  // 3. Highlight Lines
  let highlightTexts = [];
  if (state.highlights && state.highlights.length > 0) {
    state.highlights.forEach(hKey => {
      if (branch.highlightsPool && branch.highlightsPool[hKey]) {
        highlightTexts.push(pickRandom(branch.highlightsPool[hKey]));
      }
    });
  }

  // 4. Vehicle Praise
  let praise = pickRandom(branch.praiseLines);

  // 5. Compulsory Owner & Staff Appreciation (ONLY IF SELECTED BY CUSTOMER)
  let thanksLine = includeThanks ? pickRandom(branch.thanksOptions) : '';

  // 6. Closing
  let close = pickRandom(branch.closings);

  // 7. Custom extra
  let customExtra = state.customExperience.trim() ? ` ${state.customExperience.trim()}` : '';

  let lines = [];

  if (len === 'short') {
    // 2-3 lines (Strict Max 4 lines)
    lines.push(`${opener}`);
    if (customExtra) {
      lines.push(`${expDesc}${customExtra}`);
    } else if (highlightTexts.length > 0) {
      lines.push(highlightTexts[0]);
    } else {
      lines.push(`${expDesc}`);
    }
    if (thanksLine) {
      lines.push(thanksLine);
    } else {
      lines.push(close);
    }
    // Limit to max 4 lines
    lines = lines.slice(0, 4);

  } else if (len === 'medium') {
    // 4-5 lines (Strict Max 6 lines)
    lines.push(`${opener}`);
    lines.push(`${expDesc}${customExtra}`);
    if (highlightTexts.length > 0) {
      lines.push(highlightTexts[0]);
    } else {
      lines.push(praise);
    }
    if (thanksLine) {
      lines.push(thanksLine);
    }
    lines.push(close);
    // Limit to max 6 lines
    lines = lines.slice(0, 6);

  } else {
    // 7-8 lines (Strict Max 9 lines)
    lines.push(`${opener}`);
    lines.push(`${expDesc}${customExtra}`);
    if (highlightTexts.length > 0) {
      lines.push(highlightTexts[0]);
      if (highlightTexts.length > 1) {
        lines.push(highlightTexts[1]);
      }
    }
    lines.push(praise);
    if (lang === 'mr') {
      lines.push("नगर रोडवरील शोरूममधील वातावरण अतिशय स्वच्छ, प्रसन्न आणि स्वागतार्ह आहे.");
    } else if (lang === 'hi') {
      lines.push("नगर रोड स्थित शोरूम का माहौल बहुत ही साफ-सुथरा, आधुनिक और व्यवस्थित है।");
    } else {
      lines.push("The showroom ambiance at Viraaj EV Motors on Nagar Road is modern, clean, and welcoming.");
    }
    if (thanksLine) {
      lines.push(thanksLine);
    }
    lines.push(close);
    // Limit to max 9 lines
    lines = lines.slice(0, 9);
  }

  // Combine lines separated by double-newlines for clean mobile reading
  const reviewText = lines.filter(Boolean).join('\n\n');
  state.generatedReview = reviewText;

  const previewEl = document.getElementById('reviewText');
  if (previewEl) {
    previewEl.value = reviewText;
    previewEl.classList.add('ring-2', 'ring-blue-400');
    setTimeout(() => {
      previewEl.classList.remove('ring-2', 'ring-blue-400');
    }, 300);
  }
}

// Log review to localStorage for Admin Portal & Excel Export
function logReviewToStorage(reviewText) {
  try {
    const existingLogs = JSON.parse(localStorage.getItem('simpleenergy_reviews_log') || '[]');
    const newEntry = {
      id: 'rev_' + Date.now(),
      timestamp: new Date().toISOString(),
      dateStr: new Date().toLocaleDateString('en-IN'),
      timeStr: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      monthYear: new Date().toLocaleString('en-IN', { month: 'short', year: 'numeric' }),
      stars: state.rating,
      purpose: state.purpose === 'buy' ? 'Scooter Delivery' : 'Scooter Service',
      modelCategory: state.modelCategory,
      variant: state.variant,
      experience: state.experience,
      highlights: state.highlights.join(', '),
      language: state.language.toUpperCase(),
      reviewText: reviewText,
      hasPhoto: !!state.photoDataUrl,
      photoDataUrl: state.photoDataUrl || null,
      status: 'Proceeded to Google'
    };

    existingLogs.unshift(newEntry);
    if (existingLogs.length > 500) existingLogs.pop();
    localStorage.setItem('simpleenergy_reviews_log', JSON.stringify(existingLogs));
  } catch (e) {
    console.warn("Storage logging error:", e);
  }
}

// 2-in-1 Unified Action: Copy to clipboard & trigger direct opening of Google Review
function copyAndOpenGoogle() {
  const reviewText = document.getElementById('reviewText') ? document.getElementById('reviewText').value : state.generatedReview;
  
  if (!reviewText || reviewText.trim() === '') {
    alert("Please generate a review note first!");
    return;
  }

  logReviewToStorage(reviewText);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(reviewText).then(() => {
      showCopyModal();
      openGoogleTab();
    }).catch(() => {
      fallbackCopy(reviewText);
    });
  } else {
    fallbackCopy(reviewText);
  }
}

function fallbackCopy(text) {
  const textarea = document.getElementById('reviewText');
  if (textarea) {
    textarea.select();
    document.execCommand('copy');
  }
  showCopyModal();
  openGoogleTab();
}

function openGoogleTab() {
  const targetUrl = state.googleReviewUrl || DEFAULT_GOOGLE_REVIEW_URL;
  setTimeout(() => {
    window.open(targetUrl, '_blank');
  }, 700);
}

function showCopyModal() {
  const modal = document.getElementById('copySuccessModal');
  const photoHint = document.getElementById('photoUploadHint');
  if (photoHint) {
    if (state.photoDataUrl) {
      photoHint.classList.remove('hidden');
    } else {
      photoHint.classList.add('hidden');
    }
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeCopyModal() {
  const modal = document.getElementById('copySuccessModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function setRating(ratingValue) {
  state.rating = ratingValue;
  
  const starButtons = document.querySelectorAll('.star-btn');
  starButtons.forEach((btn, idx) => {
    if (idx < ratingValue) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const ratingLabel = document.getElementById('ratingLabel');
  const ratingHelp = document.getElementById('ratingHelp');
  const positiveFlow = document.getElementById('positiveFlowContainer');
  const grievanceFlow = document.getElementById('grievanceContainer');

  if (ratingValue >= 4) {
    if (ratingLabel) ratingLabel.textContent = `${ratingValue} Star Rating Selected ⭐`;
    if (ratingHelp) ratingHelp.textContent = "Thank you! We will prepare your positive review note for Google.";
    if (positiveFlow) positiveFlow.classList.remove('hidden');
    if (grievanceFlow) grievanceFlow.classList.add('hidden');
    generateReview();
  } else {
    if (ratingLabel) ratingLabel.textContent = `${ratingValue} Star Feedback Received`;
    if (ratingHelp) ratingHelp.textContent = "We care deeply about your satisfaction. Tell the showroom manager directly so we can resolve this right away.";
    if (positiveFlow) positiveFlow.classList.add('hidden');
    if (grievanceFlow) grievanceFlow.classList.remove('hidden');
  }
}

function setPurpose(purpose) {
  state.purpose = purpose;

  const btnBuy = document.getElementById('tabBuy');
  const btnService = document.getElementById('tabService');
  const highlightsBuy = document.getElementById('highlightsBuy');
  const highlightsService = document.getElementById('highlightsService');
  const modelPrompt = document.getElementById('modelPrompt');
  const photoHeading = document.getElementById('photoSectionHeading');

  if (purpose === 'buy') {
    btnBuy.classList.add('brand-button-primary');
    btnBuy.classList.remove('bg-white', 'text-slate-700', 'border');
    btnService.classList.remove('brand-button-primary');
    btnService.classList.add('bg-white', 'text-slate-700', 'border');

    if (highlightsBuy) highlightsBuy.classList.remove('hidden');
    if (highlightsService) highlightsService.classList.add('hidden');
    if (modelPrompt) modelPrompt.textContent = "Which Simple Energy scooter did you buy?";
    if (photoHeading) photoHeading.textContent = "Step 4 • Add Delivery Photo (Optional)";
  } else {
    btnService.classList.add('brand-button-primary');
    btnService.classList.remove('bg-white', 'text-slate-700', 'border');
    btnBuy.classList.remove('brand-button-primary');
    btnBuy.classList.add('bg-white', 'text-slate-700', 'border');

    if (highlightsService) highlightsService.classList.remove('hidden');
    if (highlightsBuy) highlightsBuy.classList.add('hidden');
    if (modelPrompt) modelPrompt.textContent = "Which Simple Energy scooter came for service?";
    if (photoHeading) photoHeading.textContent = "Step 4 • Add Scooter Photo (Optional)";
  }

  state.highlights = [];
  document.querySelectorAll('.highlight-chip').forEach(c => c.classList.remove('active'));
  generateReview();
}

function handleImageUpload(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 900;
      let width = img.width;
      let height = img.height;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.75);
      state.photoDataUrl = compressedDataUrl;
      state.photoFileName = file.name;

      const previewImg = document.getElementById('uploadedPhotoPreview');
      const previewBox = document.getElementById('photoPreviewBox');
      const uploadControls = document.getElementById('photoUploadControls');

      if (previewImg) previewImg.src = compressedDataUrl;
      if (previewBox) previewBox.classList.remove('hidden');
      if (uploadControls) uploadControls.classList.add('hidden');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function removeUploadedPhoto() {
  state.photoDataUrl = null;
  state.photoFileName = '';

  const fileInputCam = document.getElementById('cameraInput');
  const fileInputGal = document.getElementById('galleryInput');
  if (fileInputCam) fileInputCam.value = '';
  if (fileInputGal) fileInputGal.value = '';

  const previewBox = document.getElementById('photoPreviewBox');
  const uploadControls = document.getElementById('photoUploadControls');
  if (previewBox) previewBox.classList.add('hidden');
  if (uploadControls) uploadControls.classList.remove('hidden');
}

let logoClickCount = 0;
let logoClickTimer = null;
function handleLogoSecretClick() {
  logoClickCount++;
  clearTimeout(logoClickTimer);
  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 2000);

  if (logoClickCount >= 5) {
    logoClickCount = 0;
    window.location.href = 'admin.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const logoEl = document.getElementById('brandLogoClickable');
  if (logoEl) {
    logoEl.addEventListener('click', handleLogoSecretClick);
  }

  // Star Ratings
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-value'), 10);
      setRating(val);
    });
  });

  // Model Category Chips
  document.querySelectorAll('.model-cat-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.model-cat-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.modelCategory = btn.getAttribute('data-cat');
      const variants = SCOOTER_CATALOG[state.modelCategory] || [];
      state.variant = variants[0] || state.modelCategory;
      renderVariants();
      generateReview();
    });
  });

  // Experience level chips
  document.querySelectorAll('.exp-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.exp-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.experience = btn.getAttribute('data-exp');
      generateReview();
    });
  });

  // Highlight chips
  document.querySelectorAll('.highlight-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-highlight');
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        state.highlights = state.highlights.filter(h => h !== key);
      } else {
        btn.classList.add('active');
        if (!state.highlights.includes(key)) state.highlights.push(key);
      }
      generateReview();
    });
  });

  // Special Thanks Toggle Checkbox
  const thanksToggle = document.getElementById('includeThanksToggle');
  if (thanksToggle) {
    thanksToggle.checked = state.includeThanks;
    thanksToggle.addEventListener('change', (e) => {
      state.includeThanks = e.target.checked;
      generateReview();
    });
  }

  // Length chips (Short 2-3 max 4, Medium 4-5 max 6, Deep 7-8 max 9)
  document.querySelectorAll('.length-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.length-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.length = btn.getAttribute('data-length');
      generateReview();
    });
  });

  // Language buttons (100% Pure Language change)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.language = btn.getAttribute('data-lang');
      
      // Update the Thanks Checkbox text to match language!
      const thanksLabel = document.getElementById('includeThanksLabel');
      if (thanksLabel) {
        if (state.language === 'mr') {
          thanksLabel.textContent = "शोरूम संचालक व स्टाफचे विशेष आभार जोडा";
        } else if (state.language === 'hi') {
          thanksLabel.textContent = "शोरूम संचालक एवं सभी स्टाफ का विशेष धन्यवाद जोड़ें";
        } else {
          thanksLabel.textContent = "Include Special Thanks to Showroom Owner & Staff";
        }
      }

      generateReview();
    });
  });

  const customInput = document.getElementById('customExpInput');
  if (customInput) {
    customInput.addEventListener('input', (e) => {
      state.customExperience = e.target.value;
    });
    customInput.addEventListener('blur', () => {
      generateReview();
    });
  }

  const cameraInput = document.getElementById('cameraInput');
  const galleryInput = document.getElementById('galleryInput');

  if (cameraInput) {
    cameraInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleImageUpload(e.target.files[0]);
      }
    });
  }

  if (galleryInput) {
    galleryInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleImageUpload(e.target.files[0]);
      }
    });
  }

  const removePhotoBtn = document.getElementById('removePhotoBtn');
  if (removePhotoBtn) {
    removePhotoBtn.addEventListener('click', removeUploadedPhoto);
  }

  const regenBtn = document.getElementById('regenerateBtn');
  if (regenBtn) {
    regenBtn.addEventListener('click', () => {
      generateReview();
    });
  }

  const refreshActionBtn = document.getElementById('refreshReviewActionBtn');
  if (refreshActionBtn) {
    refreshActionBtn.addEventListener('click', () => {
      generateReview();
    });
  }

  const copyAndOpenBtn = document.getElementById('copyAndOpenBtn');
  if (copyAndOpenBtn) {
    copyAndOpenBtn.addEventListener('click', copyAndOpenGoogle);
  }

  const grievanceWhatsAppBtn = document.getElementById('grievanceWhatsAppBtn');
  if (grievanceWhatsAppBtn) {
    grievanceWhatsAppBtn.addEventListener('click', () => {
      const issue = document.getElementById('grievanceText').value || 'Customer Feedback';
      const msg = encodeURIComponent(`Hello Showroom Manager, Simple Energy Sangamner (Viraaj EV Motors). I have feedback regarding my visit: ${issue}`);
      window.open(`https://wa.me/918552885656?text=${msg}`, '_blank');
    });
  }

  renderVariants();
  setRating(5);
  generateReview();
});
