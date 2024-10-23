import { useAppSelector } from '@/redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const MOBILE_SCREEN_WIDTH = 768;


const Auth = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const router = useRouter();


  useEffect(() => {
    const { accessToken, role } = currentUser || {};
  
    if (!accessToken || role !== "admin") {
      toast.error("Please log in as admin!");
      router.push('/dashboard');
    }
    
  }, [currentUser, router]);
  




  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= MOBILE_SCREEN_WIDTH) {
  //       toast.error('Please open this dashboard on a computer for a better experience.');
  //       router.push('/');
  //     }
  //   };

  //   handleResize(); // Check size on initial render
  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, [router]);


//   Example of query

//   const { data, error, isLoading } = useApiQuery(
//     ['users'], // Query key
//     '/users',  // API endpoint
//   );

// or

// const { data: userData } = useApiQuery(['user', userId], `/users/${userId}`);



// const mutation = useApiMutation('/users');

// const handleCreateUser = async () => {
//   mutation.mutate({ name: 'New User' }, {
//     onSuccess: () => {
//       console.log('User created successfully');
//     },
//     onError: (error) => {
//       console.error('Error creating user:', error);
//     },
//   });
// };

  return null;
};

export default Auth;

// mutation example

// const queryClient = useQueryClient(); 
  

// const { mutate: createUser, isLoading, error } = useApiMutation(
//   '/users', 
//   {
//     onSuccess: (data) => {
//       console.log('User created successfully!');

//       queryClient.invalidateQueries(['users']);  
//       queryClient.invalidateQueries(['posts']);  

//     },
//     onError: (error) => {
//       console.error('Error creating user', error);
//     },
//   }
// );

// const handleSubmit = (userData) => {
//   createUser(userData); 
// };
