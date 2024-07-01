import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Principal from './pages/Principal';
import H1 from './pages/H1';
import H2 from './pages/H2';
import Signin from './pages/Signin';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/dashboard/principal" element={<Principal />} />
        <Route path="/dashboard/h1" element={<H1 />} />
        <Route path="/dashboard/h2" element={<H2 />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
