import { CardEpisodeList } from '@/components';
import { GetMetaData } from '@/hooks';

export const metadata = GetMetaData({
  title: 'Dep - Episode',
  description: '',
  asPath: '/episode',
});

const Episode = () => {
  return (
    <main className='px-base-compact mt-[76px] min-h-screen md:px-base'>
      <CardEpisodeList />
    </main>
  );
};

export default Episode;
