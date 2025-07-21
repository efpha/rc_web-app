// import '@/app/worskshops/page.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Workshops() {
    return (
        <div className="workshops">
            <section className="workshops-header">
                <h1>Workshops</h1>
                <p>Join our workshops to enhance your skills and knowledge.</p>
            </section>
            <section className="workshop-list">
                <div className="workshop-item">
                    <Image 
                        src="/images/prj5.jpeg"
                        alt="Workshop 1"
                        width={500}
                        height={300}
                    />
                    <h2>Workshop Title 1</h2>
                    <p>Description of Workshop 1.</p>
                    <Link href="/workshops/workshop1" className="workshop-link">Learn More</Link>
                </div>
                <div className="workshop-item">
                    <Image 
                        src="/images/workshop2.jpg"
                        alt="Workshop 2"
                        width={500}
                        height={300}
                    />
                    <h2>Workshop Title 2</h2>
                    <p>Description of Workshop 2.</p>
                    <Link href="/workshops/workshop2" className="workshop-link">Learn More</Link>
                </div>
            </section>
        </div>
    );
}