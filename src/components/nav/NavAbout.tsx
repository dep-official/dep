import Link from 'next/link';
import React from 'react';

const NavAbout = () => {
  return (
    <aside className='fixed bottom-base right-base z-30 flex text-sm text-white'>
      <span className='mr-[40px] text-xs'>INDEX</span>
      <ol>
        <li>
          <Link href={''}>ep.hello, i am</Link>
        </li>
        <li>
          <Link href={''}>ep. project episode</Link>
        </li>
        <li>
          <Link href={''}>ep. learn and share</Link>
        </li>
        <li>
          <Link href={''}>ep. contact me</Link>
        </li>
      </ol>
    </aside>
  );
};

export default NavAbout;
