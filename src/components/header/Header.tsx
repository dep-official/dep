'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LOGO from '@/assets/logo.svg';
import Hamburger from '../hamburger/Hamburger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState('-translate-y-full');

  const handleTimer = () => {
    return setTimeout(() => {
      setIsActive('translate-y-0');
    }, 500);
  };

  useEffect(() => {
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
        className={`absolute top-0 z-10 h-[72px] w-full px-base font-montreal duration-500 ease-cubic-ease ${isActive}`}>
        <div className='flex h-full items-center justify-between text-white'>
          <Link href='/'>
            <Image src={LOGO} alt='Dep logo' className='max-w-[52px]' />
          </Link>
          <Link href={'/episode'} className='block text-[18px]'>
            6 ep.sode
          </Link>
          <Hamburger />
        </div>
      </header>
    </>
  );
};

export default Header;
