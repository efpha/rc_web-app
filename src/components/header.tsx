'use client';
import { useState } from 'react';
import { Logs, X, MoveUpRight} from 'lucide-react';
import Link from 'next/link';
import '@/components/header.css';
import '@/app/hero/about/page'
import '@/app/hero/workshops/page'
import '@/app/hero/page'
import '@/app/register/page';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="nav-bar">
      <div className="lgo-txt">
        <Link href="/">
          <div>RC Challenge</div>
        </Link>
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
        <Link href="/hero">Home</Link>
        <Link href="/hero/about">About</Link>
        <Link href="/hero/insights">Insights</Link>
        <Link href="/hero/workshops">Workshops</Link>
        <Link href="/hero/upcoming-events">Upcoming Events</Link>
      </nav>

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
              <Link href="/hero" className='link' onClick={() => setSidebarOpen(false)}>Home<MoveUpRight size={16}/></Link>
              <Link href="/hero/about" className='link' onClick={() => setSidebarOpen(false)}>About <MoveUpRight size={16}/></Link>
              <Link href="/hero/insights" className='link' onClick={() => setSidebarOpen(false)}>Insights <MoveUpRight size={16}/></Link>
              <Link href="/hero/workshops" className='link' onClick={() => setSidebarOpen(false)}>Workshops <MoveUpRight size={16}/></Link>
              <Link href="/hero/upcoming-events" className='link' onClick={() => setSidebarOpen(false)}>Upcoming Events <MoveUpRight size={16}/></Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
