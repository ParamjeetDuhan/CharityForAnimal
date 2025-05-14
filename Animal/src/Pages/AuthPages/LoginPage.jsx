import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
     const res =  await axios.post("http://localhost:9000/api/v1/user/login",formData);
     alert(res.data.message);
      localStorage.setItem("token",res.data.token);
             localStorage.setItem("username",res.data.name);
     navigate("/")
   } catch (error) {
      alert(error.response.data.message);
   }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-primary to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="text-blue-600 rounded focus:ring-blue-400" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="/ForgetPage" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/ResetPage" className="text-sm text-blue-500 hover:underline">
              Reset Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/SignUpPage" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;




