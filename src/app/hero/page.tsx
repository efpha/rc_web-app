'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MoveUpRight } from 'lucide-react';

import '@/app/hero/about/page';
import '@/app/hero/insights/page';
import '@/app/home.css';
import '@/app/register/page';
import '@/app/globals.css';

import { newsItems } from '@/app/hero/data/newsData';
import Footer from '@/components/footer';
import { subscribeUser } from '@/app/utils/subscribeUser';

export default function Page() {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.querySelector('.firstName') as HTMLInputElement).value;
    const lastName = (form.querySelector('.lastName') as HTMLInputElement).value;
    const email = (form.querySelector('.email') as HTMLInputElement).value;

    try {
      const res = await subscribeUser({ firstName, lastName, email });
      setStatus(res.message);
      setShowStatus(true);
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

  const handleSubscribeRedirect = () => {
    router.push('/register');
  };

  return (
    <div className='master-container'>
      <div className="card-container master">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h1>The</h1>
              <h1>Mozilla Responsible</h1>
              <h1>Computing Challenge</h1>
              <h2>
                Advocates for ethical computing practices and their global impacts.
              </h2>
              <button
                className="content_more"
                onClick={() => router.push('/hero/insights')}
              >
                Learn More <MoveUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="card_cont">
          <div className="about_card">
            <section className="content_card shadowed">
              <div className="content">
                Mozilla Responsible Computing Challenge aims to embed ethical computing practices into academic
                curricula and professional practices. Faculty and students are being trained to navigate
                ethical concerns such as data privacy, cybersecurity, and algorithmic bias.
              </div>
              <button className="action-start" onClick={handleSubscribeRedirect}>
                Subscribe <MoveUpRight size={14} />
              </button>
            </section>
          </div>
        </div>
      </div>

      <section className="workshop">
        <div className="wrkshp_cont">
          <div className="workshop_ttle">
            Our Workshops
            <section>
              <div className="content _2nd">
                Through workshops, academic programs, and industry collaborations, the University is shaping
                a new generation of tech professionals who are not only skilled in technology but also aware
                of its societal and environmental implications.
              </div>
            </section>
          </div>

          <section className="news-section">
            <div className="news-grid">
              {newsItems.filter(Boolean).map((item, index) => (
                <div className="news-card" key={index}>
                  <Link className="news-img-wrapper" href={item.link}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={220}
                      className="news-img"
                    />
                  </Link>
                  <div className="news-content">
                    <span className="date">{item.date}</span>
                    <p className="news-tag">{item.tag}</p>
                    <h4 className="news-title">{item.title}</h4>
                    <Link className="viewlink" href={item.link} target="_blank">
                      View project on University Website <MoveUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <button className="more_wrksp" onClick={() => router.push('/hero/workshops')}>
          More Workshops <MoveUpRight size={14} />
        </button>
      </section>

      <div className="subscribe-container">
        <div className="subscribe-content">
          <p className="subscribe-intro">STAY IN THE LOOP</p>
          <h2 className="subscribe-heading">Subscribe</h2>
          <p className="subscribe-text">
            Join our mailing list for insights, workshop and updates
            <br className="desktop-break" />
            appertaining Responsible Computing.
          </p>

          <section className="subscribe-form-container">
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="input-section">
                <input type="text" placeholder="First Name" className="input-field firstName" required />
                <input type="text" placeholder="Last Name" className="input-field lastName" required />
                <input type="email" placeholder="Email" className="input-field email" required />
              </div>
              <p className="signup-info">
                By subscribing you consent to our <a href='/privacy-policy'>Privacy Policy</a>
              </p>
              <button type="submit" className="subscribe-button">Subscribe</button>
              {showStatus && <p className='status'>{status}</p>}
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
