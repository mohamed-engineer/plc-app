"use client";

import React, { useState } from 'react';
import Link from "next/link";
import LogoNav from '../images/logo.png';
import './navbar.css';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // دالة لتبديل حالة القائمة
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand col-4" href="#">
          <Image 
            src={LogoNav} 
            width={700} 
            height={300} 
            alt="Logo"
          />
        </Link>
        
        {/* زر القائمة */}
        <button id="bars" className="bars-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* القائمة */}
        <ul className={`nav ${isMenuOpen ? 'show-menu' : 'hide-menu'}`}>
        <li className="nav-item">
            <Link href="#" className="nav-link text-black">Home</Link>   
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link text-black">Shop</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link text-black">Courses</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link text-black">Who us</Link>
          </li>
          <li className="nav-item1 login-button">
            <Link href="#" className="nav-link text-white">Login</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
