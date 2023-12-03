"use client"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import SwitchToLight from "@/components/SwitchToLightIcon";
import SwitchToDark from "@/components/SwitchToDarkIcon";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), []);
<<<<<<< HEAD

  if(!mounted) {
    return (
      <div>
        <SwitchToLight />
        <SwitchToDark />
      </div>
    )
  }

=======
  if(!mounted) return null
  
>>>>>>> temp
  return (
    <div onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
      <SwitchToLight />
      <SwitchToDark />
    </div>
  )
  };
  export default ThemeSwitcher;