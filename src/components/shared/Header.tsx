import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='/blog'>
          Blog
        </Link>
      </nav>
    </header>
  )
}
