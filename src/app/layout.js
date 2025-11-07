import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

import '@/app/_styles/globals.css';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
   title: {
      template: '%s - The Wild Oasis Retreat',
      default: 'Welcome - The Wild Oasis Retreat',
   },
   description:
      'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
            <Logo />
            <Navigation />
            <main>{children}</main>

            <footer>Copywright by the The Wild Oasis Retreat</footer>
         </body>
      </html>
   );
}
