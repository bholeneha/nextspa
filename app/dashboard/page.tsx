'use client';

import React, { useEffect } from 'react';
import HomeLayout from '../components/templates/home/home';
import Button from '../components/atoms/button/button';
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
        <h1>WELCOME {data?.user?.name?.toUpperCase()}</h1>
        <div className='upcoming-meetings'>
          <Button children='BOOK NEW MEETING' />
        </div>
        <div className='past-meetings'>
          <h2>Past Meetings</h2>
        </div>
        <div className='documents-wrapper'>
          <h2>Documents</h2>
        </div>
      </div>
      </HomeLayout>
  );
};

export default Dashboard;
