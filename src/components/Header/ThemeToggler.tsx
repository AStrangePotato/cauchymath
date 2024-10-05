import { useTheme } from "next-themes";
import { Moon, Sun } from 'react-feather';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button aria-label='theme toggler'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      <Moon className="w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6"/>
      <Sun className="hidden w-5 h-5 dark:block md:h-6 md:w-6"/>
    </button>
  );
};

export default ThemeToggler;
