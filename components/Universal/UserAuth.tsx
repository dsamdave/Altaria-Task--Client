import { useAppSelector } from '@/redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';



const UserAuth = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const router = useRouter();


  useEffect(() => {
    const { accessToken, role } = currentUser || {};
  
    if (!accessToken || (role !== "patient" && role !== "user")) {
        toast.error("Please log in!");
        router.push('/dashboard/auth/login');
      }
    
  }, [currentUser, router]);
  


  return null;
};

export default UserAuth;

