
import { CircleCheck, CircleX } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-black"
      aria-label={`Mudar tema. Tema atual: ${theme}`}
    >
      {theme === 'light' && <CircleX size={22} color="#ffffff" strokeWidth={1} />}
      {theme === 'high-contrast' && <CircleCheck size={22} color="#ffffff" strokeWidth={1} />}
    </button>
  );
};