'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GNB } from '../header/Header.data';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const tl = useRef<gsap.core.Timeline | null>(null);

  const handleLinkClick = (url: string) => {
    setIsMenuOpen(!isMenuOpen);
    tl.current?.reverse();
    if (tl.current) {
      tl.current.eventCallback('onReverseComplete', () => {
        router.push(url);
      });
    }
  };

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          '.menu-overlay',
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', // 초기 값: 화면 상단에 작은 사각형
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // 최종 값: 화면 전체
            duration: 0.85,
            ease: 'power4.inOut',
          },
        )
        .to('.menu-link-item-holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-container`} ref={container}>
      <button
        className='relative z-20 flex h-[12px] w-[48px] cursor-pointer flex-col justify-between border-none bg-transparent *:h-[1px] *:w-full *:bg-black *:transition-all *:duration-300'
        onClick={toggleMenu}>
        <div className={`${isMenuOpen ? 'translate-y-[5.5px] rotate-[42deg] transform' : ''}`} />
        <div className={`${isMenuOpen ? '-translate-y-[5.5px] -rotate-[42deg] transform' : ''}`} />
      </button>

      <div
        className={`menu-overlay space-between fixed left-0 top-0 z-10 flex h-screen w-screen items-center bg-[rgba(255,255,255,0.85)] p-base backdrop-blur-sm`}>
        <nav className='menu-links'>
          <ul className='menu-link-item'>
            {GNB.map((link, index) => (
              <li key={index} className='mb-[32px] w-max overflow-hidden'>
                <button className='menu-link-item-holder relative' onClick={() => handleLinkClick(link.url)}>
                  <span className='menu-link text-[80px] font-normal leading-[85%] text-black'>{link.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
