'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MoveUpRight } from 'lucide-react';
import Footer from '@/components/footer';
import '@/app/home.css';
import '@/app/hero/about/page.css';

export default function Insights() {
  const router = useRouter();

  return (
    <>
      <div className="about abt" id="about">
        <section className="moreksu abt">
          {/* Logo and Label */}
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

          {/* Left border */}
          <span className="border abt wrk"></span>

          {/* Section title */}
          <span className="abtttle abt">
            <div>WHO WE</div>
            <div>ARE</div>
          </span>
        </section>

        <div className="card_cont abt">
          <section className="wrapper-card">
            <section className="rcimg abt">
              <Image
                src="/images/prj5.jpeg"
                alt="Kisii University"
                width={0}
                height={0}
                sizes="100vw"
              />
            </section>

            <div className="about_card abt">
              <section className="content_card noshadow">
                <div className="content abt">
                  We{' '}
                  <Link href="https://kisiiuniversity.ac.ke/">
                    Kisii University <MoveUpRight size={16} />
                  </Link>{' '}
                  led by Professor F. Mzee in partnership with the Mozilla Foundation are
                  joining hands to empower a new wave of graduands with ethical computing
                  practices through Responsible Computing Challenge.
                </div>
              </section>
            </div>
          </section>

          <button className="content_more" onClick={() => router.push('/hero/insights')}>
            Learn More <MoveUpRight size={14} />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
