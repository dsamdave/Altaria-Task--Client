/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async headers() {
    const backendUrl = 'https://med-tele-healthcare-server-12dfae60da9e.herokuapp.com';
    const isDev = process.env.NODE_ENV === 'development';

    const cspValue = `
      default-src 'self';
      img-src 'self' data: blob: res.cloudinary.com;
      script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://vercel.live https://js.stripe.com;
      connect-src 'self' ${backendUrl} https://vercel.live https://*.pusher.com wss://*.pusher.com https://api.cloudinary.com;
      style-src 'self' 'unsafe-inline';
      font-src 'self';
      frame-src 'self' https://js.stripe.com https://vercel.live;
      worker-src 'self' blob:;
      script-src-elem 'self' https://vercel.live https://js.stripe.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      block-all-mixed-content;
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspValue,
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
