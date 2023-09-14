import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { ApartmentCard } from './ApartmentCards/ApartmentCard';
import { Apropos } from './Apropos';
import { NotFoundPage } from './NotFoundPage';

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ApartmentCard/:id" element={<ApartmentCard />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}