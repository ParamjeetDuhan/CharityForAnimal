import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Home from "./components/Home/Home";
import Contact from "./Pages/Contact";
import Footers from "./components/Footer/Footers";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignUpPage from "./Pages/AuthPages/SignUpPage";
import ForgetPasswordPage from "./Pages/AuthPages/ForgetPasswordPage.jsX";
import ResetPasswordPage from "./Pages/AuthPages/ResetPasswordPage";
import ProfilePage from "./Pages/AuthPages/ProfilePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/About" element={<About />} />
        <Route path="/Call" element={<Contact />} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/SignUpPage" element={<SignUpPage/>}/>
        <Route path="/ForgetPage" element={<ForgetPasswordPage/>}/>
        <Route path="/ResetPage" element={<ResetPasswordPage/>}/>
        <Route path="/Profile" element={<ProfilePage/>}/>
      </Routes>
      <Footers />
    </Router>
  );
};

export default App;
