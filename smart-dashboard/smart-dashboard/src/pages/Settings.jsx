import { useState } from "react";
import React from "react";

const Settings = () => {
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Admin+User",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name === "name" ? value : prevAdmin.name
      )}`,
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Saved Admin Settings", admin);
  };

  return (
    <>
      <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-xl max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Admin Settings
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block-md-1 text-sm text-gray-600 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={admin.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-600 dark:text-white"
          />

          <div>
            <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200"></label>
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border dark:bg-gray-600 dark:text-white"
            />
          </div>
          <div>
            <img
              src={admin.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;
