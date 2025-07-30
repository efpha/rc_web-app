'use client';

import React, { useState } from 'react';
import '@/app/hero/upcoming-events/page.css';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

type Event = {
  id: number;
  category: string;
  title: string;
  image: string;
  date: string;
  time: string;
};

export default function Events() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      category: 'Exhibition',
      title: 'Branner Library Monthly Book & Map Exhibit - California Coastal Ecosystems',
      image: '/images/event1.jpg',
      date: 'Jul 28',
      time: '12:00 AM',
    },
    // {
    //   id: 2,
    //   category: 'Academic Dates',
    //   title: 'MD – Clinical Performance Examinations (CPX)',
    //   image: '/images/event2.jpg',
    //   date: 'Jul 28',
    //   time: '12:00 AM',
    // },
    // {
    //   id: 3,
    //   category: 'Exhibition',
    //   title: 'Why Estonia? The 30-year Journey from the USSR to e-Estonia',
    //   image: '/images/event3.jpg',
    //   date: 'Jul 28',
    //   time: '12:00 AM',
    // },
    // {
    //   id: 4,
    //   category: 'Other',
    //   title: 'Financial Counseling with Fidelity (Virtual Only)',
    //   image: '/images/event4.jpg',
    //   date: 'Jul 28',
    //   time: '8:00 AM',
    // },
    // {
    //   id: 5,
    //   category: 'Exhibition',
    //   title: 'New Acquisitions exhibition, Bowes Art & Architecture Library, Summer 2025',
    //   image: '/images/event5.jpg',
    //   date: 'Jul 28',
    //   time: '9:00 AM',
    // },
  ]);

  return (
    <section className='eventsSection'>
      <div className='header'>
        <h2>Upcoming events</h2>
      </div>
      <div className='underline'></div>

      {events.length === 0 ? (
        <div className='noEvents'>No upcoming events available.</div>
      ) : (
        <div className='grid'>
          {events.map((event) => (
            <div key={event.id} className='card'>
              <img src={event.image} alt={event.title} className='image'/>
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
  );
}
