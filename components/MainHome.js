import React from "react";
import styles from '../styles/css/MainHome.module.css'

const MainHome = () => {
  return (
    <>
     

      <video autoPlay muted loop className={styles.video}>
        <source src="/homeVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default MainHome;
