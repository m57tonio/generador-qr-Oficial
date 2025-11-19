import { useTranslation } from "react-i18next";
import { Code2, Globe, User, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useLanguage } from "../../hooks/useLanguage";

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header = ({ onLoginClick }: HeaderProps) => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {t("header.title")}
            </span>
          </div>

          {/* Right side - Theme, Language and Login */}
          <div className="flex items-center gap-4">
            {/* Toggle de modo oscuro */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Selector de idioma */}
            <div className="relative isolate">
              <select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 pr-8 h-10 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer flex items-center"
                style={{
                  isolation: "isolate",
                  contain: "layout style paint",
                }}
              >
                <option value="es">🇪🇸 Español</option>
                <option value="en">🇺🇸 English</option>
                <option value="pt">🇵🇹 Português</option>
              </select>
              <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500 pointer-events-none z-10" />
            </div>

            {/* Botón de inicio de sesión */}
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{t("header.login")}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

