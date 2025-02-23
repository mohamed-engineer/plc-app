'use client';

import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Background from './components/background';
import styles from './components/BackgroundVideo.module.css';
import Link from 'next/link';
import LogoNav from './images/logo.png';
import Image from 'next/image';
import HeaderIndex from './components/headerIndex';
import Section1 from './components/home/section1';

const BackgroundVideo = () => {
  useEffect(() => {
    const videoElement = document.getElementById('background-video');
    
    const handleRightClick = (event) => {
      event.preventDefault(); // منع القوائم السياقية
    };

    if (videoElement) {
      videoElement.addEventListener('contextmenu', handleRightClick);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('contextmenu', handleRightClick);
      }
    };
  }, []);

  return (
   <>
      <div className={styles.videoContainer}>
        <video
          id='background-video'
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
      <Navbar />

      <HeaderIndex />
<div className="hide">

      <Section1 /></div>
   </> 
  );
}

export default BackgroundVideo;
