'use client';

import { useEffect, useState } from 'react';
import './page.css';

type Subscriber = {
  id: number;
  name: string;
  email: string;
  subscribed_at: string;
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

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
      fetchSubscribers();
    } catch {
      setMessage('Something went wrong');
    }
  };

  const fetchSubscribers = async () => {
    try {
      const res = await fetch('/api/subscribers');
      const data = await res.json();
      setSubscribers(data.subscribers || []);
    } catch {
      setMessage('Failed to load subscribers.');
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
    } catch {
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
        <>
          <div className="subscriber-list">
            <h2>Subscribed Users</h2>
            {subscribers.length === 0 ? (
              <p className="no-subscribers">No subscribers found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subscribed At</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr key={subscriber.id}>
                      <td>{index + 1}</td>
                      <td>{subscriber.name}</td>
                      <td>{subscriber.email}</td>
                      <td>{new Date(subscriber.subscribed_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <form className="admin-form" onSubmit={handleSendEmail}>
            <h2>Send Email</h2>
            <input
              type="text"
              placeholder="Email Subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Write your email content here..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              required
            />
            <button type="submit">Send Email</button>
            {message && <p className="status">{message}</p>}
          </form>
        </>
      )}
    </div>
  );
}
