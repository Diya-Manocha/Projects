import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import {Toaster} from 'react-hot-toast'
import Analysis from "./pages/Analysis";
import Chatbot from "./pages/Chatbot";


function App() {
  return (
    <>
    <Toaster/>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Dashboard />} />      
    <Route path="users" element={<Users />} />
    <Route path="analysis" element={<Analysis />} />
    <Route path="settings" element={<Settings />} />
    {/* <Route path="chatbot" element={<Chatbot />} /> */}
  </Route>
</Routes>
</>
  );
};

export default App;
