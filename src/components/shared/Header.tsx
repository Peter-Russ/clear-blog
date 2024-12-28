import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-black shadow-md'>
      <nav>
        <Link href='/blog'>
          Blog
        </Link>
      </nav>
    </header>
  )
}
