import React from 'react';
import CardEpisode from './CardEpisode';

const CardEpisodeList = () => {
  return (
    <div className='grid grid-cols-1 gap-[16px] md:grid-cols-2'>
      <CardEpisode />
    </div>
  );
};

export default CardEpisodeList;
