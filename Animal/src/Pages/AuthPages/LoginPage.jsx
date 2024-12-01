import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to manage form errors
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Simple validation to check if both fields are filled
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    // Mock authentication check (replace with actual API call)
    const validEmail = "Paramjeetsingh67616@gmail.com";
    const validPassword = "Param@123";

    if (formData.email === validEmail && formData.password === validPassword) {
      alert("Login successful!");
      // Redirect or perform further actions here, e.g., redirecting to a dashboard
    } else {
      setError("Invalid email or password."); // Show error message for invalid credentials
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-primary to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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




