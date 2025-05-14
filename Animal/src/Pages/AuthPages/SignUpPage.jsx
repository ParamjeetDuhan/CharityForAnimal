import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post("http://localhost:9000/api/v1/user/register", formData);
      if (res) {
        alert(res.data.message);
        navigate("/Login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-primary to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg mt-20">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none ${
                errors.username ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"
              }`}
              placeholder="Enter your full name"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none ${
                errors.password ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
