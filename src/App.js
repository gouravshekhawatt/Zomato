import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import DingingOut from "./components/diningOut/DingingOut";
import Delivery from "./components/delivery/Delivery";
import Nigthtlife from "./components/nightlife/Nigthtlife"
import Header from './components/common/header/Header';
import Footer  from "./components/common/footer/Footer"

// ... your other imports

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dining-out" element={<DingingOut />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/night-life" element={<Nigthtlife />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
};

export default App;
