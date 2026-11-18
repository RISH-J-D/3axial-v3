export interface Language {
  code: string;
  name: string;
  native: string;
  flag: string;
}

export const POPULAR_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱' },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', native: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
  { code: 'sv', name: 'Swedish', native: 'Svenska', flag: '🇸🇪' }
];

export const ALL_LANGUAGES: Language[] = [
  { code: 'af', name: 'Afrikaans', native: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sq', name: 'Albanian', native: 'Shqip', flag: '🇦🇱' },
  { code: 'am', name: 'Amharic', native: 'አማርኛ', flag: '🇪🇹' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  { code: 'hy', name: 'Armenian', native: 'Հայերեն', flag: '🇦🇲' },
  { code: 'az', name: 'Azerbaijani', native: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'eu', name: 'Basque', native: 'Euskara', flag: '🇪🇸' },
  { code: 'be', name: 'Belarusian', native: 'Беларуская', flag: '🇧🇾' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇧🇩' },
  { code: 'bs', name: 'Bosnian', native: 'Bosanski', flag: '🇧🇦' },
  { code: 'bg', name: 'Bulgarian', native: 'Български', flag: '🇧🇬' },
  { code: 'ca', name: 'Catalan', native: 'Català', flag: '🇪🇸' },
  { code: 'ceb', name: 'Cebuano', native: 'Sinugboanon', flag: '🇵🇭' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', native: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', native: '繁體中文', flag: '🇹🇼' },
  { code: 'co', name: 'Corsican', native: 'Corsu', flag: '🇫🇷' },
  { code: 'hr', name: 'Croatian', native: 'Hrvatski', flag: '🇭🇷' },
  { code: 'cs', name: 'Czech', native: 'Čeština', flag: '🇨🇿' },
  { code: 'da', name: 'Danish', native: 'Dansk', flag: '🇩🇰' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
  { code: 'eo', name: 'Esperanto', native: 'Esperanto', flag: '🌐' },
  { code: 'et', name: 'Estonian', native: 'Eesti', flag: '🇪🇪' },
  { code: 'fi', name: 'Finnish', native: 'Suomi', flag: '🇫🇮' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'fy', name: 'Frisian', native: 'Frysk', flag: '🇳🇱' },
  { code: 'gl', name: 'Galician', native: 'Galego', flag: '🇪🇸' },
  { code: 'ka', name: 'Georgian', native: 'ქართული', flag: '🇬🇪' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'el', name: 'Greek', native: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ht', name: 'Haitian Creole', native: 'Kreyòl Ayisyen', flag: '🇭🇹' },
  { code: 'ha', name: 'Hausa', native: 'Hausa', flag: '🇳🇬' },
  { code: 'haw', name: 'Hawaiian', native: 'ʻŌlelo Hawaiʻi', flag: '🇺🇸' },
  { code: 'he', name: 'Hebrew', native: 'עברית', flag: '🇮🇱' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'hmn', name: 'Hmong', native: 'Hmoob', flag: '🇱🇦' },
  { code: 'hu', name: 'Hungarian', native: 'Magyar', flag: '🇭🇺' },
  { code: 'is', name: 'Icelandic', native: 'Íslenska', flag: '🇮🇸' },
  { code: 'ig', name: 'Igbo', native: 'Ásụ̀sụ́ Ìgbò', flag: '🇳🇬' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ga', name: 'Irish', native: 'Gaeilge', flag: '🇮🇪' },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵' },
  { code: 'jw', name: 'Javanese', native: 'Basa Jawa', flag: '🇮🇩' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'kk', name: 'Kazakh', native: 'Қазақ тілі', flag: '🇰🇿' },
  { code: 'km', name: 'Khmer', native: 'ភាសាខ្មែរ', flag: '🇰🇭' },
  { code: 'rw', name: 'Kinyarwanda', native: 'Ikinyarwanda', flag: '🇷🇼' },
  { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷' },
  { code: 'ku', name: 'Kurdish', native: 'Kurdî', flag: '🇮🇶' },
  { code: 'ky', name: 'Kyrgyz', native: 'Кыргызча', flag: '🇰🇬' },
  { code: 'lo', name: 'Lao', native: 'ພາສາລາວ', flag: '🇱🇦' },
  { code: 'la', name: 'Latin', native: 'Latīna', flag: '🇻🇦' },
  { code: 'lv', name: 'Latvian', native: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lithuanian', native: 'Lietuvių', flag: '🇱🇹' },
  { code: 'lb', name: 'Luxembourgish', native: 'Lëtzebuergesch', flag: '🇱🇺' },
  { code: 'mk', name: 'Macedonian', native: 'Македонски', flag: '🇲🇰' },
  { code: 'mg', name: 'Malagasy', native: 'Malagasy', flag: '🇲🇬' },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
  { code: 'mt', name: 'Maltese', native: 'Malti', flag: '🇲🇹' },
  { code: 'mi', name: 'Maori', native: 'Te Reo Māori', flag: '🇳🇿' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  { code: 'mn', name: 'Mongolian', native: 'Монгол', flag: '🇲🇳' },
  { code: 'my', name: 'Myanmar (Burmese)', native: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'ne', name: 'Nepali', native: 'नेपाली', flag: '🇳🇵' },
  { code: 'no', name: 'Norwegian', native: 'Norsk', flag: '🇳🇴' },
  { code: 'ny', name: 'Nyanja (Chichewa)', native: 'ChiCheŵa', flag: '🇲🇼' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'ps', name: 'Pashto', native: 'پښتو', flag: '🇦🇫' },
  { code: 'fa', name: 'Persian', native: 'فارسی', flag: '🇮🇷' },
  { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱' },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'ro', name: 'Romanian', native: 'Română', flag: '🇷🇴' },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺' },
  { code: 'sm', name: 'Samoan', native: 'Gagana Samoa', flag: '🇼🇸' },
  { code: 'gd', name: 'Scots Gaelic', native: 'Gàidhlig', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { code: 'sr', name: 'Serbian', native: 'Српски', flag: '🇷🇸' },
  { code: 'st', name: 'Sesotho', native: 'Sesotho', flag: '🇱🇸' },
  { code: 'sn', name: 'Shona', native: 'ChiShona', flag: '🇿🇼' },
  { code: 'sd', name: 'Sindhi', native: 'سنڌي', flag: '🇵🇰' },
  { code: 'si', name: 'Sinhala', native: 'සිංහල', flag: '🇱🇰' },
  { code: 'sk', name: 'Slovak', native: 'Slovenčina', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenian', native: 'Slovenščina', flag: '🇸🇮' },
  { code: 'so', name: 'Somali', native: 'Soomaali', flag: '🇸🇴' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'su', name: 'Sundanese', native: 'Basa Sunda', flag: '🇮🇩' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', flag: '🇰🇪' },
  { code: 'sv', name: 'Swedish', native: 'Svenska', flag: '🇸🇪' },
  { code: 'tl', name: 'Tagalog (Filipino)', native: 'Tagalog', flag: '🇵🇭' },
  { code: 'tg', name: 'Tajik', native: 'Тоҷикӣ', flag: '🇹🇯' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'tt', name: 'Tatar', native: 'Татар', flag: '🇷🇺' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'th', name: 'Thai', native: 'ไทย', flag: '🇹🇭' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
  { code: 'tk', name: 'Turkmen', native: 'Türkmençe', flag: '🇹🇲' },
  { code: 'uk', name: 'Ukrainian', native: 'Українська', flag: '🇺🇦' },
  { code: 'ur', name: 'Urdu', native: 'اردو', flag: '🇵🇰' },
  { code: 'ug', name: 'Uyghur', native: 'ئۇيغۇرچە', flag: '🇨🇳' },
  { code: 'uz', name: 'Uzbek', native: 'Oʻzbekcha', flag: '🇺🇿' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'cy', name: 'Welsh', native: 'Cymraeg', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { code: 'xh', name: 'Xhosa', native: 'isiXhosa', flag: '🇿🇦' },
  { code: 'yi', name: 'Yiddish', native: 'ייִדיש', flag: '🇮🇱' },
  { code: 'yo', name: 'Yoruba', native: 'Èdè Yorùbá', flag: '🇳🇬' },
  { code: 'zu', name: 'Zulu', native: 'isiZulu', flag: '🇿🇦' }
];

export const getStoredLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';
  // Check googtrans cookie
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return localStorage.getItem('3axial_language') || 'en';
};

export const applyLanguage = (langCode: string): void => {
  if (typeof window === 'undefined') return;

  // 1. Store preference
  localStorage.setItem('3axial_language', langCode);

  // 2. Clear or set Google Translate cookie
  if (langCode === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; domain=${window.location.hostname}; path=/;`;
  }

  // 3. Dispatch change event to google translate combo if available
  const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event('change'));
  } else {
    // If widget not initialized yet, reload to trigger with cookie
    window.location.reload();
  }
};
