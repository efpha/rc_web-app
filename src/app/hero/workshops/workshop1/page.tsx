import Image from 'next/image';
import Link from 'next/link'
import './page.css';
import '@/app/hero/about/page.css';

export default function WorkshopPage() {
  return (
    <div className='workshop1-page'>
      <h3>Mozilla Responsible Computing Project</h3>
      <span className='date'>Date: Jan 27th, 2025 by <Link href="https://kisiiuniversity.ac.ke/">Kisii University</Link></span>
      <section className="content-cont">
        <section className="rcimg abt">
            <Image 
                src="/images/workshop1.jpg"
                alt="Kisii University"
                width={640}
                height={800}
            />
        </section>
        <div className="workshop_content">
            <p>
              Today we set the ball rolling on Phase 2 of the Responsible Computing 
              Challenge project with two inciting workshops for our faculty and our 
              students in the computing sciences program.
            </p>
            <p>
              This intuitive project has helped them to start asking the right questions with regards to ethics 
              in dealing with different computer systems
            </p>
            
             <section className="socials">
                
                <span>Find Us on social media</span>

                <Link href="https://x.com/kisiuniofficial" className="social-link">
                  <Image 
                    src="/images/twitter-x-logo.png"
                    alt="Twitter"
                    width={42}
                    height={42}
                  />
                </Link>
                <Link href="https://www.facebook.com/Kisiiuniversityofficial" className="social-link">
                  <Image 
                    src="/images/facebook-seeklogo.png"
                    alt="Facebook"
                    width={42}
                    height={42}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/kisiiuniversityofficial" className="social-link">
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
  );
}