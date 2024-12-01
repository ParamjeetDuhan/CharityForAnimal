import React, { useState } from "react";
import img1 from '../assets/Param.png'

const ProfilePage = () => {
  // Initial state for profile details
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, Anytown, USA",
    bio: "A passionate web developer and designer.",
    Amount_Donated:"5000"
  });

  const [isEditing, setIsEditing] = useState(false); // Track if the user is in editing mode

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Toggle editing mode
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // Render the component
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Header Section */}
        <div className="flex items-center">
          <img
            src={img1}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h1 className="flex-grow text-center text-2xl font-bold">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="border rounded p-1 w-full"
              />
            ) : (
              profile.name
            )}
          </h1>
        </div>

        {/* Details Section */}
        <div className="mt-6">
          <table className="w-full border-collapse border border-gray-200">
            <tbody>
              {["email", "phone", "address", "bio","Amount_Donated"].map((field) => (
                <tr key={field}>
                  <th className="text-left p-3 bg-gray-100 font-medium border-b border-gray-200 capitalize">
                    {field}
                  </th>
                  <td className="p-3 border-b border-gray-200">
                    {isEditing ? (
                      <input
                        type="text"
                        name={field}
                        value={profile[field]}
                        onChange={handleChange}
                        className="border rounded p-1 w-full"
                      />
                    ) : (
                      profile[field]
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end">
          {isEditing ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={toggleEditing}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={toggleEditing}
            >
              Edit
            </button>
          )}
          {isEditing && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

