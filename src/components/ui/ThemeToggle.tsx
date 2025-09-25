
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 highcontrast:bg-black highcontrast:border-2 highcontrast:border-white"
      aria-label={`Mudar tema. Tema atual: ${theme}`}
    >
      {theme === 'light' && '☀️'}
      {theme === 'high-contrast' && '⚫'}
    </button>
  );
};