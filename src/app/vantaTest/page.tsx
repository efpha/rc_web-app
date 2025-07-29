'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

type VantaEffectInstance = {
  destroy: () => void;
};

declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        backgroundColor: number;
        color1: number;
        color2: number;
        birdSize: number;
        quantity: number;
      }) => VantaEffectInstance;
    };
  }
}

export default function VantaBirdsBackground() {
  const [vantaEffect, setVantaEffect] = useState<VantaEffectInstance | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !vantaEffect &&
        typeof window !== 'undefined' &&
        window.VANTA?.BIRDS &&
        vantaRef.current
      ) {
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
