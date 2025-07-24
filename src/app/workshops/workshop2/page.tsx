'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import '@/app/about/page.css';

export default function WorkshopPage() {
  return (
    <div className="workshop-page-wrapper">
      <div className="workshop1-page">
        <h3>Mozilla Responsible Computing Project 2nd phase begins</h3>
        <span className="date">
          Date: Jan 28th, 2025 by{' '}
          <Link href="https://kisiiuniversity.ac.ke/" target="_blank">
            Kisii University
          </Link>
        </span>

        <section className="content-cont">
          <p className='intro'>
                The faculty team from our School of Information Science and technology
                set the ball rolling with a hot intuitive workshop session that marked
                the beginning of the 2nd phase of the responsible computing challenge 
                in Kisii University.
          </p>
          <section className="rcimg abt wrk">
            <Image
              src="/images/67994201abe96.jpeg"
              alt="Kisii University"
              width={640}
              height={800}
            />
          </section>
        </section>
        <section className="content-cont second">
          <div className="workshop_content second">
            <section className="rcimg abt second">
              <div className="image-container">
                <Image
                  src="/images/547Nr9x1BkS7amVE7wMDg2i1KNG2sdhq1D7M2G2O.jpg"
                  alt="Kisii University"
                  width={640}
                  height={800}
                  className="main-image"
                />
                <div className="overlay" />
              </div>

              <p>
                Bringing all these tech minds together provided a rich ground for
                harvesting the right ideas to push forward the ethics agenda
                through advocating for responsible computing.
              </p>
            </section>
            <section className="pictorials_container">
              <h2>Pictorials of The Day</h2>
              <div className="pictorials">
                <div className="row">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <Image src="/images/67994201a3d1b.jpeg" alt="Kisii University" width={640} height={800} />
                      <Image src="/images/67994201abe96.jpeg" alt="Kisii University" width={640} height={800} />
                      <Image src="/images/67994201c4b52.jpeg" alt="Kisii University" width={640} height={800} />
                      <Image src="/images/679942019b8b2.jpeg" alt="Kisii University" width={640} height={800} />
                      <Image src="/images/6799420192c3e.jpeg" alt="Kisii University" width={640} height={800} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
            <section className="socials">
              <span>Find Us on social media</span>
              <Link
                href="https://x.com/kisiuniofficial"
                className="social-link"
                target="_blank"
              >
                <Image
                  src="/images/twitter-x-logo.png"
                  alt="Twitter"
                  width={42}
                  height={42}
                />
              </Link>
              <Link
                href="https://www.facebook.com/Kisiiuniversityofficial"
                className="social-link"
                target="_blank"
              >
                <Image
                  src="/images/facebook-seeklogo.png"
                  alt="Facebook"
                  width={42}
                  height={42}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/kisiiuniversityofficial"
                className="social-link"
                target="_blank"
              >
                <Image
                  src="/images/linkedin-black-logo.png"
                  alt="LinkedIn"
                  width={42}
                  height={42}
                />
              </Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
