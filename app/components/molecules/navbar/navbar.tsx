import "./navbar.scss";
import React from 'react';
import NavItem from '../../atoms/navitem/navitem';

interface NavbarProps {
  currentActivePage: {
    label: string;
    href:string;
  };
}

const Navbar: React.FC<NavbarProps> = ({ currentActivePage }) => {

  return (
    <nav className='navbar'>
      <ul>
        <NavItem label={currentActivePage.label} href={currentActivePage.href}/>
      </ul>
    </nav>
  );
};

export default Navbar;

