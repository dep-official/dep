import { CardEpisode } from '@/components';
import TransitionGoToPage from '@/components/transition/TransitionGoToPage';
import { GetMetaData } from '@/hooks';

export const metadata = GetMetaData({
  title: 'Dep - Episode',
  description: '',
  asPath: '/episode',
});

const Episode = () => {
  return (
    <main className='mt-[76px] px-base'>
      <TransitionGoToPage initStatus={true} />
      <CardEpisode />
    </main>
  );
};

export default Episode;
