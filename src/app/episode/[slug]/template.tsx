'use client';

import { PageInEpisode } from '@/components';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setStatus(false);
  }, []);

  return (
    <div>
      {children}
      <PageInEpisode status={status} />
    </div>
  );
}
