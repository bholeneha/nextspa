'use client';

import React, { useEffect } from 'react';
import HomeLayout from '../components/templates/home/home';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Dashboard: React.FC = () => {

  const router = useRouter();

  const {data, status: sessionStatus} = useSession()

  useEffect(() => {
    if(sessionStatus === 'unauthenticated') {
      router.push('/login');
    }
  }, [sessionStatus, router])

  return (
    <HomeLayout>
      {data?.user ? (
        <h1>Welcome {data.user.name}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </HomeLayout>
  );
};

export default Dashboard;
