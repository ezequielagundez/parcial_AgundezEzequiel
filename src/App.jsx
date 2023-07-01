import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Contacto from './Pages/Contacto';
import Favoritos from './Pages/Favoritos';
import Footer from './Components/Footer'
import DentistDetails from './Pages/DentistDetails';
import NotFoundPage from './Pages/NotFoundPage';
import { ThemeProvider, ThemeContext } from './Components/ThemeContext';
import './App.css';

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const handleDarkModeToggle = () => {
    // Toggles dark mode logic
  };

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ darkMode }) => (
          <BrowserRouter>
            <div className={`content_app ${darkMode ? 'dark_mode' : 'white_mode'}`}>
              
                <Header handleDarkModeToggle={handleDarkModeToggle} />
              
              <div className={` ${darkMode ? 'dark_mode' : 'white_mode'}`}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} />
                  <Route path="/dentista/:id" element={<DentistDetails />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer/>
              </div>
            </div>
          </BrowserRouter>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;

