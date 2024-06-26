'use client';

import { episodeColorInit } from '@/state/state';
import { useRecoilState } from 'recoil';

const EpisodeDetail = () => {
  const [color, setColor] = useRecoilState(episodeColorInit);

  const style = {
    backgroundColor: color,
  };

  return (
    <main style={style} className='z-30'>
      <div className='animate-scaleY h-screen origin-bottom bg-gray'></div>
      <div className='flex h-full w-full items-center justify-center'>hello world</div>
    </main>
  );
};

export default EpisodeDetail;
