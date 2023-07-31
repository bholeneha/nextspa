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
    {label: 'Home', href: '/'},
    { label: 'Login', href: '/login' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  const pathname = usePathname() || '/';
  const currentActivePage = navItems.find(item => (item.href === pathname));

  return (
    <header>
      <div className='header'>
        <h1>NEXT SPA</h1>
        <Navbar currentActivePage={currentActivePage}/>
      </div>
    </header>
  );
};

export default Header;
