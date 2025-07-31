'use client';

import React, { useState, useEffect } from 'react';
import '@/app/unsubscribe/page.css';
import '@/app/globals.css';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Unsubscribe() {
  const [status, setStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName }),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (_) {
      setStatus('An error occurred. Please try again later.');
    } finally {
      setShowStatus(true);
    }
  };

  useEffect(() => {
    if (showStatus) {
      const timer = setTimeout(() => {
        setShowStatus(false);
        setStatus('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showStatus]);

  return (
    <div className="unsubscribe-container">
      <p className="unsubscribe-intro">
        We&apos;re sorry to see you go. You&apos;re always welcome back.
      </p>
      <h2 className="unsubscribe-title">Unsubscribe</h2>

      <form className="unsubscribe-form" onSubmit={handleUnsubscribe}>
        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="star">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email Address <span className="star">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="unsubscribe-button">
          Confirm Unsubscribe
        </button>

        {showStatus && <p className="status">{status}</p>}
      </form>

      <p className="unsubscribe-footer">
        Want to resubscribe? <Link href="/register">Click here</Link>
      </p>
    </div>
  );
}
