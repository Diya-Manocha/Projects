// src/components/Sidebar.jsx
import { Home, BarChart2, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 shadow-md p-4">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-500">
          <Home size={20} /> <Link to='/'>Home</Link>
        </li>
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-500">
          <BarChart2 size={20} />  <Link to='/analysis'>Analytics</Link>
        </li>
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-500">
          <Users size={20} /> <Link to='/Users'>Users</Link>
        </li>
        <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-500">
          <Settings size={20} /> <Link to='/Settings'>Settings</Link>
        </li>
        {/* <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-500">
           <Link to='/Chatbot'>Chatbot</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
