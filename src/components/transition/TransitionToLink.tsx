'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import PageTransition from './PageIn';
import Portal from './Portal';

interface Props {
  href: string;
  label?: string;
  className?: string;
  children?: ReactNode;
}

const TransitionToLink = ({ href, label, className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isTransitioning) {
      if (href === '/') router.push(href);

      timeoutId = setTimeout(() => {
        router.push(href);
        setIsTransitioning(false);
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isTransitioning, href, router]);

  const handleClick = () => {
    if (pathname !== href) {
      setIsTransitioning(true);
    }
  };

  return (
    <>
      <button className={className} onClick={handleClick}>
        {label || children}
      </button>
      {isTransitioning && href !== '/' && (
        <Portal>
          <PageTransition />
        </Portal>
      )}
    </>
  );
};

export default TransitionToLink;
