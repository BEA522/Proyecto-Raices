import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/layout.css';

import Header from "./components/layout/Header";
import NavBar from "./components/layout/Nav";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import TradicionPage from "./pages/TradicionPage";
import GaleriaPage from "./pages/GaleriaPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";



const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Tradicion" element={<TradicionPage />} />
          <Route path="/Galeria" element={<GaleriaPage />} />
          <Route path="/Novedades" element={<NovedadesPage />} />
          <Route path="/Contacto" element={<ContactoPage />} />
        </Routes>
        </Main>
        <Footer />
    </Router>
  );
}

export default App;
