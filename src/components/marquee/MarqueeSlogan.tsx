import { MarqueeSloganProps } from '@/@types/MarqueeTypes';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSlogan: React.FC<MarqueeSloganProps> = ({ className }) => {
  const renderText = () => {
    const contents: JSX.Element[] = [];

    for (let i = 0; i < 3; i++) {
      contents.push(
        <p
          className={`mr-[48px] text-[240px] text-white ${className} font-montreal font-extralight leading-[1.5]`}
          key={i}>
          BE <em className='font-editorial'>Agile</em> AS BE <em className='font-editorial'>Born</em>
        </p>,
      );
    }

    return contents;
  };

  return <Marquee speed={160}>{renderText()}</Marquee>;
};

export default MarqueeSlogan;
