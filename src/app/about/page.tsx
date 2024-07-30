'use client';

import Badge from '@/components/badge/Badge';
import NavAbout from '@/components/nav/NavAbout';
import { GetMetaData } from '@/hooks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { Suspense, useEffect, useRef, useState } from 'react';

// export const metadata = GetMetaData({
//   title: 'Dep - About',
//   description: '',
//   asPath: '/about',
// });

const About = () => {
  const initLearns = [
    {
      title: '헤드리스 워드프레스로 고객 불편 해결하기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: true,
    },
    {
      title: 'VPS서버 운영하며 서버 비용 개선하기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: true,
    },
    {
      title: 'Github CI/CD 자동화 배포로 생산성 높히기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: true,
    },

    {
      title: 'SEO 작업으로 광고 비용 최적화하기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: true,
    },
    {
      title: '디자인시스템 Framer로 구축하기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: false,
    },
    {
      title: 'NextJS GSAP ScrollTriger 사용하기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: false,
    },
    {
      title: 'UI/UX 용어 사전 제작하기',
      category: 'Design, Dev',
      date: '2024.06.14',
      publish: false,
    },
  ];

  const tl = useRef<gsap.core.Timeline | null>(null);
  const [isPage, setIsPage] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true }).fromTo(
      '.title-motion',
      { y: -10, x: -100, opacity: 0 },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: 'power4.inOut',
      },
    );
  }, {});

  useEffect(() => {
    if (isPage) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }

    return () => {
      setIsPage(!isPage);
    };
  }, [isPage]);

  return (
    <main className='bg-white font-lineseed'>
      <section className='relative h-screen text-[#222]'>
        <div className='light-0 absolute bottom-[24px] w-max overflow-hidden'>
          <div className='title-motion'>
            <h3 className='w-max pb-[28px] pl-base text-[82px] font-light leading-[85%]'>최고의 동료들과 함께</h3>
          </div>
          <div className='title-motion'>
            <h3 className='w-max pb-[28px] pl-base text-[82px] font-light leading-[85%]'>
              세상에 긍정적인 변화를 만들며
            </h3>
          </div>
          <div className='title-motion'>
            <h3 className='w-max pb-[28px] pl-base text-[82px] font-light leading-[85%]'>성장하고 싶어요</h3>
          </div>
        </div>
        <span className='absolute bottom-base left-1/2 -translate-x-1/2 transform text-sm'>scroll to explore</span>
      </section>
      <section className='flex h-screen flex-col items-center justify-center'>
        <span className='mb-[24px] text-[32px] font-bold text-gray'>{`hello {I am}`}</span>
        {/* <p className='text-center text-[48px] font-light text-black-200'>
          사람들과 끊임없이 커뮤니케이션하고
          <br /> 배우고 공유하며 문제를 해결해가는 사람
          <br /> 그렇게 성장하는 사람이 좋은 디자이너이고
          <br /> 지속 가능한 디자이너라고 생각해요
        </p> */}
      </section>
      <section className='grid h-screen grid-cols-3'>
        <div className='bg-gray'></div>
        <div></div>
        <div className='bg-gray'></div>
      </section>
      <section className='grid h-screen grid-cols-3 text-white'>
        <div className='relative col-span-2 bg-black p-base'>
          <h1 className='text-[96px] font-thin leading-[1.2]'>Fastweb Website Development</h1>
          <ul className='flex gap-8 py-12'>
            <li>
              <Link href=''>website</Link>
            </li>
            <li>
              <Link href=''>github</Link>
            </li>
          </ul>

          <div className='absolute bottom-[160px]'>
            <dl className='mb-10'>
              <dt className='mb-2 text-white'>overview</dt>
              <dd className='txt-gray text-sm text-gray [&>div]:flex [&>div]:gap-4'>
                노코드 웹 빌더 서비스를 통해 누구나 쉽게 웹사이트 개발을 할 수 있도록 했습니다.
                <br /> 기능을 컴포넌트로 분리하여 개발 생산성을 높혀 생산 비용을 줄이고자 했습니다.
                <br /> 기존 웹 개발을 위한 고객이 커뮤니케이션 비용을 줄이고 개발 단가를 낮출 수
              </dd>
            </dl>
            <div>
              <p className='mb-2 text-white'>my role</p>
              <dl className='txt-gray text-sm text-gray [&>div]:flex [&>div]:gap-4'>
                <div>
                  <dt>UI/UX 디자인</dt>
                  <dd>기여도 100%</dd>
                </div>
                <div>
                  <dt>프론트엔드 개발</dt>
                  <dd>기여도 100%</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className='absolute bottom-base left-0 flex w-full justify-between px-base'>
            <button>contact me</button>
            <span className='text-xs'>ⓒ 2024</span>
            <p className='flex items-center text-xs'>
              1 <span className='mx-[6px] inline-block h-[1px] w-[12px] bg-white' /> 3
            </p>
          </div>
        </div>
      </section>

      <section className='relative h-screen p-base'>
        <h2 className='text-[96px] font-thin leading-[1.2] text-black'>Learn and share</h2>
        <div className='absolute bottom-base left-0 w-full px-base'>
          <div className='mb-4 flex w-full justify-between'>
            <ul className='text-md flex gap-6'>
              <li>
                <button className='font-bold'>
                  All<span className='ml-[2px] text-xs'>(3)</span>
                </button>
              </li>
              <li>
                <button>Design</button>
              </li>
              <li>
                <button>Dev</button>
              </li>
            </ul>
            <Link href={''}>More +</Link>
          </div>
          <table className='w-full border-y'>
            <tbody className='w-full'>
              {initLearns.map(learn => (
                <tr
                  key={learn.title}
                  className='flex w-full items-center justify-between border-b py-3 last:border-b-0'>
                  <th className='flex w-4/6 items-center gap-3 text-left text-[32px] font-normal'>
                    {learn.title} {learn.publish ? '' : <Badge />}
                  </th>
                  <td className='w-1/6 text-end'>{learn.category}</td>
                  <td className='w-1/6 text-end'>{learn.publish ? learn.date : 'comming soon'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <NavAbout />
    </main>
  );
};

export default About;
