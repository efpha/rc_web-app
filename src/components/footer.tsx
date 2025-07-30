'use client';

import Link from 'next/link';
import '@/components/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; { new Date().getFullYear()} Responsible Computing Project. All rights reserved.
        </p>
        <Link href="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
