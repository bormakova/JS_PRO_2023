import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { Maininfo } from '../../Components/Main/Maininfo';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <span>MainPage</span>
      <Maininfo />
      <Footer />
      </div>
  );
};
