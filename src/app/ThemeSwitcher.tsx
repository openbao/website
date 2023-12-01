"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), []);
  if(!mounted) {
    return null
  }

  return (
    <div>
      The Current Theme Is: {theme}
      <button onClick={() => setTheme('light')}>Set Light Theme</button>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>


      <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
            Toggle Mode
        </button>
    </div>
  )
  };
  export default ThemeSwitcher;