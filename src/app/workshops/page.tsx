import '@/app/workshops/page.css';
import '@/app/about/page.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Workshops() {
    return (
        <div className="workshops">
            <section className="moreksu abt wrk">
                {/* Logo and Label */}
                <span className="ksu abt">
                    <Link href="https://kisiiuniversity.ac.ke/">
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
                    </Link>
                    
                </span>
                <span className="border abt">
                </span>
                <span className="abtttle abt">
                    <div>RESPONSIBLE COMPUTING</div>
                    <div>WORKSHOPS</div>
                </span>
            </section>
            <section className="workshops-header">
                <div className="content abt wrk">Join our workshops know more about ethical computing practices and their impacts to the environment and the society.</div>
            </section>
            <section className="workshop-list">
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
                                    <section className='cardcont master'>
                                      <Image 
                                          src="/images/prj1.jpg"
                                          alt="Kisii University"
                                          width={1200}
                                          height={600}
                                      />
                                    </section>
                                  </div>
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
                {/* <div className="workshop-item">
                    <Image 
                        src="/images/prj5.jpeg"
                        alt="Workshop 1"
                        width={500}
                        height={300}
                    />
                    <h2>Workshop Title 1</h2>
                    <p>Description of Workshop 1.</p>
                    <Link href="/workshops/workshop1" className="workshop-link">Learn More</Link>
                </div> */}
                {/* <div className="workshop-item">
                    <Image 
                        src="/images/workshop2.jpg"
                        alt="Workshop 2"
                        width={500}
                        height={300}
                    />
                    <h2>Workshop Title 2</h2>
                    <p>Description of Workshop 2.</p>
                    <Link href="/workshops/workshop2" className="workshop-link">Learn More</Link>
                </div> */}
            </section>
        </div>
    );
}