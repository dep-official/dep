'use client';

import React from 'react';
import { useEffect, useState } from 'react';

const TransitionGoToPage: React.FC<{ initStatus: boolean }> = ({ initStatus }) => {
  const [status, setStatus] = useState(initStatus);

  useEffect(() => {
    setStatus(!initStatus);
  }, []);

  return (
    <div
      className={`hello fixed left-0 top-0 z-50 grid h-full w-full grid-cols-1 will-change-transform ${
        status ? '' : 'pointer-events-none'
      }`}>
      <div
        className={`bg-black transition-transform duration-500 ease-cubic-ease ${
          status ? '' : 'origin-[0%_100%] scale-x-0'
        }`}
      />
    </div>
  );
};

export default TransitionGoToPage;
