import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import Media from './components/Media/Media';
import Weather from './components/Weather/Weather';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<HomePage />}>
          <Route path='Media' element={<Media />} />
          <Route path="Weather" element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
