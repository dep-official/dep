import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header, RecoilRootWrapper } from '@/components';
import localFont from 'next/font/local';

const montreal = localFont({
  src: './fonts/PPNeueMontreal-Thin.woff',
  display: 'swap',
  weight: '100',
  variable: '--font-montreal',
});

const lineseed = localFont({
  src: [
    {
      path: './fonts/LINESeedKR-Th.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/LINESeedKR-Rg.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/LINESeedKR-Bd.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lineseed',
});

const editorial = localFont({
  src: './fonts/PPEditorialOld-UltralightItalic.woff',
  display: 'swap',
  weight: '100',
  style: 'italic',
  variable: '--font-editorial',
});

export const metadata: Metadata = {
  title: 'Dep - Digital Design Studio',
  description: 'web(웹), commerce(커머스), platform(플랫폼), UI/UX 디자인 개발',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${montreal.variable} ${lineseed.variable} ${editorial.variable} bg-black`}>
        <RecoilRootWrapper>
          <div id='portal' />
          <Header />
          {children}
          <Footer />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
