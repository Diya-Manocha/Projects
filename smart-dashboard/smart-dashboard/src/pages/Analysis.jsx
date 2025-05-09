import React from "react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Analysis = () => {
  const [data, setData] = useState([
    { month: "Jan", users: "760" },
    { month: "Feb", users: "657" },
    { month: "Mar", users: "564" },
    { month: "Apr", users: "398" },
    { month: "May", users: "768" },
    { month: "June", users: "384" },
    { month: "Jul", users: "952" },
    { month: "Aug", users: "738" },
    { month: "Spt", users: "453" },
    { month: "Oct", users: "843" },
    { month: "Nov", users: "773" },
    { month: "Dec", users: "372" },
  ]);

  const handleChange = (index, newValue) => {
    const updated = [...data];
    updated[index].users = parseInt(newValue) || 0;
    setData(updated);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Growth Analysis</h1>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 space-y-4">
        {data.map((entry, index) => (
          <div key={index} className="flex gap-4 items-center">
            <label className="w-20">{entry.month}</label>
            <input
              type="number"
              value={entry.users}
              onChange={(e) => handleChange(index, e.target.value)}
              className="border rounded px-3 py-1 w-32"
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analysis;
