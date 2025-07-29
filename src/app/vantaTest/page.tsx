'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA?: any;
  }
}

export default function VantaBirdsBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      if (
        !vantaEffect &&
        typeof window !== 'undefined' &&
        window.VANTA &&
        window.VANTA.BIRDS &&
        vantaRef.current
      ) {
        // @ts-ignore
        setVantaEffect(
          window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            backgroundColor: 0x1f456e,
            color1: 0xff9900,
            color2: 0x00ffff,
            birdSize: 1.5,
            quantity: 3.0,
          })
        );
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
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
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a href="/hero">Home</a>
        </div>
      </div>
    </>
  );
}
