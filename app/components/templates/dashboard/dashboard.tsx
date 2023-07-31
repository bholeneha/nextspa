import './dashboard.scss';
import React from "react";
import HomeLayout from "../../templates/home/home"; 

type DashboardLayoutProps = {
    children: React.ReactNode;
  }

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <HomeLayout>
      <div className='meetings-wrapper' > 
        <div className='upcoming-meetings'></div>
        <div className='past-meetings'></div>
      </div>
      <div className='documents-wrapper'> </div>
      </HomeLayout>
    </>
  );
};

export default DashboardLayout;
