import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { Maininfo } from '../../Components/Main/Maininfo';
import styles from './MainPage.module.css';
import banner from './banner.jpg';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Header />
      <div>
        <img src={banner} className="banner" alt='banner' />
        <Maininfo />
      </div>
      <Footer />
      </div>
  );
};
