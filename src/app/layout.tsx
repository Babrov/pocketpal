import './globals.scss';

import Nav from '../components/nav';
import { ReactNode, Suspense } from 'react';
import { AddButton } from '../components/add-button';
import AddModal from '../components/add-modal';

export const metadata = {
  title: '',
  description: ''
};

export default async function RootLayout({
                                           children
                                         }: {
  children: ReactNode;
}) {
  return (
    <html lang='en' className='h-full bg-gray-50'>
    <body className='h-full'>
    <header>
      <Suspense>
        <Nav />
      </Suspense>
    </header>
    {children}
    <AddButton />
    <AddModal/>
    </body>
    </html>
  );
}
