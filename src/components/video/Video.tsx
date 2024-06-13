'use client';

import { transitionState } from '@/state/state';
import React, { useState } from 'react';

const Video = () => {
  const [status, setStatus] = useState(transitionState);

  return (
    <div className={`${status ? '' : ''} animate-pageInHome fixed z-10 h-full w-full bg-gray`}>
      <video autoPlay loop muted className={`h-full w-full object-cover`}>
        <source
          src={
            'https://firebasestorage.googleapis.com/v0/b/pickstyle-6149c.appspot.com/o/images%2FVSS_RECAP_2023.mp4?alt=media&token=18029a8b-a66e-496e-bb5a-0be93379f030'
          }></source>
      </video>
    </div>
  );
};

export default Video;
