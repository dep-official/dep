import { GetMetaData } from '@/hooks';
import React from 'react';

export const metadata = GetMetaData({
  title: 'Dep - About',
  description: '',
  asPath: '/about',
});

const About = () => {
  return <div className='h-screen'></div>;
};

export default About;
