import { GetMetaData } from '@/hooks';
import React from 'react';
import PATTERN from '@/assets/pattern.png';
import Image from 'next/image';
import TransitionGoToPage from '@/components/transition/TransitionGoToPage';

export const metadata = GetMetaData({
  title: 'Dep - Digital Design Studio',
  description: 'web(웹), commerce(커머스), platform(플랫폼), UI/UX 디자인 개발',
  asPath: '/',
});

const Home = () => {
  return (
    <>
      <main className='relative h-screen overflow-hidden bg-black'>
        <Image
          src={PATTERN}
          alt='Dep Pattern'
          className='absolute bottom-[-50%] left-1/2 max-w-[520px] -translate-x-1/2 transform'
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 object-cover text-lg font-bold text-white duration-500 ease-cubic-ease`}>
          <video autoPlay loop muted className='h-full w-full object-cover'>
            <source
              src={
                'https://firebasestorage.googleapis.com/v0/b/pickstyle-6149c.appspot.com/o/images%2FVSS_RECAP_2023.mp4?alt=media&token=18029a8b-a66e-496e-bb5a-0be93379f030'
              }></source>
          </video>
        </div>
      </main>
      {/* <TransitionGoToPage initStatus={false} /> */}
    </>
  );
};

export default Home;
