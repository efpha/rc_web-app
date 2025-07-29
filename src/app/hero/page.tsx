'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link'
import '@/app/hero/about/page'
import '@/app/home.css'
import '@/app/register/page';
import { MoveUpRight } from 'lucide-react';
import '@/app/globals.css'
import { useRouter } from 'next/navigation';
import { newsItems } from '@/app/hero/data/newsData';

export default function Home() {
  const router = useRouter();
  const [vantaEffect, setVantaEffect] = useState<any>(null);
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

  const handleSubscribe = () => {
    router.push('/register');
  };

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
        className="home"
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="card-container master">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h1>The</h1>
              <h1>Mozilla Responsible</h1>
              <h1>Computing Challenge</h1>
              <h2>
                Championing for ethical computing practices and their impacts to
                the environment and the society
              </h2>
              <button className="action-start" onClick={handleSubscribe}>Get started <MoveUpRight size={14}/></button>
            </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="card_cont">
          <div className="about_card">
            <section className="content_card shadowed">
              <div className="content">
                Mozilla Responsible Computing Challenge aims to embed ethical computing practices into academic
                curricula and professional practices. Faculty and students are being trained to navigate
                ethical concerns such as data privacy, cybersecurity, and algorithmic bias.
              </div>
                <button className='content_more'
                  onClick={() => router.push('/hero/about')}
                >Learn More
                  <MoveUpRight size={14}/>
                </button>
            </section>
        <div/>      
      </div>
    </div>
  </div>

      {/* Workshop section */}
      <section className="workshop">
            <div className="wrkshp_cont">
              <div className="workshop_ttle">
                Our Workshops
                <section>
                  <div className="content _2nd">
                    Through workshops, academic programs, and industry collaborations, the University is shaping
                    a new generation of tech professionals who are not only skilled in technology but also aware
                    of its societal and environmental implications.
                  </div>
                </section>
              </div>
              <section className="news-section">
        <div className="news-grid">
          {/* Tryna get object from workshop page */}

          {
          newsItems.filter(Boolean).map((item, index) => (
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
        <button className="more_wrksp"
        onClick={() => router.push('/hero/workshops')}
        >More Workshops
        <MoveUpRight size={14}/>
        </button>
      </section>
      <div className="partn">
        <div className="roll_cont">
            <span className='roll'>

              <span className="image_cont ksu">
                <Image
                  src='/images/ksu.png'
                  className='ksu_lg'
                  alt='ksu logo'
                  width={1020}
                  height={600}
                />
                <label className='ksu_labl' htmlFor="ksu_lg">Kisii University</label>
              </span>
              
              <span className="image_cont">
                  <Image
                    src='/images/mozilla.png'
                    className='mozilla_lg'
                    alt='mozilla foundation logo'
                    width={1020}
                    height={600}
                  />
                  <label className='moz_labl' htmlFor="mozilla_lg">Mozilla Foundation</label>
              </span>
          </span>
        </div>
      </div>
    </>
  );
}