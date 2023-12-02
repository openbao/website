"use client"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), []);
  if(!mounted) {
    return null
  }

  return (
    <div onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
      { theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} /> }
    </div>
  )
  };
  export default ThemeSwitcher;


