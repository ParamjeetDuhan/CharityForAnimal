import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Password validation
    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required.";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters long.";
    }

    // Confirm password validation
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setErrors({});
      setSuccessMessage("Password has been successfully reset!");
      // Clear form data (optional)
      setFormData({
        newPassword: "",
        confirmPassword: "",
      });
      // Add logic to send data to the server (e.g., API call)
      console.log("Password reset data:", formData);
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-primary to-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Reset Password
        </h2>
        <p className="text-sm text-center text-gray-600">
          Enter a new password for your account.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none ${
                errors.newPassword ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"
              }`}
              placeholder="Enter your new password"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-400"
              }`}
              placeholder="Confirm your new password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Reset Password
          </button>
        </form>
        {successMessage && (
          <p className="text-center text-green-500 mt-4">{successMessage}</p>
        )}
        <div className="text-center">
          <Link to="/Login" className="text-sm text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
