'use client';
import { useState } from 'react';
import { Logs, X, MoveUpRight} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';
import Image from 'next/image';

import '@/components/header.css';
import '@/app/hero/about/page'
import '@/app/hero/workshops/page'
import '@/app/hero/page'
import '@/app/register/page';
import '@/app/hero/media/page'

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className='top-navbar'>
        <div className="top-navbar-container">

          {/*Social media icons*/}
          <div className="socials-media">
            <Link href='https://www.facebook.com/Kisiiuniversityofficial/'><FontAwesomeIcon icon={faFacebook} size="2x" color="#1f456e" /></Link>
            <Link href='https://x.com/kisiuniofficial'><FontAwesomeIcon icon={faXTwitter} size="2x" color="#1f456e" /></Link>
            <Link href='https://www.linkedin.com/company/kisiiuniversityofficial'><FontAwesomeIcon icon={faLinkedin} size="2x" color="#1f456e" /></Link>
            <Link href='https://www.instagram.com/kisiiuniversityofficial/'><FontAwesomeIcon icon={faInstagram} size="2x" color="#1f456e" /></Link>
          </div>

          {/*University name and logo*/}
          <div className="ksu">
            <Link href='https://kisiiuniversity.ac.ke/'>
              <p>Kisii University</p>
                <div className="ksu-logo">
                  <Image
                      src="/images/ksu.png"
                      alt="Kisii University Logo"
                      width={160}
                      height={160}
                    />
                </div>
            </Link>          
          </div>


        </div>
        
      </header>
        <header className="nav-bar">
          <div className="lgo-txt">
            <Link href="/">
              <div>Responsible Computing Challenge</div>
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
            <Link href="/hero/media">Media</Link>
          </nav>

          {/* Sidebar overlay for mobile */}
          {sidebarOpen && (
            <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
              <aside className="sidebar" onClick={e => e.stopPropagation()}>
                <section className='side-wrapper'>
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
                      <Link href="/hero/media" className='link' onClick={() => setSidebarOpen(false)}>Media <MoveUpRight size={16}/></Link>

                    </nav>
                </section>
              </aside>
            </div>
          )}
      </header>
    </>

  );
}
