import React from 'react';

const Timeline = () => {
  return (
    <div className='fixed bottom-0 left-0 flex h-screen w-screen justify-around px-[1rem]'>
      <div className='absolute left-0 top-1/2 translate-y-1/2 cursor-pointer bg-black leading-[1.2]'>
        <p>
          [<span className='px-[3rem] text-[13px]'>Drag</span>]
        </p>
      </div>
    </div>
  );
};

export default Timeline;
