'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './page.css';
import { newsItems } from '@/app/hero/data/newsData';
import Footer from '@/components/footer';

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
};

const generateMediaItems = (): MediaItem[] => {
  let idCounter = 1;

  return newsItems.flatMap((news) => {
    const items: MediaItem[] = [];

    if (news.image) {
      items.push({
        id: idCounter++,
        type: 'image',
        src: news.image,
        title: news.tag,
      });
    }

    if (news.pictures && Array.isArray(news.pictures)) {
      news.pictures.forEach((pic: string) => {
        items.push({
          id: idCounter++,
          type: 'image',
          src: pic,
          title: news.tag,
        });
      });
    }

    return items;
  });
};

const mediaItems = generateMediaItems();

const MediaGallery: React.FC = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>('All');

  const workshopTitles = ['All', ...Array.from(new Set(mediaItems.map(item => item.title)))];

  const filteredItems = selectedTitle === 'All'
    ? mediaItems
    : mediaItems.filter(item => item.title === selectedTitle);

  return (
    <>
        <div className="gallery-container">
      <div className="gallery-heading">
        <h1 className="gallery-title">Workshop&apos;s Media Gallery</h1>
        <div className="gallery-filter">
          <label htmlFor="workshopSelect">Filter: </label>
          <select
            id="workshopSelect"
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
          >
            {workshopTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-item">
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.title}
                className="gallery-image"
                width={500}
                height={300}
              />
            ) : (
              <video className="gallery-video" controls>
                <source src={item.src} />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="overlay">
              <span className="overlay-text">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MediaGallery;
