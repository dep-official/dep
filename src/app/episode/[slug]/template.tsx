'use client';

import TransitionEpisode from '@/components/transition/TransitionEpisode';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setStatus(false);
  }, []);

  return (
    <div>
      <TransitionEpisode status={status} />
      {children}
    </div>
  );
}
