/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16  xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-2'>
        <Link href={'/'}><Image src={'/kashyap.png'} width={80} height={80} className='rounded-full object-contain animate-spin' style={{ animation: 'spin 4s linear infinite' }} priority={true}/></Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
