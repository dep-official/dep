'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Clock from '../clock/Clock';
import MarqueeSlogan from '../marquee/MarqueeSlogan';
import { FooterType } from '@/@types/FooterTypes';
import { usePathname } from 'next/navigation';

const Footer: React.FC<FooterType> = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState('opacity-0');

  const convertPosition = () => {
    switch (pathname) {
      case '/':
        return 'absolute bottom-[32px]';
      default:
        return 'pb-[32px]';
    }
  };

  useEffect(() => {
    setIsActive('opacity-100');
  }, []);

  return (
    <footer className={`${convertPosition()} z-20 w-full bg-transparent font-montreal`}>
      <div className={`${isActive} duration-500 ease-cubic-ease`}>
        <MarqueeSlogan />
      </div>

      <div className='px-base-compact flex items-center justify-between text-[16px] text-white md:px-base'>
        <ul className='flex gap-[16px]'>
          <li>
            <Link href='https://github.com/dep-official' target='_blank'>
              Github
            </Link>
          </li>
          <li>
            <Link href=''>Behance</Link>
          </li>
        </ul>
        <span className='absolute left-1/2 hidden -translate-x-1/2 transform text-[14px] text-gray sm:block'>
          ⓒ Dep. ALL RIGHTS RESERVED.
        </span>
        <Clock />
      </div>
    </footer>
  );
};

export default Footer;
