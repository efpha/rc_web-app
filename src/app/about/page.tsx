'use client';
import Image from 'next/image';
import Link from 'next/link'
import '@/app/home.css';
import '@/app/about/page.css';

export default function About() {
    return (
        <div className="about abt" id="about">
            <section className="moreksu abt">
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

                {/* Left border */}
                <span className="border abt">
                </span>

                {/* Section title */}
                <span className="abtttle abt">
                    <div>WHO WE</div>
                    <div>ARE</div>
                </span>
            </section>
            <div className="card_cont abt">
                    <section className="rcimg abt">
                        <Image 
                            src="/images/ethic1.jpg"
                            alt="Kisii University"
                            width={1000}
                            height={600}
                        />
                    </section>
                <div className="about_card abt">
                    <div className="rctgl abt"></div>
                    <section className="content_card noshadow">
                        <div className="content abt">
                            We Kisii University led by Professor F. Mzee in partnership with the Mozilla Foundation are joining hands to
                            empower a new wave of graduating technologists with ethical computing practices through 
                            Responsible Computing Challenge. 
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
