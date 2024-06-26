import React from 'react';
import arrowTop from '@/assets/arrow_top.svg';
import Image from 'next/image';

const GoToTop = () => {
  return (
    <button className='absolute right-base top-base [&>*]:block'>
      <Image src={arrowTop} alt='arrow top' />
      {/* <span className='absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2' />
      <span className='absolute right-1/2 top-0 h-[1px] w-[24px] translate-x-1/2 rotate-45' /> */}
      {/* <span className='absolute left-1/2 top-0 h-[1px] w-[36px] origin-left -translate-x-1/2 -rotate-45' /> */}
    </button>
  );
};

export default GoToTop;
