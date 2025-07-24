'use client';

import '@/app/workshops/page.css';
import '@/app/about/page.css';
import '@/app/workshops/workshop1/page';
import Image from 'next/image';
import Link from 'next/link';

export default function Workshops() {
  const newsItems = [
    {
      title: 'Vice Chancellor receive and awarde the winning projects from the Responsible Computing Innovation Day',
      image: '/images/abs9pxPPxlRK8NsOsKsSGcTZWBuRg8UoYLPd2jG5.jpg',
      link: 'https://kisiiuniversity.ac.ke/blog/responsible-computing-innovation-day-awards',
      date: 'Apr 24th, 2025'
    },
    {
      title: 'Students from the School of Information Science & Technology present their innovations',
      image: '/images/QqD8ha1koXoJQES9sCBN6ZE5h6h49I4ehpUyNl1c.jpg',
      link: 'https://kisiiuniversity.ac.ke/blog/mozilla-sponsored-responsible-computing-innovation-day',
      date: 'Apr 24th, 2025'
    },
    {
      title: 'Students from School of Information Science & Technology overwhelmingly embraced tutelage in matters ethics',
      image: '/images/OYYviaxMG7P0lNXUCHGSe4hlvrkIHHNZeg0AkMVc.jpg',
      link: 'https://kisiiuniversity.ac.ke/blog/mozilla-foundation-responsible-computing-challenge',
      date: 'Jan 29th, 2025'
    },
    {
      title: 'Faculty team from School of Information Science and technology set the ball rolling',  
      image: '/images/547Nr9x1BkS7amVE7wMDg2i1KNG2sdhq1D7M2G2O.jpg',
      link: '/workshops/second-phase-begin',
      date: 'Jan 28th, 2025'
    },
    {
      title: 'Pre-Project Workshop',
      image: '/images/Bzw1uag6HA1zAFz5eCpy8CggmDOweknQNT7rAdRk.jpg',
      link: '/workshops/workshop1',
      date: 'Jan 27th, 2025'
    }
];

  return (
    <div className="workshops">
      <section className="moreksu abt wrk">
        <span className="ksu abt">
          <Link href="https://kisiiuniversity.ac.ke/">
            <span className="image_cont">
              <Image
                src="/images/ksu.png"
                className="ksu_lg"
                alt="ksu logo"
                width={1020}
                height={600}
              />
              <label className="ksu_labl" htmlFor="ksu_lg">
                Kisii University
              </label>
            </span>
          </Link>
        </span>
        <span className="border wrk"></span>
        <span className="abtttle abt wrk">
          <div>RESPONSIBLE COMPUTING</div>
          <div>WORKSHOPS</div>
        </span>
      </section>

      <section className="workshops-header">
        <div className="content abt wrk">
          Join our workshops to learn more about ethical computing practices and their impacts on the environment and society.
        </div>
      </section>

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
            <Link className="news-content" href={item.link}>
              <span className="date">
                {item.date}
              </span>
              <p className="news-tag">Project</p>
              <h4 className="news-title">{item.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
