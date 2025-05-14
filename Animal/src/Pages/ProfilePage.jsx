import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/v1/Profile/Data", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        alert("Error fetching profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="text-center mt-20 text-red-500">Profile not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
        <table className="w-full border-collapse border border-gray-200">
          <tbody>
            <tr>
              <th className="text-left p-3 bg-gray-100 font-medium border-b border-gray-200">Username</th>
              <td className="p-3 border-b border-gray-200">{profile.username}</td>
            </tr>
            <tr>
              <th className="text-left p-3 bg-gray-100 font-medium border-b border-gray-200">Email</th>
              <td className="p-3 border-b border-gray-200">{profile.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
