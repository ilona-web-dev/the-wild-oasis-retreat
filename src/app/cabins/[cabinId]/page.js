import { getCabin, getCabins } from '@/app/_lib/data-service';
import { notFound } from 'next/navigation';
import Reservation from '@/app/_components/Reservation';
import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import Cabin from '@/app/_components/Cabin';

async function resolveCabin(params) {
   const { cabinId } = await params;
   const cabin = await getCabin(cabinId);
   return { cabinId, cabin };
}

export async function generateMetadata({ params }) {
   const { cabin } = await resolveCabin(params);

   if (!cabin) return { title: 'Cabin not found' };

   return { title: `Cabin ${cabin.name}` };
}

export async function generateStaticParams() {
   const cabins = await getCabins();
   const ids = cabins.map((cabin) => ({
      cabinId: String(cabin.id),
   }));
   return ids;
}

async function Page({ params }) {
   const { cabin, cabinId } = await resolveCabin(params);

   if (!cabin) notFound();

   return (
      <div className="max-w-6xl mx-auto mt-8">
         <Cabin cabin={cabin} />
         <div>
            <h2 className="text-4xl font-semibold text-center mb-10 text-accent-400">
               Reserve cabin {cabin.name} today. Pay on arrival.
            </h2>
            <Suspense fallback={<Spinner />}>
               <Reservation cabin={cabin} />
            </Suspense>
         </div>
      </div>
   );
}

export default Page;
