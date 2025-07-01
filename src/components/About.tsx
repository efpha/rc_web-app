import Image from 'next/image';
import '@/components/about.css'

export default function About() {
  return (
    <div className="about" id="about">
      <div className="card_cont">
        <div className="about_card">
          <section className="img">
            <Image
              src="/images/about.jpeg"
              alt="Kisii University"
              width={1200}
              height={600}
            />
          </section>

          <section className="content">
            Kisii University community led by The Deputy Vice Chancellor Prof. F. Mzee Awour partnering
            with the Mozilla Foundation and USAID Kenya for a transformative project worth $62,500.
            The Responsible Computing Challenge aims to embed ethical computing practices into academic
            curricula and professional practices. Faculty and students are being trained to navigate
            ethical concerns such as data privacy, cybersecurity, and algorithmic bias.
            Through workshops, academic programs, and industry collaborations, the University is shaping
            a new generation of tech professionals who are not only skilled in technology but also aware
            of its societal and environmental implications.
          </section>

        </div>
      </div>
    </div>
  );
}
