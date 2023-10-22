import closeIcon from '../assets/close-icon.svg';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import { Card } from '@tremor/react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({isOpen, onClose, children}:Props):JSX.Element | null  => {
  return isOpen ? createPortal(
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg">
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-50"/>
      <Card className="bg-white sm:w-2/5 xl:w-1/4 p-4 shadow-lg relative top-1/4 m-auto">
        {children}

        <button onClick={onClose} type="button" className="absolute right-2 top-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white w-fit">
          <Image width={24} height={24} alt='close modal' src={closeIcon}/>

          <span className="sr-only">Close modal</span>
        </button>
    </Card>
    </div>,
    document.body
  ) : null;
}