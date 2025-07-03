import Image from 'next/image';
import '@/app/home.css'
import { MoveUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="card-container">
        {/* <div className="left-border"></div> */}
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
      <div className="about" id="about">
        <div className="card_cont">
          <div className="about_card">
            <section className="content_card">
              <div className="content">
                The Responsible Computing Challenge aims to embed ethical computing practices into academic
                curricula and professional practices. Faculty and students are being trained to navigate
                ethical concerns such as data privacy, cybersecurity, and algorithmic bias.
              </div>
              {/* Through workshops, academic programs, and industry collaborations, the University is shaping
              a new generation of tech professionals who are not only skilled in technology but also aware
              of its societal and environmental implications. */}
                <button className='content_more'>View More
                  <MoveUpRight size={18}/>
                </button>
            </section>
       <div/>      
          </div>
        </div>
      </div>

      {/* Workshop section */}
      <section className="workshop">
            <div className="workshop_container">
              <div className="workshop_ttle">
                Workshops
              </div>
              <div className="wrkshp_cont">
                <section className='card master'>
                  <Image 
                      src="/images/prj1.jpg"
                      alt="Kisii University"
                      width={1200}
                      height={600}
                  />
                </section>
                <section className='card'>
                  <Image 
                      src="/images/prj2.jpeg"
                      alt="Kisii University"
                      width={1200}
                      height={600}
                  />
                  <div className="card_dsc">
                    <div className='heading'>Rearch</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                  </div>
                </section>
                <section className='card'>
                  <Image 
                      src="/images/prj3.jpg"
                      alt="Kisii University"
                      width={1200}
                      height={600}
                  />
                  <div className="card_dsc">
                    <div className='heading'>Rearch</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                  </div>
                </section>
              </div>
              <div className="wrkshp_cont">
                <section className='card'>
                  <Image 
                      src="/images/prj2.jpeg"
                      alt="Kisii University"
                      width={1200}
                      height={600}
                  />
                  <div className="card_dsc">
                    <div className='heading'>Rearch</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                  </div>
                </section>
                <section className='card'>
                  <Image 
                      src="/images/prj3.jpg"
                      alt="Kisii University"
                      width={1200}
                      height={600}
                  />
                  <div className="card_dsc">
                    <div className='heading'>Rearch</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                  </div>
                </section>
                <section className='card master'>
                  <Image 
                      src="/images/prj4.jpg"
                      alt="Kisii University"
                      width={1200}
                      height={600}
                  />
                </section>
            </div>
        </div>
        <button className="more_wrksp">More Workshops</button>
      </section>

            {/* <section className="img">
              <Image
                src="/images/about.jpeg"
                alt="Kisii University"
                width={1200}
                height={600}
              />
                  <div className="card_dsc">
                    <div className='heading'>Rearch</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit eveniet 
                  </div>              
            </section> */}
    </div>
  );
}