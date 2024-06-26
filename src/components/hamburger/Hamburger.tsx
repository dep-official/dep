'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GNB } from '../header/Header.data';
import TransitionToLink from '../transition/TransitionToLink';
import Menu from '../menu/Menu';

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
    </div>
  );
};

export default Hamburger;
