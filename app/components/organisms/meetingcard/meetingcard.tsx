
import React from 'react';

interface MeetingCardProps {
  date: string;
  time: string;
  serviceType: string;
  spaSpecialist: string;
  location: string;
  className?: string; // Optional prop for custom class name
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  date,
  time,
  serviceType,
  spaSpecialist,
  location,
  className = '', // Default value is an empty string
}) => {
  return (
    <div className={`meeting-card ${className}`}>
      <h3>Date: {date}</h3>
      <p>Time: {time}</p>
      <p>Type: {serviceType}</p>
      <p>With: {spaSpecialist}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default MeetingCard;
