import React from 'react';
import './header.scss';
import Navbar from '../../molecules/navbar/navbar';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Login', href: '/login' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <header className='header'>
      <h1>NEXT SPA</h1>
      <Navbar navItems={navItems} />
    </header>
  );
};

export default Header;
