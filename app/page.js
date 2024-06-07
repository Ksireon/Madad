'use client'

import React from 'react';
import MadadPage from './Component/Header';
import Case from './Component/Case';
import Services from './Component/Services';
import Reviews from './Component/Reviews';
import Sta from './Component/Sta';
import MyForm from './Component/MyForm';
import Footer from './Component/Footer';

const HomePage = () => {
  return (
    <div>
      <MadadPage />
      <Case />
      <Services />
      <Reviews />
      <Sta />
      <MyForm />
      <Footer />
    </div>
  );
};

export default HomePage;
