import React from 'react';
import Link from "next/link";
import LogoNav from '../images/logo.png';
import './navbar.css';
import Image from 'next/image';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
   <Link className="navbar-brand col-4" href="#">
   <Image
    src={LogoNav} 
    width={400}
   />
   </Link>
   <ul className='nav' >
    <li className="nav-item">
   <Link href={'#'} className='nav-link text-black'>Home</Link>   
    </li>
    <li className="nav-item">
  <Link href={'#'} className='nav-link text-black'>
  Shop
  </Link>
    </li>
    <li className="nav-item">
<Link href={'#'} className='nav-link text-black'>
Courses
</Link>
    </li>


    <li className="nav-item">
    <Link className="nav-link text-black" href={''}>
    Shop
    </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link text-black" href={''}>
    Who us
    </Link>
    </li>

    <li className="nav-item1 login-button">
    <Link className="nav-link text-white " href={''}>
    Login
    </Link>
    </li>
   </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar