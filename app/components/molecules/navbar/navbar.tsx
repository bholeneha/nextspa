'use client';

import React from "react";
import NavItem from "../../atoms/navitem/navitem";
import { useRouter } from "next/navigation";
import './navbar.scss';

type NavBarProps = {};

const Navbar: React.FC<NavBarProps> = () => {
  const router = useRouter();
  const isDashboardActive = router.pathname === "/dashboard"; // Needs fixing
  const isLoginActive = router.pathname === "/login"; // Needs fixing

  return (
      <nav className="navbar">
        <NavItem href="/dashboard" label="Dashboard" isActive={isDashboardActive} />
        <NavItem href="/login" label="Login" isActive={isLoginActive} />
      </nav>
  );
};

export default Navbar;
