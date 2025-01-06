import React from 'react'
import Navbar from './components/navbar'
import Background from './components/background'
import styles from './components/BackgroundVideo.module.css'
import Link from 'next/link'
import LogoNav from './images/logo.png';
import Image from 'next/image'
import HeaderIndex from './components/headerIndex'
import Section1 from './components/home/section1'
const page = () => {
  return (
   <>
   <div className={styles.videoContainer} >
      <video
       autoPlay
        muted
        loop
        playsInline
        className=''        
        >
        <source src="background.mp4" type="video/mp4" />
      </video>
    </div>
    {/* Nav bar */}

    <Navbar/>

    <HeaderIndex/>

    <Section1 />
   </> 
  )
}

export default page