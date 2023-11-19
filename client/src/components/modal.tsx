import { Card } from '@tremor/react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import closeIcon from '../assets/close-icon.svg';


interface Props {
  readonly children: ReactNode;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }:Props):JSX.Element | null  => isOpen ? createPortal(
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}/>
      <Card className="bg-white sm:w-2/5 xl:w-1/4 p-4 shadow-lg relative top-1/4 m-auto">
        {children}

        <button className="absolute right-2 top-2 text-gray-400 bg-transparent rounded-lg text-sm h-8 ml-auto inline-flex justify-center hover:bg-gray-200 items-center w-fit" onClick={onClose} type="button">
          <Image alt='close modal' height={24} src={closeIcon} width={24}/>

          <span className="sr-only">Close modal</span>
        </button>
    </Card>
    </div>,
    document.body
  ) : null