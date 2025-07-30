'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import '@/app/register/page.css';
import '@/app/globals.css';

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

export default function Register() {
  const [notify, setNotify] = useState(true);
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
      <div className="signup-container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="signup-intro">
          By subscribing you accept to receive our emails on Responsible Computing insights and updates on upcoming workshops.
        </p>
        <h2 className="signup-title">Register</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name<span className='star'>*</span></label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name <span className='star'>*</span></label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email <span className='star'>*</span></label>
            <input
              type="email"
              id="email"
              placeholder="e.g. johndoe@example.com"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
