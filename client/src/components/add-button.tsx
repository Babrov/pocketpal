import Image from 'next/image';
import Link from 'next/link';

import addIcon from '../assets/round-plus.svg';


export const AddButton = () => (
    <Link className='fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-gray-50 md:top-20 md:bottom-auto'
      href='/?add=true'>
      <Image alt="add icon" height={48} src={addIcon} width={48} />
    </Link>
  );