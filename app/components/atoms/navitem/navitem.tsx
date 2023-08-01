import React from 'react';
import Link from 'next/link';
import './navitem.scss'

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <li className='navitem'>
       <Link href={href}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
