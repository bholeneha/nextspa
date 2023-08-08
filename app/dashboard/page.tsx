'use client';

import React, { useEffect, useState } from 'react';
import HomeLayout from '../components/templates/home/home';
import Button from '../components/atoms/button/button';
import Modal from '../components/organisms/modal/modal';
import MeetingCard from '../components/organisms/meetingcard/meetingcard';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import meetings from '../utils/meetings';
import './dashboard.scss';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const {data, status: sessionStatus} = useSession()
  const [modal, setModal] = useState(false);
  const [futureMeetings, setFutureMeetings] = useState<Meeting[]>([]);
  const [pastMeetings, setPastMeetings] = useState<Meeting[]>([]);
  
  const [futureCurrentPage, setFutureCurrentPage] = useState<number>(1);
  const [pastCurrentPage, setPastCurrentPage] = useState<number>(1);
  const meetingsPerPage = 3;

  const totalFuturePages = Math.ceil(futureMeetings.length / meetingsPerPage);
  const totalPastPages = Math.ceil(pastMeetings.length / meetingsPerPage);

  const handleNextFuturePage = () => {
    setFutureCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevFuturePage = () => {
    setFutureCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPastPage = () => {
    setPastCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPastPage = () => {
    setPastCurrentPage((prevPage) => prevPage - 1);
  };

  const renderFutureMeetings = futureMeetings.slice(
    (futureCurrentPage - 1) * meetingsPerPage,
    (futureCurrentPage - 1) * meetingsPerPage + meetingsPerPage
  );
  
  const renderPastMeetings = pastMeetings.slice(
    (pastCurrentPage - 1) * meetingsPerPage,
    (pastCurrentPage - 1) * meetingsPerPage + meetingsPerPage
  );
  

  useEffect(() => {
    if(sessionStatus === 'unauthenticated') {
      router.push('/login');
    } else {
      const today = new Date().toISOString().split('T')[0];
      const future = meetings.filter((meeting) => meeting.date >= today);
      const past = meetings.filter((meeting) => meeting.date < today);

      setFutureMeetings(future);
      setPastMeetings(past);
    }
  }, [sessionStatus, router])

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <HomeLayout>
      <div className='dashboard' > 
        <h1>WELCOME {data?.user?.name?.toUpperCase()}</h1>
        <div className='upcoming-meetings-wrapper'>
          <div className="upcoming-meetings">
            {renderFutureMeetings.map((meeting) => (
                <MeetingCard
                  key={meeting.id}
                  date={meeting.date}
                  time={meeting.time}
                  serviceType={meeting.serviceType}
                  spaSpecialist={meeting.spaSpecialist}
                  location={meeting.location}
                  className="future-meeting"
                />
            ))}
          </div>
          <div className="pagination">
            {futureCurrentPage > 1 && <button onClick={handlePrevFuturePage}>Previous</button>}
            {futureCurrentPage < totalFuturePages && <button onClick={handleNextFuturePage}>Next</button>}
          </div>
          <Button onClick={toggleModal}>BOOK NEW MEETING</Button>
        </div>
        <div className='past-meetings-wrapper'>
          <h2>Past Meetings</h2>
          <div className="past-meetings">
            {renderPastMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                date={meeting.date}
                time={meeting.time}
                serviceType={meeting.serviceType}
                spaSpecialist={meeting.spaSpecialist}
                location={meeting.location}
                className="past-meeting"
              />
            ))}
            <div className="pagination">
              {pastCurrentPage > 1 && <Button onClick={handlePrevPastPage}>Previous</Button>}
              {pastCurrentPage < totalPastPages && <Button onClick={handleNextPastPage}>Next</Button>}
            </div>
          </div>
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
