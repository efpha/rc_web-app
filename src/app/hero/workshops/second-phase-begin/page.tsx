'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import '@/app/hero/about/page.css';
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

export default function page() {
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
      <div className="workshop-page-wrapper">
        <div className="workshop1-page">
          <h3>Mozilla Responsible Computing Project 2nd phase begins</h3>
          <span className="datewrapper">
            <div className="date">
                Date: Jan 28th, 2025 by
            </div>
              <Link href="https://kisiiuniversity.ac.ke/" target="_blank">
                Kisii University
            </Link>
          </span>
          <span className="date">
            <Link href="https://kisiiuniversity.ac.ke/" target="_blank">
              View project phase on university website
            </Link>
          </span>

          <section className="content-cont">
            <p className='intro'>
                  The faculty team from our School of Information Science and technology
                  set the ball rolling with a hot intuitive workshop session that marked
                  the beginning of the 2nd phase of the responsible computing challenge 
                  in Kisii University.
            </p>
            <section className="rcimg abt wrk">
              <Image
                src="/images/67994201abe96.jpeg"
                alt="Kisii University"
                width={640}
                height={800}
              />
            </section>
          </section>
          <section className="content-cont second">
            <div className="workshop_content second">
              <section className="rcimg abt second">
                <p>
                  Bringing all these tech minds together provided a rich ground for
                  harvesting the right ideas to push forward the ethics agenda
                  through advocating for responsible computing.
                </p>
                <div className="image-container">
                  <Image
                    src="/images/547Nr9x1BkS7amVE7wMDg2i1KNG2sdhq1D7M2G2O.jpg"
                    alt="Kisii University"
                    width={640}
                    height={800}
                    className="main-image"
                  />
                  <div className="overlay" />
                </div>

                
              </section>
              <section className="pictorials_container">
                <h2>Pictorials of The Day</h2>
                <div className="pictorials">
                  <div className="scrolling-track">
                    {[...Array(2)].map((_, i) => (
                      <React.Fragment key={i}>
                        <Image
                          src="/images/67994201a3d1b.jpeg"
                          alt="Kisii University"
                          width={640}
                          height={800}
                          className="scrolling-img"
                        />
                        <Image
                          src="/images/67994201abe96.jpeg"
                          alt="Kisii University"
                          width={640}
                          height={800}
                          className="scrolling-img"
                        />
                        <Image
                          src="/images/67994201c4b52.jpeg"
                          alt="Kisii University"
                          width={640}
                          height={800}
                          className="scrolling-img"
                        />
                        <Image
                          src="/images/679942019b8b2.jpeg"
                          alt="Kisii University"
                          width={640}
                          height={800}
                          className="scrolling-img"
                        />
                        <Image
                          src="/images/6799420192c3e.jpeg"
                          alt="Kisii University"
                          width={640}
                          height={800}
                          className="scrolling-img"
                        />
                      </React.Fragment>
                    ))}

                  </div>
                </div>
              </section>
              <section className="socials">
                <span>Find Us on social media</span>
                <Link
                  href="https://x.com/kisiuniofficial"
                  className="social-link"
                  target="_blank"
                >
                  <Image
                    src="/images/twitter-x-logo.png"
                    alt="Twitter"
                    width={42}
                    height={42}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/Kisiiuniversityofficial"
                  className="social-link"
                  target="_blank"
                >
                  <Image
                    src="/images/facebook-seeklogo.png"
                    alt="Facebook"
                    width={42}
                    height={42}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/kisiiuniversityofficial"
                  className="social-link"
                  target="_blank"
                >
                  <Image
                    src="/images/linkedin-black-logo.png"
                    alt="LinkedIn"
                    width={42}
                    height={42}
                  />
                </Link>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
