// app/insights/page.tsx
'use client';

import './page.css';
import { useState } from 'react';
import { subscribeUser } from '@/app/utils/subscribeUser';
import Footer from '@/components/footer';

export default function InsightsPage() {
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
  return (

    <>
      <main className="landing-bg">
      <div className="insights-container">
        <section className="intro-hero">
          <div className="intro-overlay">
            <div className="intro-text">
              <h1>Responsible Computing Insights</h1>
              <p className="tagline">Deepening Our Understanding of Responsible Computing</p>
            </div>
          </div>
        </section>

        <br />
        <section className="insights-section">
          <h2>What is Responsible Computing?</h2>
          <p>
            {/* Responsible Computing is the conscious and ethical use of technology, data, 
            and computing power to benefit individuals, communities, and the planet. 
            It&rsquo;s not just about writing code or building systems. It&rsquo;s about building
            responsibility into every decision, from design to deployment.

            In today&rsquo;s rapidly advancing digital world, computing is everywhere from
            mobile apps and AI to cloud infrastructure. While these innovations offer great 
            opportunities, they also raise important questions. Responsible Computing embeds 
            ethics, accountability, and sustainability into the very fabric of computing. */}

            In an era defined by transformative digital acceleration, where technology governs
            everything from business operations to societal infrastructure, the stakes have never
            been higher. As enterprises rush to harness the power of artificial intelligence for 
            efficiency and profit, a parallel discourse emerges; one that interrogates the deeper 
            implications of innovation without conscience.

            Recent legal challenges against technology companies underscore an unsettling reality:
            the tools designed to improve lives can just as easily inflict harm when ethical foresight 
            is absent. These developments invite critical reflection on the obligations of those who 
            architect our digital future. It is no longer sufficient to marvel at what technology 
            can do—we must ask what it should do.

            Responsible computing is not a checkbox nor a static guideline it is a culture, a discipline
            embedded into every facet of technological evolution. From system design to code deployment, 
            it demands a deliberate integration of integrity, inclusivity, environmental stewardship, 
            transparency, and security. It reframes computing not as a neutral instrument but as a profound 
            force with ripple effects across human lives and ecosystems.
          </p>
        </section>

        <br />
        <section className="insights-section">
          <h2>Why Responsible Computing Matters</h2>
          <p>
            Technology impacts how we learn, work, communicate, and live. But it can also 
            reinforce bias, endanger privacy, and harm the environment. Responsible Computing 
            ensures that innovation uplifts society, respects human dignity, and supports the planet.
          </p>
        </section>

        <section className="insights-section">
          <h2>Core Principles of Responsible Computing</h2>
          <ul className="principles-list">
            <li>
              <strong>Ethics and Integrity</strong><br />
              Prioritize human well-being, avoid harm, and uphold fairness and honesty.
            </li>
            <li>
              <strong>Privacy and Security</strong><br />
              Design for privacy by default, minimize data collection, and ensure strong protection.
            </li>
            <li>
              <strong>Transparency and Accountability</strong><br />
              Make systems undesrtandable and own the consequences of computing choices.
            </li>
            <li>
              <strong>Inclusivity and Accessibility</strong><br />
              Empower all people and design technology that leaves no one behind.
            </li>
            <li>
              <strong>Environmental Sustainability</strong><br />
              Create energy-efficient systems and reduce e-waste.
            </li>
            <li>
              <strong>Social Good and Civic Responsibility</strong><br />
              Apply computing to real-world challenges and promote digital literacy.
            </li>
          </ul>
        </section>

        <section className="insights-section">
          <h2>Responsible Computing in Practice</h2>
          <p>
            Everyone has a role to play, from developers to educators and from companies to users. 
            Together, we can shape technology that serves people, planet, and purpose.
          </p>
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
      </div>
    </main>
    <Footer />
    </>
    
  );
}
