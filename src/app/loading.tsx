'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';

const Loading = () => {
  const startLoader = () => {
    let counterElement = document.querySelector('.counter');
    let currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      if (counterElement) {
        counterElement.textContent = currentValue.toString();
      }

      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  };

  useEffect(() => {
    startLoader();
  }, []);

  useGSAP(() => {
    gsap.to('.counter', 0.25, {
      delay: 3.5,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      ease: 'power4.inOut',
    });

    gsap.from('.h1', 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: 'power4.inOut',
    });
  });

  return (
    <div className='counter fixed h-screen w-screen bg-black [&>*]:text-white'>
      <span>0</span>
      <span>0</span>
      <span>0</span>
    </div>
  );
};

export default Loading;
