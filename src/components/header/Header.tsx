'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LOGO from '@/assets/logo.svg';
import Hamburger from '../hamburger/Hamburger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TransitionToLink from '../transition/TransitionToLink';
import { CURRENT_URL_STATE, PREV_URL_STATE } from '@/@constants/Recoil';

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState('-translate-y-full');

  const [prevUrl, setPrevUrl] = useState(PREV_URL_STATE);
  const [currentUrl, setCurrentUrl] = useState(CURRENT_URL_STATE);

  const handleTimer = () => {
    return setTimeout(() => {
      setIsActive('translate-y-0');
    }, 500);
  };

  useEffect(() => {
    setPrevUrl(currentUrl);
    setCurrentUrl(pathname);

    if (pathname === '/') {
      const timer = handleTimer();

      return () => clearTimeout(timer);
    } else {
      setIsActive('');
    }
  }, [pathname]);

  return (
    <>
      <header
        className={`px-base-compact absolute top-0 z-50 h-[72px] w-full font-montreal duration-500 ease-cubic-ease md:px-base ${isActive}`}>
        <div className='flex h-full items-center justify-between text-white'>
          <TransitionToLink href='/'>
            <Image src={LOGO} alt='Dep logo' className='max-w-[52px]' />
          </TransitionToLink>
          <TransitionToLink href='/episode' label='6 ep.sode' className='block cursor-pointer text-[18px] font-bold' />
          <Hamburger />
        </div>
      </header>
    </>
  );
};

export default Header;
