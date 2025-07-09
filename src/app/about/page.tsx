import Image from 'next/image';
import Link from 'next/link'
import '@/app/home.css'
import '@/app/about/page.css'

export default function About(){
    return(
        <div className="about" id="about">
            <div className="card_cont shadowed">

                <div className="about_card">
                    <section className="content_card noshadow">
                    <div className="content">
                        The Responsible Computing Challenge aims to embed ethical computing practices into academic
                        curricula and professional practices. Faculty and students are being trained to navigate
                        ethical concerns such as data privacy, cybersecurity, and algorithmic bias.
                    </div>
                        {/* <button className='content_more'>View More
                        <MoveUpRight size={18}/>
                        </button> */}
                    </section>
                </div>
            </div>
            
        </div>
    )
}