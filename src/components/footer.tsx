'use client';

import Link from 'next/link';
import '@/components/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mozilla Responsible Computing Project —
          A research initiative under{' '}
          <a
            href="https://kisiiuniversity.ac.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Kisii University
          </a>
        </p>
        <Link href="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
