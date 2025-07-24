'use client';

import Image from 'next/image';
import Link from 'next/link'
import '@/app/about/page'
import '@/app/home.css'
import { MoveUpRight } from 'lucide-react';
import '@/app/globals.css'
import { useRouter } from 'next/navigation';

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
              <div className="cards_container">
                <div className="minicardcont">
                  <section className='cardcont master'>
                      <Image 
                          src="/images/prj1.jpg"
                          alt="Kisii University"
                          width={1200}
                          height={600}
                      />
                    </section>
                    <section className='cardcont'>
                      <Image 
                          src="/images/prj2.jpeg"
                          alt="Kisii University"
                          width={1200}
                          height={600}
                      />
                      <Link className="card_dsc" href="#">
                        <span className='heading'>Rearch</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                      </Link>
                    </section>
                    <section className='cardcont'>
                      <Image 
                          src="/images/prj3.jpg"
                          alt="Kisii University"
                          width={1200}
                          height={600}
                      />
                      <Link className="card_dsc" href="#">
                        <span className='heading'>Rearch</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                      </Link>
                    </section>
                  </div>
                  <div className="minicardcont">
                    <section className='cardcont'>
                      <Image 
                          src="/images/prj2.jpeg"
                          alt="Kisii University"
                          width={1200}
                          height={600}
                      />
                      <Link className="card_dsc" href="#">
                        <span className='heading'>Rearch</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                      </Link>
                    </section>
                    <div className='cardcont'>
                      <Link href='/workshops/workshop1'>
                        <Image 
                            src="/images/workshop1.jpg"
                            alt="Kisii University"
                            width={1200}
                            height={600}
                        />
                      </Link>
                      <Link className="card_dsc" href="#">
                        <span className='heading'>Rearch</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                      </Link>
                    </div>
                    <section className='cardcont master'>
                      <Link className='cardcont' href='/workshops/workshop2'>
                      <Image 
                          src="/images/67994201a3d1b.jpeg"
                          alt="Kisii University"
                          width={1200}
                          height={600}
                      />
                      <Link className="card_dsc" href="#">
                        <span className='heading'>Rearch</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                      </Link>
                    </Link>
                    </section>
                  </div>
                </div>
                
              <div className="wrkshp_cont">
            </div>
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