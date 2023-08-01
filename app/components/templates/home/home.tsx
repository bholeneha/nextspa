import './home.scss';
import React from "react";
import Header from "../../organisms/header/header"; 

type HomeLayoutProps = {
    children: React.ReactNode;
  }

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main> 
    </>
  );
};

export default HomeLayout;
