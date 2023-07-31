import React from 'react';
import './header.scss';
import Navbar from '../../molecules/navbar/navbar';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Login', href: '/' },
    { label: 'Login', href: '/login' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  const pathname = usePathname()
  const currentActivePage = pathname;

  return (
    <header>
      <div className='header'>
        <h1>NEXT SPA</h1>
        <Navbar navItems={navItems} currentActivePage={currentActivePage}/>
      </div>
    </header>
  );
};

export default Header;
