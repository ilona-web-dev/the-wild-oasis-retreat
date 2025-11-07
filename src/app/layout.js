import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

export const metadata = {
   title: 'The Wild Oasis Retreat',
};
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Logo />
            <Navigation />
            <main>{children}</main>

            <footer>Copywright by the The Wild Oasis Retreat</footer>
         </body>
      </html>
   );
}
