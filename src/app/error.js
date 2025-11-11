'use client';

import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
   const router = useRouter();

   return (
      <div className="flex justify-center items-center flex-col gap-6">
         <h1 className="text-3xl font-semibold">Something went wrong!</h1>
         <p className="text-lg">{error.message}</p>

         <div className="flex gap-4">
            <button
               className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg cursor-pointer"
               onClick={reset}>
               Try again
            </button>
            <button
               className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg cursor-pointer"
               onClick={() => router.push('/cabins')}>
               Back to cabins page
            </button>
         </div>
      </div>
   );
}
