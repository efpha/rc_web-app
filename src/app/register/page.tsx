'use client';

import React, { useState } from 'react';
import '@/app/register/page.css';
import '@/app/globals.css';

export default function register() {
  const [notify, setNotify] = useState(false);
    return (
    <div className="signup-container">
      <p className="signup-intro">
        Get notified about upcoming events and workshops by registering below.
      </p>
      <h2 className="signup-title">Sign Up</h2>
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
          <label htmlFor="email">Registration Number <span className='star'>*</span></label>
          <input
            type="text"
            id="registrationNumber"
            placeholder="e.g. inxx/xxxx/xx"
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

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="notify"
            checked={notify}
            onChange={(e) => setNotify(e.target.checked)}
          />
          <label htmlFor="notify" className="checkbox-label">
            Receive notification on up-coming events
          </label>
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}
