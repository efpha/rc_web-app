'use client';
import { useState } from 'react';
import { Logs, X, MoveUpRight} from 'lucide-react';
import Link from 'next/link';
import '@/components/header.css';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="nav-bar">
      <div className="lgo-txt">
        <Link href="/">Logo</Link>
      </div>

      {/* Hamburger icon for mobile */}
      <button
        className="menu-icon"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <Logs />
      </button>

      {/* Desktop links */}
      <nav className="links">
        <Link href="/about">About</Link>
        <Link href="/workshops">Workshops</Link>
        <Link href="/lorem">Lorem</Link>
        <Link href="/lorem">Lorem</Link>
      </nav>

      <div className="btn-cont">
        <button type="submit">Login</button>
        <button type="submit">Sign Up</button>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
          <aside className="sidebar" onClick={e => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
            <nav>
              <Link href="/about" className='link' onClick={() => setSidebarOpen(false)}>About <MoveUpRight size={16}/></Link>
              <Link href="/workshops" className='link' onClick={() => setSidebarOpen(false)}>Workshops <MoveUpRight size={16}/></Link>
              <Link href="/lorem" className='link' onClick={() => setSidebarOpen(false)}>Lorem <MoveUpRight size={16}/></Link>
              <Link href="/lorem" className='link' onClick={() => setSidebarOpen(false)}>Lorem <MoveUpRight size={16}/></Link>
              <div className="sidebar-btns">
                <button type="submit">Login</button>
                <button type="submit">Sign Up</button>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
