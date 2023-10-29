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
      <Suspense fallback={'...Loading'}>
        <Nav />
      </Suspense>
    </header>
    <main className="h-full p-4 md:p-10">
      {children}
    </main>
    <AddButton />
    <AddModal />
    </body>
    </html>
  );
}
