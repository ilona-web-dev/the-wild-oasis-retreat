/** @type {import('next').NextConfig} */
const nextConfig = {
   /* config options here */
   reactCompiler: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'rplmygzdurqwnskpugxv.supabase.co',
            pathname: '/storage/v1/object/public/**',
         },
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
