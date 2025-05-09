import React, { useState } from "react";
import StarCard from "../components/StarCard";
import UserTable from "../components/UserTable";
import {toast} from 'react-hot-toast'

const Dashboard = () => {
  const [stats, setStates] = useState([
    { title: "Total Users", value: 1250 },
    { title: "Monthly Sales", value: "₹45,000" },
    { title: "Active Subscriptions", value: 320 },
  ]);

  const [users, setUsers] = useState([
    {
      name: "Shina Arora",
      email: "shina@gmail.com",
      active: true,
      avatar: "https://ui-avatars.com/api/?name=Rahul+Kumar",
    },
    {
      name: "Priya Verma",
      email: "priya@gmail.com",
      active: true,
      avatar: "https://ui-avatars.com/api/?name=Priya+Verma",
    },
    {
      name: "Amit Patel",
      email: "amit@gmail.com",
      active: false,
      avatar: "https://ui-avatars.com/api/?name=Amit+Patel",
    },
  ]);

  const addUser = (newUser) => {
    setUsers((prev)=>[...prev, newUser]);
  };

  const deleteUser = (emailToDelete) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.email !== emailToDelete)
    );
    toast.success('User deleted successfully!');
  };
  

  
  return (  
    <>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stats, index) => (
            <StarCard key={index} title={stats.title} value={stats.value} />
          ))}
        </div>

      

        <UserTable users={users} addUser={addUser} deleteUser={deleteUser} setUsers={setUsers} />

          <div className="bg-white dark:bg-gray-500 p-4 rounded-xl shadow h-64">
          <p className="text-gray-500">Analytics (Coming Soon...)</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
