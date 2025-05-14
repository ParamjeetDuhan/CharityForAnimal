import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footers from "./components/Footer/Footers";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignUpPage from "./Pages/AuthPages/SignUpPage";
import ForgetPasswordPage from "./Pages/AuthPages/ForgetPasswordPage.jsx";
import ResetPasswordPage from "./Pages/AuthPages/ResetPasswordPage";
import ProfilePage from "./Pages/ProfilePage.jsx";
import Hero from "./components/Hero/Hero.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/SignUpPage" element={<SignUpPage/>}/>
        <Route path="/ForgetPage" element={<ForgetPasswordPage/>}/>
        <Route path="/ResetPage" element={<ResetPasswordPage/>}/>
        <Route path="/" element={<Hero />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/About" element={<About />} />
        <Route path="/Call" element={<Contact />} />
        <Route path="/Profile"   element={<ProfilePage/>}/>
      </Routes>
      <Footers />
    </Router>
  );




  
};

export default App;
