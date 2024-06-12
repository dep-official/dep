'use client';

import { episodes } from '@/data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import TransitionEpisode from '../transition/TransitionEpisode';

const CardEpisode = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [status, setStatus] = useState(false);
  const [episodeTimeOut, setEpisodeTimeOut] = useState<NodeJS.Timeout | null>(null);

  const handleGoToEpisode = (url: string) => {
    setStatus(true);

    const timeout = setTimeout(() => {
      window.location.href = url;
    }, 500);

    setEpisodeTimeOut(timeout);
  };

  useEffect(() => {
    return () => {
      if (episodeTimeOut) clearTimeout(episodeTimeOut);
    };
  }, [episodeTimeOut]);

  return (
    <>
      <TransitionEpisode status={status} />
      <div className='grid grid-cols-2 gap-[16px]'>
        {episodes.map((episode, index) => (
          <article key={uuid()}>
            {episode.thumbnail && (
              <div
                className={`relative block h-[480px] cursor-pointer overflow-hidden`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleGoToEpisode(`/episode/${episode.slug}`)}>
                <Image
                  src={episode.thumbnail}
                  alt={episode.title}
                  className={`cur !h-full !w-full bg-gray object-cover object-center duration-500 ease-cubic-ease ${
                    hoveredIndex === index && episode.hoverContent ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {hoveredIndex === index && episode.hoverContent && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 object-cover text-lg font-bold text-white duration-500 ease-cubic-ease ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <video autoPlay loop muted className='h-full object-cover'>
                      <source src={episode.hoverContent}></source>
                    </video>
                  </div>
                )}
              </div>
            )}
            {!episode.thumbnail && <div className='h-[480px] bg-gray'></div>}
            <div className='relative mt-[4px] flex items-center justify-between font-montreal text-white'>
              <h3 className={`card__title relative ${index % 2 === 0 ? '' : ''}`}>{episode.title}</h3>
              <span className={`absolute -translate-x-1/2 transform ${index % 2 === 0 ? 'left-1/3' : 'left-1/2'}`}>
                {episode.category}
              </span>
              <time className={`card__date text-gray`}>{episode.year}</time>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default CardEpisode;
