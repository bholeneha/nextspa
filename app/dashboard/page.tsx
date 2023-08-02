'use client';

import React, { useEffect, useState } from 'react';
import HomeLayout from '../components/templates/home/home';
import Button from '../components/atoms/button/button';
import Modal from '../components/organisms/modal/modal';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import './dashboard.scss';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const {data, status: sessionStatus} = useSession()
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if(sessionStatus === 'unauthenticated') {
      router.push('/login');
    }
  }, [sessionStatus, router])

  const toggleModal = () => {
    console.log('triggered the toggle');
    setModal(!modal);
    console.log(modal);
  }

  return (
    <HomeLayout>
      <div className='dashboard' > 
        <h1>WELCOME {data?.user?.name?.toUpperCase()}</h1>
        <div className='upcoming-meetings'>
          <Button onClick={toggleModal}>BOOK NEW MEETING</Button>
        </div>
        <div className='past-meetings'>
          <h2>Past Meetings</h2>
        </div>
        <div className='documents-wrapper'>
          <h2>Documents</h2>
        </div>
      </div>
      {modal && <Modal toggleModal={toggleModal}/>}
      </HomeLayout>
  );
};

export default Dashboard;
