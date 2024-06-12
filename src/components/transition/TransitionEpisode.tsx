import React from 'react';

const TransitionEpisode: React.FC<{ status: boolean }> = ({ status }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 grid h-full w-full grid-cols-1 grid-rows-2 will-change-transform ${status ? '' : 'pointer-events-none'}`}>
      <div
        className={`transform bg-white transition-transform duration-500 ease-cubic-ease ${status ? 'origin-[50%_0%] scale-y-100' : 'origin-[50%_0%] scale-y-0'}`}
      />
      <div
        className={`transform bg-white transition-transform duration-500 ease-cubic-ease ${status ? 'origin-[0%_100%] scale-y-100' : 'origin-[50%_100%] scale-y-0'}`}
      />
    </div>
  );
};

export default TransitionEpisode;
