'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/home.css';
import '@/app/hero/about/page.css';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { MoveUpRight } from 'lucide-react';


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

export default function About() {
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
            backgroundColor: 0x1f456e,
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
    <>
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
      <div className="about abt" id="about">
        <section className="moreksu abt">
          {/* Logo and Label */}
          <span className="ksu abt">
            <Link href="https://kisiiuniversity.ac.ke/">
              <span className="image_cont">
                <Image
                src='/images/ksu.png'
                className='ksu_lg'
                alt='ksu logo'
                width={1020}
                height={600}
                />
                <label className='ksu_labl' htmlFor="ksu_lg">Kisii University</label>
              </span>
            </Link>
            
          </span>

          {/* Left border */}
          <span className="border abt wrk">
          </span>

          {/* Section title */}
          <span className="abtttle abt">
              <div>WHO WE</div>
              <div>ARE</div>
          </span>
        </section>
        <div className="card_cont abt">
          <section className="wrapper-card">
            <section className="rcimg abt">
                    <Image 
                      src="/images/prj5.jpeg"
                      alt="Kisii University"
                      width={0}
                      height={0}
                      sizes="100vw"
                      // style={{ width: '150%', height: 'auto' }}
                    />

            </section>
              <div className="about_card abt">
                <section className="content_card noshadow">
                    <div className="rctgl abt"></div>
                    <div className="content abt">
                        We <Link href="https://kisiiuniversity.ac.ke/">Kisii University <MoveUpRight size={16} /></Link> led by Professor F. Mzee in partnership with the Mozilla Foundation are joining hands to
                        empower a new wave of graduands with ethical computing practices through 
                        Responsible Computing Challenge. 
                    </div>                    
                </section>
            </div>
          </section>

          {/* <button className="learn-more">Join the challenge</button> */}
          <section className="socials">
          </section>
        </div>
      </div>
    </>
  );
}
