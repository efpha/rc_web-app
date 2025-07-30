'use client';

import React, { useState } from 'react';
import '@/app/hero/upcoming-events/page.css';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'; // ✅ Replaces <img> for optimization

type Event = {
  id: number;
  category: string;
  title: string;
  image: string;
  date: string;
  time: string;
};

export default function Events() {
  const [events] = useState<Event[]>([
    {
      id: 1,
      category: 'Workshop',
      title: 'Responsible Computing: Ethical Tech in Practice',
      image: '/images/fotis-fotopoulos-6sAl6aQ4OWI.jpg',
      date: 'Aug 10',
      time: '10:00 AM',
    },
    {
      id: 3,
      category: 'Seminar',
      title: 'AI & Bias: A Responsible Computing Perspective',
      image: '/images/0iV9LmPDn0.jpg',
      date: 'Aug 18',
      time: '2:00 PM',
    },
    {
      id: 4,
      category: 'Panel Discussion',
      title: 'Tech for Good: Sustainability & Responsible Innovation',
      image: '/images/CosHjyONRk8.jpg',
      date: 'Aug 25',
      time: '4:30 PM',
    },
    {
      id: 5,
      category: 'Webinar',
      title: 'Privacy by Design: A Responsible Computing Approach',
      image: '/images/FnA5pAzqhMM.jpg',
      date: 'Sep 3',
      time: '11:00 AM',
    },
  ]);

  return (
    <section className='eventsSection'>
      <div className='header'>
        <h2>Upcoming events</h2>
      </div>
      <div className='underline'></div>

      <section className='card-section'>
        {events.length === 0 ? (
          <div className='noEvents'>No upcoming events available.</div>
        ) : (
          <div className='grid'>
            {events.map((event) => (
              <div key={event.id} className='card'>
                <Image
                  src={event.image}
                  alt={event.title}
                  className='image'
                  width={500}
                  height={300}
                />
                <div className='details'>
                  <p className='category'>{event.category}</p>
                  <h3>
                    {event.title} <ArrowUpRight size={14} />
                  </h3>
                  <p className='datetime'>
                    {event.date} | {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
