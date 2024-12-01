import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  // State to manage the email input
  const [email, setEmail] = useState("");
  // State to manage the success or error message
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation to check if the email is provided
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    // Mock function to simulate sending an email
    // Replace this with an actual API call to send reset instructions
    if (email === "paramjeetsingh16346@gmail.com") {
      setMessage("Password reset instructions have been sent to your email.");
    } else {
      setMessage("Email not found. Please check your email address.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-primary to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Forgot Password
        </h2>
        <p className="text-sm text-center text-gray-600">
          Enter your email address below, and we’ll send you instructions to reset your password.
        </p>
        {message && (
          <p className={`text-center ${message.includes("sent") ? "text-green-500" : "text-red-500"} text-sm`}>
            {message}
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Reset Instructions
          </button>
        </form>
        <div className="text-center">
          <Link to="/Login" className="text-sm text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;

