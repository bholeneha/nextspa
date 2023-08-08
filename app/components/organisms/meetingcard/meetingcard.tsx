import React from 'react';
import { FaEdit } from 'react-icons/fa';
import './meetingcard.scss';
import Button from '../../atoms/button/button';

interface MeetingCardProps {
  date: string;
  time: string;
  serviceType: string;
  spaSpecialist: string;
  location: string;
  notes?: string;
  className?: string;
  setModal?: () => void;
  setInitialValues?: (meeting: {
    date: string;
    time: string;
    serviceType: string;
    spaSpecialist: string;
    location: string;
  }) => void;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  date,
  time,
  serviceType,
  spaSpecialist,
  location,
  notes,
  className = '',
  setModal,
  setInitialValues
}) => {

  const dateObject = new Date(date);
  const day = dateObject.toLocaleDateString('en-US', { weekday: 'short' });
  const month = dateObject.toLocaleDateString('en-US', { month: 'short' });
  const numericDate = dateObject.toLocaleDateString('en-US', { day: 'numeric' });

  const startTime = new Date(`2023-08-04T${time}`);
  const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); 
  const formattedStartTime = startTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const formattedEndTime = endTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const hasPastMeetingsClass = className.includes('past-meeting');

  const meeting = {
    date,
    time,
    serviceType,
    spaSpecialist,
    location,
    notes
  };

  const onEdit = () => {
    if(!hasPastMeetingsClass && setModal && setInitialValues){
      setModal();
      setInitialValues(meeting);
    } 
  }


  return (
    <div className={`meeting-card ${className}`}>
      <div className='meeting-date'>
        <span style={{ display: 'block', fontSize: '1.1rem' }}>{month}</span>
        <span style={{ display: 'block', fontSize: '1.3rem', fontWeight: 'bold' }}>{numericDate}</span>
        <span style={{ display: 'block', fontSize: '0.9rem'}}>{day}</span>
      </div>
      <div className='meeting-info'>
        <p><strong>UPCOMING MEETING</strong></p>
        <p>{serviceType} with {spaSpecialist}</p>
        <p>at {location}</p>
      </div>
      <div className='meeting-time'>
        <span style={{ display: 'block', fontSize: '1rem', fontWeight: 'bold' }}>{formattedStartTime}</span>
        <span style={{ display: 'block', fontSize: '0.9rem' }}>to</span>
        <span style={{ display: 'block', fontSize: '1rem', fontWeight: 'bold'}}>{formattedEndTime}</span>
      </div>
      {!hasPastMeetingsClass && (
        <div className="meeting-edit">
          <Button className='edit-btn' onClick={onEdit}><FaEdit /></Button>
        </div>
      )}
    </div>
  );
};

export default MeetingCard;
