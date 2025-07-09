'use client'; // ✅ MUST be the first line

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
                    WHO WE ARE
                </span>
            </section>
            <div className="card_cont abt">
                <div className="about_card abt">
                    <section className="imgabt abt cardcont">
                        <Image 
                            src="/images/prj6.jpg"
                            alt="Kisii University"
                            width={1200}
                            height={600}
                        />
                    </section>
                    <section className="content_card noshadow">
                        <div className="content abt">
                            Through the Responsible Computing Challenge, Kisii University is 
                            molding a new wave of graduating technologists who will bring holistic 
                            thinking to the design of new technologies, fueling an industry-wide culture shift. 
                            The Challenge supports the conceptualization, development, and piloting of curricula 
                            that empowers students to think about the social and political context of computing.
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
