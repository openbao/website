'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import SwitchToLight from '@/components/Navbar/DarkmodeToggle/SwitchToLightIcon'
import SwitchToDark from '@/components/Navbar/DarkmodeToggle/SwitchToDarkIcon'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div>
        <SwitchToLight />
        <SwitchToDark />
      </div>
    )
  }

  return (
    <div
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      <SwitchToLight />
      <SwitchToDark />
    </div>
  )
}
export default ThemeSwitcher
