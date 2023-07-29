'use client';

import React from "react";
import NavBar from "../../molecules/navbar/navbar";
import './header.scss';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="header">
      <div>NextSpa</div>
      <NavBar />
    </header>
  );
};

export default Header;
