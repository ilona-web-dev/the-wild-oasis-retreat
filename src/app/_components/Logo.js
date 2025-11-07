import Link from 'next/link';
import Image from 'next/image';

function Logo() {
   return (
      <Link href="/" className="flex items-center gap-4 z-10">
         <Image
            src="/logo.png"
            height={60}
            width={60}
            alt="The Aurora Retreat logo"
         />
         <span className="text-xl font-semibold text-primary-100">
            Aurora Retreat
         </span>
      </Link>
   );
}

export default Logo;
