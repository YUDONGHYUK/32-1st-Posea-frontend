import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductsList from './pages/ProductsList/ProductsList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<ProductsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
