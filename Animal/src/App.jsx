import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import Privacy from './Pages/Privacy';
import About from './Pages/About';
import Home from './components/Home/Home';
import Contact from './Pages/Contact';
import Footers from './components/Footer/Footers';
import SignUp from './Pages/AuthPages/SignUp';
import Login from './Pages/AuthPages/Login';

const App = () => {
  return (
    <Router>
       <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Call" element={<Contact/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        <Footers/>
    </Router>
  );
};

export default App;
