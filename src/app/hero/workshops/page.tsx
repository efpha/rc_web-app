'use client';

import '@/app/hero/workshops/page.css';
import '@/app/hero/about/page.css';
import '@/app/hero/workshops/second-phase-begin/page.css';
import '@/app/hero/workshops/workshop1/page';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { newsItems } from '@/app/hero/data/newsData';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

type VantaEffectInstance = {
  destroy: () => void;
};

declare global {
  interface Window {
    VANTA?: {
      NET: (options: {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
        backgroundColor: number;
        points: number;
        spacing: number;
      }) => VantaEffectInstance;
    };
  }
}

export default function Workshops() {
  const [vantaEffect, setVantaEffect] = useState<VantaEffectInstance | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !vantaEffect &&
        typeof window !== 'undefined' &&
        window.VANTA?.NET &&
        vantaRef.current
      ) {
        setVantaEffect(
          window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            backgroundColor: 0x1d0957,
            points: 14.0,
            spacing: 20.0,
          })
        );
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="workshops">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="beforeInteractive"
      />
      <div
        ref={vantaRef}
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <section className="moreksu abt wrk">
        <span className="ksu abt">
          <Link href="https://kisiiuniversity.ac.ke/">
            <span className="image_cont">
              <Image
                src="/images/ksu.png"
                className="ksu_lg"
                alt="ksu logo"
                width={1020}
                height={600}
              />
              <label className="ksu_labl" htmlFor="ksu_lg">
                Kisii University
              </label>
            </span>
          </Link>
        </span>
        <span className="border wrk"></span>
        <span className="abtttle abt wrk">
          <div>RESPONSIBLE COMPUTING</div>
          <div>WORKSHOPS</div>
        </span>
      </section>

      <section className="workshops-header">
        <div className="content abt wrk">
          Join our workshops to learn more about ethical computing practices and their impacts.
        </div>
      </section>

      <section className="news-section">
        <div className="news-grid">
          {newsItems.filter(Boolean).map((item, index) => (
            <div className="news-card" key={index}>
              <Link className="news-img-wrapper" href={item.link}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={220}
                  className="news-img"
                />
              </Link>
              <div className="news-content">
                <span className="date">
                  {item.date}
                </span>
                <p className="news-tag">{item.tag}</p>
                <h4 className="news-title">{item.title}</h4>
                <Link className="viewlink" href={item.link} target="_blank">
                  View project on University Website  <MoveUpRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </section>
    </div>
  );
}
