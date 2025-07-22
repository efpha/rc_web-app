import Image from 'next/image';
import Link from 'next/link'

export default function WorkshopPage() {
  return (
    <div>
      <h1>Mozilla Responsible Computing Project</h1>
      <span className='date'>Date... by <Link href="https://kisiiuniversity.ac.ke/">Kisii University</Link></span>
        <section className="rcimg abt">
            <Image 
                src="/images/workshop1.jpg"
                alt="Kisii University"
                width={500}
                height={1000}
            />
        </section>
        <div className="content abt">
            Today we set the ball rolling on Phase 2 of the Responsible Computing 
            Challenge project with two inciting workshops for our faculty and our 
            students in the computing sciences program. This intuitive project has 
            helped them to start asking the right questions with regards to ethics 
            in dealing with different computer systems 
        </div>
    </div>
  );
}