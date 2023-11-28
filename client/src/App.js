// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import HU1Page from './components/HU1Page';
import HU2Page from './components/HU2Page';
import HU3Page from './components/HU3Page';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hu1" element={<HU1Page />} />
          <Route path="/hu2" element={<HU2Page />} />
          <Route path="/hu3" element={<HU3Page />} />
        </Routes>
      </div>
  );
}

export default App;
