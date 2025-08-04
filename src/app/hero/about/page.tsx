'use client';
import Image from 'next/image';
import '@/app/hero/about/page.css';
import { MoveUpRight, Quote } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';
import router from 'next/router';


export default function About() {
  return (
    <main className="about-container">
      <section className="hero-section">
        <Image
          src="/images/0iV9LmPDn0.jpg"
          alt="Responsible Computing Banner"
          width={1600}
          height={600}
          className="hero-image"
        />
        <div className="hero-text">
          <h1>The Responsible Computing Project</h1>
          <p>
            A research initiative by <strong><Link className='ksu-link' href="https://kisiiuniversity.ac.ke/">Kisii University <MoveUpRight size={16} />
            </Link>{' '}</strong>in partnership with the <strong>Mozilla Foundation</strong>, led by <strong>Professor F. Mzee</strong>. We explore the principles of <strong>Responsible Computing</strong> to foster ethical, inclusive, and sustainable digital solutions.
          </p>
          <button
              className="content_more"
              onClick={() => router.push('/hero/insights')}
            >
              What's Responsible Computing <MoveUpRight size={14} />
          </button>
        </div>
      </section>

      <section className="content-section mission">
        <h2>Our Mission</h2>
        <p>
        Today, those creating new technologies wield tremendous power. The technologies they create influence 
        everything from which news stories billions of people read to what personal data companies collect. 
        While many of these technologies have facilitated new forms of connection and creativity,
        the benefits and harms of these technologies have not been distributed equally.
        Thus our mission is to advocate for creation of technologies that uphold human dignity, 
        environmental stewardship and equitable innovation.
        </p>
        <section className="image-strip">
        <Image
          src="/images/ksu.png"
          alt="Kisii University Logo"
          width={160}
          height={160}
        />
        <Image
          src="/images/mozilla.png"
          alt="Mozilla Foundation Logo"
          width={160}
          height={160}
        />
      </section>
      </section>

      

      <section className="content-section">
        <h2>Principal Investigator</h2>

        <div className="lead-profile">
          <Image
            src="/images/1544039727590.jpg"
            alt="Professor F. Mzee"
            width={200}
            height={200}
            className="lead-image"
          />

          <div>
            <h3 className='principal-investigator'>Prof F. Mzee Awour, </h3>
            <h3 className='principal-investigator'>Ph.D, Ph.D, MSc., MTech, BSc. &#40;Hons.&#41;</h3>
            <p className='about-PI'>
              A renowned advocate of ethical computing and the principal investigator of this project. Prof. Mzee leads a team of dedicated researchers and students toward a future where computing is not only powerful but also principled.
            </p>
          </div>

        </div>
      </section>

      <section className="content-section final-thought">
        <h2 className='quotes'><Quote /></h2>
        <p>
          Responsible Computing isn&rsquo;t a destination. It&rsquo;s a journey of reflection, growth,
          and meaningful change. Let&rsquo;s code the future <strong>responsibly</strong>.
        </p>
      </section>
      
      <Footer />
    </main>
  );
}
