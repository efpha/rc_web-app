'use client';

import Image from 'next/image';
import Link from 'next/link'
import '@/app/about/page'
import '@/app/home.css'
import { MoveUpRight } from 'lucide-react';
import '@/app/globals.css'
import { useRouter } from 'next/navigation';
import { newsItems } from '@/app/workshops/page';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <div className="card-text">
              <h1>Responsible Computing Challenge</h1>
              <h2>
                Championing for ethical computing practices and their impacts to
                the environment and the society
              </h2>
              <button className="action-start">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="card_cont">
          <div className="about_card">
            <section className="content_card shadowed">
              <div className="content">
                The Responsible Computing Challenge aims to embed ethical computing practices into academic
                curricula and professional practices. Faculty and students are being trained to navigate
                ethical concerns such as data privacy, cybersecurity, and algorithmic bias.
              </div>
                <button className='content_more'
                  onClick={() => router.push('/about')}
                >Learn More
                  <MoveUpRight size={18}/>
                </button>
            </section>
       <div/>      
          </div>
        </div>
      </div>

      {/* Workshop section */}
      <section className="workshop">
            <div className="wrkshp_cont">
              <div className="workshop_ttle">
                Workshops
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
          {/* Tryna get object from workshop page */}
          {
          newsItems.filter(Boolean).map((item, index) => (
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
                <span className="date">
                  {item.date}
                </span>
                <p className="news-tag">{item.tag}</p>
                <h4 className="news-title">{item.title}</h4>
                <Link className="viewlink" href={item.link} target="_blank">
                  View project on University Website  <MoveUpRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
    </section>
                
              {/* <div className="wrkshp_cont">
            </div> */}
        </div>
        <button className="more_wrksp"
        onClick={() => router.push('/workshops')}
        >More Workshops
        </button>
      </section>
      <div className="partn">
        <div className="roll_cont">
            <span className='roll'>

              <span className="image_cont">
                <Image
                  src='/images/ksu.png'
                  className='ksu_lg'
                  alt='ksu logo'
                  width={1020}
                  height={600}
                />
                <label className='ksu_labl' htmlFor="ksu_lg">Kisii University</label>
              </span>
              
              <span className="image_cont">
                  <Image
                    src='/images/mozilla.png'
                    className='mozilla_lg'
                    alt='mozilla foundation logo'
                    width={1020}
                    height={600}
                  />
                  <label className='moz_labl' htmlFor="mozilla_lg">Mozilla Foundation</label>
              </span>
          </span>
        </div>
      </div>
    </div>
  );
}