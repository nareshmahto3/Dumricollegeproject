import { useState } from 'react';
import { Globe, ChevronDown, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, languages } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'portal' | 'simple' | 'compact';
}

export function LanguageSelector({ variant = 'navbar' }: LanguageSelectorProps) {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: typeof languages[0]) => {
    setLanguage(language);
    setIsOpen(false);
  };

  // Compact variant (matching the attached image)
  if (variant === 'compact') {
    // Get up to 2 other popular languages to display
    const otherLanguages = languages.filter(lang => lang.code !== currentLanguage.code).slice(0, 2);
    
    return (
      <div className="relative">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-[#1e3a5f] rounded-lg border border-slate-700/50">
          {/* Icon */}
          <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
          
          {/* Label - Hidden on very small screens */}
          <span className="hidden sm:inline text-sm text-white font-medium">Language:</span>
          
          {/* Current Language Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 sm:px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded transition-colors flex-shrink-0"
          >
            {currentLanguage.name}
          </button>
          
          {/* Quick Language Switches - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            {otherLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
          
          {/* More languages indicator on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Dropdown for all languages */}
        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-64 bg-[#1e3a5f] rounded-lg shadow-xl border border-slate-700/50 z-20 overflow-hidden"
              >
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-orange-400 uppercase tracking-wide border-b border-slate-700/50 mb-1">
                    Select Language
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors ${
                          currentLanguage.code === language.code
                            ? 'bg-orange-500 text-white font-semibold'
                            : 'text-slate-200 hover:bg-slate-700/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{language.name}</span>
                          <span className="text-xs opacity-80">
                            {language.nativeName}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Simple variant (matching the attached image more closely)
  if (variant === 'simple') {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full min-w-[200px] px-4 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-700 text-left flex items-center justify-between hover:border-slate-400 transition-colors"
        >
          <span>{currentLanguage.name === 'English' ? 'Select Language' : currentLanguage.name}</span>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-300 rounded shadow-lg z-20 overflow-hidden"
              >
                <button
                  disabled
                  className="w-full px-4 py-2.5 text-sm text-left bg-[#2563EB] text-white font-medium cursor-default"
                >
                  Select Language
                </button>
                <div className="max-h-60 overflow-y-auto">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full px-4 py-2.5 text-sm text-left transition-colors ${
                        currentLanguage.code === language.code
                          ? 'bg-slate-100 text-slate-900 font-medium'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Portal variant (for admin/teacher/student portals)
  if (variant === 'portal') {
    return (
      <div className="relative hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <Globe className="w-4 h-4 text-slate-600" />
          <span className="text-sm text-slate-700 font-medium">
            {currentLanguage.name}
          </span>
          <ChevronDown className="w-3 h-3 text-slate-500" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-20 overflow-hidden"
              >
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Select Language
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors ${
                          currentLanguage.code === language.code
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{language.name}</span>
                          <span className="text-xs opacity-80">
                            {language.nativeName}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Navbar variant (for public-facing pages)
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg transition-colors border border-amber-500/20"
      >
        <Globe className="w-4 h-4 text-amber-400" />
        <span className="text-sm text-amber-200 font-medium hidden sm:inline">
          {currentLanguage.name}
        </span>
        <ChevronDown className="w-3 h-3 text-amber-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-12 w-56 bg-slate-800 rounded-lg shadow-xl border border-amber-500/30 z-20 overflow-hidden"
            >
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Select Language
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors ${
                        currentLanguage.code === language.code
                          ? 'bg-amber-500 text-slate-900 font-semibold'
                          : 'text-amber-100 hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{language.name}</span>
                        <span className="text-xs opacity-80">
                          {language.nativeName}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}