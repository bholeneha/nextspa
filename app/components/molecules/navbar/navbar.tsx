import React from 'react';
import "./navbar.scss";
import NavItem from '../../atoms/navitem/navitem';

interface NavbarProps {
  navItems: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  return (
    <nav className='nav-wrapper'>
      <ul className='navbar'>
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

