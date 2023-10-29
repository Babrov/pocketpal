import Link from 'next/link';
import addIcon from '../assets/round-plus.svg';

import Image from 'next/image';

export const AddButton = () => {
  return (
    <Link href='/?add=true'
      className='fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-gray-50 md:top-20 md:bottom-auto'>
      <Image width={48} height={48} src={addIcon} alt={'add icon'} />
    </Link>
  );
};