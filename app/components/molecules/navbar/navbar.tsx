import React from 'react';
import "./navbar.scss";
import NavItem from '../../atoms/navitem/navitem';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
  currentActivePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, currentActivePage }) => {

  return (
    <nav className='navbar'>
      <ul>
        {navItems.map((item) => (
          // Check if the href of the item matches the currentActivePage
          item.href === currentActivePage && (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

