import React, { useState } from "react";
import UserTable from "../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState([
    {
      name: "Shina Arora",
      email: "shina@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Rahul+Kumar`,
    },
    {
      name: "Priya Verma",
      email: "priya@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Priya+Verma`,
    },
    {
      name: "Amit Patel",
      email: "amit@gmail.com",
      active: false,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
    {
      name: "Riya Sharma",
      email: "riya@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
    {
      name: "Sunny Mehta",
      email: "sunnymehta@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
    {
      name: "Avi Khurana",
      email: "avi@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
    {
      name: "Bhavya Suri",
      email: "suribhavya@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
    {
      name: "Neha Mehta",
      email: "nehamehta@gmail.com",
      active: false,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
    {
      name: "Anjali Thakur",
      email: "anjali@gmail.com",
      active: true,
      avatar: `https://ui-avatars.com/api/?name=Amit+Patel`,
    },
  ]);


  const [searchUser, setSearchUser] = useState("")
  
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  
  const deleteUser = (email) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  };

  const filteredUser = users.filter((user) =>
  user.name.toLowerCase().includes(searchUser.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-800">Users</h1>

      <input type="text"
      placeholder="Search by name..."
      value={searchUser}
      onChange={(e)=>setSearchUser(e.target.value)
      }
      className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
      />

      {filteredUser.length > 0 ? (
  <UserTable users={filteredUser}
  addUser={addUser}
  deleteUser={deleteUser}
  setUsers={setUsers}  />

      ):(
        <p className="text-gray-600 dark:text-gary-600">No users found.</p>  
      )
      
      }
        </div>
  );
};

export default Users;
