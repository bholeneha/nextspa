'use client';

import React, { useEffect } from 'react';
import HomeLayout from '../components/templates/home/home';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import './dashboard.scss';

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
      <div className='dashboard' > 
        <h1>Welcome {data?.user?.name}</h1>
        <div className='upcoming-meetings'></div>
        <div className='past-meetings'></div>
        <div className='documents-wrapper'></div>
      </div>
      </HomeLayout>
  );
};

export default Dashboard;
