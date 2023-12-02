import React from 'react'

export default function NavbarItems() {

  interface NavbarItem {
    name: string
    link: string
  }

  const navbarItems: NavbarItem[] = [
    { name: 'Manifesto', link: '/' },
    { name: 'Supporters', link: '/' },
    { name: 'FAQs', link: '/' },
    { name: 'Roadmap', link: '/' },
    { name: 'Docs', link: '/' },
  ]
  
  return (
    <ul>
      {
        navbarItems.map((item: NavbarItem) => (
          <li>{item.name}</li>
        ))
      }
    </ul>
  )
}