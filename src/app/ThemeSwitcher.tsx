"use client"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), []);

  if(!mounted) {
    return (
      <div>
        <Icon icon={faMoon} style={{ visibility: "hidden" }}/>
      </div>
    )
  }

  return (
    <div onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
      { theme === 'light' ? <Icon icon={faMoon} /> : <Icon icon={faSun} /> }
    </div>
  )
  };
  export default ThemeSwitcher;


