'use client';

import Link from 'next/link';
import '@/components/header.css'

export default function Header() {
  return (
    <header className="nav-bar">
      
      <div className="lgo-txt">
        <Link href="/">Logo</Link>
      </div>

      <nav className="links">
        <Link href="/Lorem" className="hover:text-blue-600">Lorem</Link>
        <Link href="/Lorem" className="hover:text-blue-600">Lorem</Link>
        <Link href="/Lorem" className="hover:text-blue-600">Lorem</Link>
        <Link href="/Lorem" className="hover:text-blue-600">Lorem</Link>
      </nav>

      <div className="btn-cont">
        <button type='submit'>Login</button>
        <button type='submit'>Sign Up</button>
      </div>
    </header>
  );
}
