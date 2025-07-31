'use client';

import React, { useState, useEffect } from 'react';
import '@/app/register/page.css';
import '@/app/globals.css';
import Link from 'next/link';
import { subscribeUser } from '@/app/utils/subscribeUser';

export default function Register() {
  const [status, setStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.querySelector('#firstName') as HTMLInputElement).value;
    const lastName = (form.querySelector('#lastName') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;

    try {
      const res = await subscribeUser({ firstName, lastName, email });
      setStatus(res.message);
      setShowStatus(true);
      form.reset(); // Optional: Clear form after success
    } catch (err: unknown) {
      const error = err as { message: string };
      setStatus(error.message || 'An unexpected error occurred.');
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
    <div className="signup-container">
      <p className="signup-intro">
        By subscribing you consent to our <Link href='/privacy-policy'>Privacy Policy</Link>
      </p>
      <h2 className="signup-title">Register</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
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

        {showStatus && <p className='status'>{status}</p>}
      </form>
    </div>
  );
}
