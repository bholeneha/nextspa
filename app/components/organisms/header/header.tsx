import React from 'react';
import './header.scss';
import Navbar from '../../molecules/navbar/navbar';
import { usePathname } from 'next/navigation';

interface currentPathInfo {
  label: string;
  href: string;
};

const Header: React.FC = () => {

  const navItems = [
    {label: 'HOME', href: '/'},
    { label: 'LOGIN', href: '/login' },
    { label: 'DASHBOARD', href: '/dashboard' },
  ];

  const pathname = usePathname();
  const currentActivePage = navItems.find(item => (item.href === pathname)) ?? {label: 'HOME', href: '/'};

  return (
    <header>
      <div className='header'>
        <h1>NEXTSPA</h1>
        <Navbar currentActivePage={currentActivePage}/>
      </div>
    </header>
  );
};

export default Header;
