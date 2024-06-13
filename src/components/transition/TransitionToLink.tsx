'use client';

import { transitionState } from '@/state/state';
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
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
  const [status, setStatus] = useRecoilState(transitionState);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isTransitioning) {
      timeoutId = setTimeout(() => {
        router.push(href);
        setIsTransitioning(false);
      }, 700);
    }

    if (href === '/') {
      router.push(href);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isTransitioning, href, router, setStatus]);

  const handleClick = () => {
    if (pathname !== href) {
      setIsTransitioning(true);
      setStatus(true);
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
