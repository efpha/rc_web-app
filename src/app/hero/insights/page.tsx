// app/insights/page.tsx
'use client';

import './page.css';

export default function InsightsPage() {
  return (
    <main className="landing-bg">
      <div className="insights-container">
        <section className="intro-hero">
            <div className="intro-overlay">
                <div className="intro-text">
                <h1>Responsible Computing Insights</h1>
                <p className="tagline">Deepening Our Understanding of Responsible Computing</p>
                {/* Optional Button */}
                {/* <a href="#content" className="learn-more-btn">Learn more</a> */}
                </div>
            </div>
        </section>


        <section className="insights-section">
          <h2>What is Responsible Computing?</h2>
          <p>
            Responsible Computing is the conscious and ethical use of technology, data, 
            and computing power to benefit individuals, communities, and the planet. 
            It’s not just about writing code or building systems. It’s about building
            responsibility into every decision, from design to deployment.
          </p>
          <p>
            In today’s rapidly advancing digital world, computing is everywhere from
            mobile apps and AI to cloud infrastructure. While these innovations offer great 
            opportunities, they also raise important questions. Responsible Computing embeds 
            ethics, accountability, and sustainability into the very fabric of computing.
          </p>
        </section>

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
              Make systems understandable and own the consequences of computing choices.
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
            Everyone has a role to play—from developers to educators and from companies to users. 
            Together, we can shape technology that serves people, planet, and purpose.
          </p>
        </section>

        <section className="insights-section">
          <h2>Looking Ahead</h2>
          <p>
            The future of computing holds great promise and challenges. Responsible Computing helps 
            us face the future with care and creativity. We don’t just build for efficiency—we build for ethics and impact.
          </p>
        </section>

        <section className="insights-section final-thought">
          <h2>Final Thought</h2>
          <p>
            Responsible Computing isn't a destination. It's a journey of reflection, growth, 
            and meaningful change. Let's code the future <strong>responsibly</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
