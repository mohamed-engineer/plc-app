import React from 'react'
import styles from './BackgroundVideo.module.css'

const Background = () => {
  return (
    <>
     <div className={styles.videoContainer}>
      <video
       autoPlay
        muted
        loop
        playsInline
        className={styles.videoBackground}
        >
        <source src="background.mp4" type="video/mp4" />
      </video>
    </div>
    </>
  )
}

export default Background;