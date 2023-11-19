import './globals.scss';

import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { AddButton } from '../components/add-button';
import AddModal from '../components/add-modal';
import Nav from '../components/nav';

export const metadata = {
  title: '',
  description: ''
};

export default async function RootLayout({ children }: { children: ReactNode }): Promise<JSX.Element> {
  return (
    <html className="h-full bg-gray-50" lang="en">
      <body className="h-full">
        <header>
          <Suspense fallback="...Loading">
            <Nav />
          </Suspense>
        </header>
        <main className="h-full p-4 md:p-10">{children}</main>
        <AddButton />
        <AddModal />
      </body>
    </html>
  );
}
