This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# orr
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at  dd the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel ll

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





<!-- Fix Hydration Error -->

<!-- const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

return (
  <button>
    {isClient && currentUser ? (
      <Image
        src={currentUser.avatar || "/avatar.png"}
        width={32}
        height={32}
        alt="Profile Image"
        className="rounded-full w-10 shrink"
      />
    ) : (
      <Image
        src="/avatar.png"
        width={32}
        height={32}
        alt="Placeholder Image"
        className="rounded-full w-10 shrink"
      />
    )}
  </button>
); -->



<!-- 
   Example of query

   const { data, error, isLoading } = useApiQuery(
     ['users'],  
     '/users',   
   );

 or

 const { data: userData } = useApiQuery(['user', userId], `/users/${userId}`);



 const mutation = useApiMutation('/users');

 const handleCreateUser = async () => {
   mutation.mutate({ name: 'New User' }, {
     onSuccess: () => {
       console.log('User created successfully');
     },
     onError: (error) => {
       console.error('Error creating user:', error);
     },
   });
 }; -->


 Client: https://orderpay.vercel.app

 Server: https://orderpay-r1p1.onrender.com/api


 Flutterwave Test Card Details
Test Card 1:

Card Number: 5531886652142950
Expiry Date: 12/25
CVV: 123
PIN: 3310
OTP: 12345

