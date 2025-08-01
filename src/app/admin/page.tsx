'use client';

import { useState } from 'react';
import './page.css';

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/adminLogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Login failed');
        return;
      }

      setLoggedIn(true);
      setMessage('');
    } catch{
      setMessage('Something went wrong');
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: emailSubject, content: emailContent }),
      });

      const data = await res.json();
      setMessage(data.message || 'Emails sent successfully.');
    } catch{
      setMessage('Failed to send emails.');
    }
  };

  return (
    <div className="admin-container">
      {!loggedIn ? (
        <form className="admin-form" onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={loginForm.username}
            onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
          {message && <p className="status">{message}</p>}
        </form>
      ) : (
        <form className="admin-form" onSubmit={handleSendEmail}>
          <h2>Send Email to Subscribers</h2>
          <input
            type="text"
            placeholder="Subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            required
          />
          <button type="submit">Send Email</button>
          {message && <p className="status">{message}</p>}
        </form>
      )}
    </div>
  );
}
