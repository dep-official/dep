'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GNB } from '../header/Header.data';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className='relative z-20 flex h-[12px] w-[48px] cursor-pointer flex-col justify-between border-none bg-transparent *:h-[1px] *:w-full *:bg-white *:transition-all *:duration-300'
        onClick={toggleMenu}>
        <div className={`${isOpen ? 'translate-y-[5.5px] rotate-[42deg] transform' : ''}`} />
        <div className={`${isOpen ? '-translate-y-[5.5px] -rotate-[42deg] transform' : ''}`} />
      </button>

      <nav
        className={`fixed left-0 top-0 z-10 h-screen w-full bg-[rgba(0,0,0,0.8)] pl-base pt-[248px] backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}>
        <ul className='max-w-gothInner px-inner *:font-manrope mx-auto flex flex-col text-white !duration-300 *:py-[24px] *:text-[32px] *:transition-all lg:px-0 lg:*:text-[51px]'>
          {GNB.map(item => (
            <li key={item.id}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
