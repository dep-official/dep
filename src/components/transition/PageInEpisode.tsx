'use client';

import { episodeColorInit } from '@/state/state';
import React from 'react';
import { useRecoilState } from 'recoil';

const PageInEpisode: React.FC<{ status: boolean }> = ({ status }) => {
  const [color, setColor] = useRecoilState(episodeColorInit);

  const style = {
    backgroundColor: color,
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 grid h-full w-full grid-cols-1 grid-rows-2 will-change-transform [&>*]:transform [&>*]:transition-transform [&>*]:duration-500 [&>*]:ease-cubic-ease ${status ? '' : 'pointer-events-none'}`}>
      <div style={style} className={`${status ? 'origin-[50%_0%] scale-y-100' : 'origin-[50%_0%] scale-y-0'}`} />
      <div style={style} className={`${status ? 'origin-[50%_100%] scale-y-100' : 'origin-[50%_100%] scale-y-0'}`} />
    </div>
  );
};

export default PageInEpisode;
