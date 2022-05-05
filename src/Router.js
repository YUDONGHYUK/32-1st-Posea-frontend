import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductsList from './pages/ProductsList/ProductsList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Details from './pages/Details/Details';
import ArrowUp from './components/ArrowUp/ArrowUp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/details/:id" element={<Details />} />
        <Route path="/products/list" element={<ProductsList />} />
      </Routes>
      <Footer />
      <ArrowUp />
    </BrowserRouter>
  );
};

export default Router;
