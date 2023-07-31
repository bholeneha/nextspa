import React from "react";
import './meetingcard.scss'

type MeetingCardProps = {
  children: React.ReactNode;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ children }) => {
  return <p className="meeting-card">{children}</p>;
};

export default MeetingCard;
