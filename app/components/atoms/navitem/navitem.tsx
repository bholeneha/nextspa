import React from "react";
import Link from "next/link";
import './navitem.scss'

type NavItemProps = {
  href: string;
  label: string;
  isActive: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => {
  const linkClassName = isActive ? "nav-item-active" : "nav-item";

  return (
    <Link legacyBehavior href={href}>
      <a className={linkClassName}>{label}</a>
    </Link>
  );
};

export default NavItem;
