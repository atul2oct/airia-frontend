import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDashboard from './Pages/ProductDashboard';
import Dashboard from './Pages/Dashboard';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
    </div>
);
};

export default App;
