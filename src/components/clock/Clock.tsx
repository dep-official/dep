'use client' 

import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const seoulTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 9 * 3600000);
      const hours = String(seoulTime.getHours()).padStart(2, '0');
      const minutes = String(seoulTime.getMinutes()).padStart(2, '0');
      const seconds = String(seoulTime.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // 초기 시간을 설정
    const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <div className='flex gap-[8px]'>
      <span>Seoul</span>
      <time>{time}</time>
    </div>
  );

}

export default Clock
