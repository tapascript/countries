import Image from 'next/image';
import Link from 'next/link';
import Earth from '@/public/earth-rotating.gif'

export default function Home() {
  return (
    <div className="flex flex-col items-center p-10">
      <Image
        src={Earth}
        alt="GIF by Peace,love,happiness from Pixabay"
        width={700}
        height={500}/>
      <Link 
        href='/countries'
        className="bg-blue-600 text-white rounded-md mt-10 text-3xl md:text-lg p-2 leading-10 tracking-widest">
        EXPLORE EARTH
      </Link>  
    </div>  
    
  )
}
