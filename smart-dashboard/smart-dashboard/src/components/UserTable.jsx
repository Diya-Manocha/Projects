import React from "react";
import { useState } from "react";
import {toast} from 'react-hot-toast'

const UserTable = ({ users, addUser, deleteUser, setUsers }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    active: true,
    avatar: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleEvent = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;
    const userToAdd = {
      ...newUser,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        newUser.name
      )}`,
    };

    if (isEditing) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = userToAdd;
      setUsers(updatedUsers);
      setIsEditing(false);
      setEditIndex(null);
      toast.success('User Updated Successfully')
    } else {
      addUser(userToAdd);
      toast.success('User Added Successfully')
    }

    setNewUser({ name: "", email: "", active: true, avatar: "" });
  };

  return (
    <div className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800  dark:text-white">
        Recent Users
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="text-gray-600 dark:text-gray-300 text-sm border-b">
            <tr>
              <th className="py-3">User</th>
              <th className="py-3">Email</th>
              <th className="py-3">Status</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="flex items-center gap-3 py-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-800 dark:text-white">
                    {user.name}
                  </span>
                </td>
                <td className="py-3 text-gray-700 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      user.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 space-x-2">
                  <button
                    className="text-blue-600 hover:underline text-sm"
                    onClick={() => {
                      setNewUser(user);
                      setIsEditing(true);
                      setEditIndex(i);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline text-sm"
                    onClick={() => deleteUser(user.email)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={handleEvent} className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-white">
          Add New User
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            placeholder="Full Name"
            className="px-4 py-2 rounded border dark:bg-gray-600 dark:text-white"
            required
          />
          <input
            type="text"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="Email"
            className="px-4 py-2 rounded border dark:bg-gray-600 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
           {isEditing ? "Update User" : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserTable;
