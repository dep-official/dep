import React from 'react';

const PageIn = () => {
  return (
    <div className={`fixed left-0 top-0 z-40 grid h-full w-full grid-cols-1 will-change-transform`}>
      <div className={`origin-right animate-pageIn bg-black`} />
    </div>
  );
};

export default PageIn;
