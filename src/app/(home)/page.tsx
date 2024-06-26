import { GetMetaData } from '@/hooks';
import React, { Suspense } from 'react';
import PATTERN from '@/assets/pattern.png';
import Image from 'next/image';
import Video from '@/components/video/Video';
import Loading from '../loading';

export const metadata = GetMetaData({
  title: 'Dep - Digital Design Studio',
  description: 'web(웹), commerce(커머스), platform(플랫폼), UI/UX 디자인 개발',
  asPath: '/',
});

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className='relative h-screen overflow-hidden bg-black'>
          <Image
            src={PATTERN}
            alt='Dep Pattern'
            className='absolute bottom-[-50%] left-1/2 max-w-[520px] -translate-x-1/2 transform'
          />
          <Video />
        </main>
      </Suspense>
    </>
  );
};

export default Home;
