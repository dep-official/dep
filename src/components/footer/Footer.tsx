'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Clock from '../clock/Clock';
import MarqueeSlogan from '../marquee/MarqueeSlogan';
import { FooterType } from '@/@types/FooterTypes';
import { usePathname } from 'next/navigation';
import uuid from 'react-uuid';
import Arrow from '../icon/Arrow';

const Footer: React.FC<FooterType> = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState('opacity-0');

  const initSocial = [
    { title: 'Linkdin', url: '' },
    { title: 'Github', url: '' },
    { title: 'Behance', url: '' },
  ];

  const initContact = [
    { title: '+82) 10-5660-7726', url: 'tel:010-5660-7726' },
    { title: 'hi@ikik.co', url: 'mailto:hi@ikik.co' },
  ];

  const convertPosition = () => {
    switch (pathname) {
      case '/':
        return 'absolute bottom-[32px]';
      case '/about':
        return 'h-screen';
      default:
        return 'pb-[32px]';
    }
  };

  useEffect(() => {
    setIsActive('opacity-100');
  }, []);

  return (
    <footer className={`${convertPosition()} relative z-20 w-full overflow-hidden bg-transparent font-montreal`}>
      <Link href={''} className='m-base inline-block text-[120px] leading-none text-white'>
        Let{"'"}s Talk
      </Link>
      <Arrow />
      <div className='flex gap-4 pl-base font-lineseed text-white [&>*]:w-[276px]'>
        <div>
          <span className='font-bold'>Social</span>
          <ul className='mt-2 flex flex-col border-t border-white pt-2'>
            {initSocial.map(social => (
              <Link key={uuid()} href={social.url} target='_blank' className='inline-block'>
                {social.title}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <span className='font-bold'>Contact Info</span>
          <ul className='mt-2 flex flex-col border-t border-white pt-2'>
            {initContact.map(social => (
              <li key={uuid()}>
                <Link href={social.url} target='_blank' className='inline-block'>
                  {social.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${isActive} absolute bottom-[120px] duration-500 ease-cubic-ease`}>
        <MarqueeSlogan />
      </div>

      <div className='absolute bottom-base flex w-full items-center justify-between px-base-compact text-[16px] text-white md:px-base'>
        <Clock />
        <span className='absolute left-1/2 hidden -translate-x-1/2 transform text-[14px] text-gray sm:block'>
          ⓒ Dep. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
