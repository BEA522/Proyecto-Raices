import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './styles/layout.css';

import Header from "./components/layout/Header";
//import NavBar from "./components/layout/Nav";
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
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tradicion" element={<TradicionPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
