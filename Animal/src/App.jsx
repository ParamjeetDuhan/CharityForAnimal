import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
import PrivateRoute from "./services/Protected";  // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/ForgetPage" element={<ForgetPasswordPage />} />
        <Route path="/ResetPage" element={<ResetPasswordPage />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
         <Route path="/" element={<Hero />} />
        <Route path="/Profile" element={<ProfilePage />} />
         <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/About" element={<About />} />
        <Route path="/Call" element={<Contact />} />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Footers />
    </Router>
  );
};

export default App;

