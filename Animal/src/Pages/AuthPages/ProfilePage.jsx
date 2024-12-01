import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t bg-white">
      <div className="">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Profile
        </h2>
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/150" // Replace with actual user profile image URL
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/EditProfilePage"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
