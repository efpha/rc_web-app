'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

let VANTA;

export default function VantaAbout({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadVanta = async () => {
      const vantaNet = await import('vanta/net'); // You can replace with waves, fog, etc.
      if (!vantaEffect) {
        VANTA = vantaNet.default;
        setVantaEffect(
          VANTA({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff6600,
            backgroundColor: 0x111111, // Optional dark background
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: '100%', minHeight: '40vh', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
