import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../assets/css/index.css';
import '../assets/css/gradients.css';
import '../assets/css/animations.css';

import Header from '../components/layout/header';
import Providers from '../context/providers';
import { Locale, getDictionary } from '@/i18n/dictionary';
import Footer from '../components/layout/footer';

const font = Montserrat({ weight: ['100', '300', '400', '700'], subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'LS - Portfolio',
  description: 'Portfolio Showcase',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang='en' suppressHydrationWarning className='max-h-screen overflow-hidden overflow-y-scroll'>
      <body className={`flex min-h-screen min-w-screen flex-col items-stretch bg-base-100 text-content-100 ${font.className}`}>
        <Providers dictionary={dictionary} lang={params.lang}>
          <main className='flex flex-col items-stretch'>
            <Header lang={params.lang} />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
