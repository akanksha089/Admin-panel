import React from "react";
import Sidebar from "../components/Sidebar"
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

// Register required chart components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const Dashboard = () => {
  const lineData = {
    labels: ["Nov 1", "Nov 5", "Nov 10", "Nov 15", "Nov 20", "Nov 25"],
    datasets: [
      {
        label: "Total Balance",
        data: [97000, 98000, 99000, 100000, 105000, 107843],
        borderColor: "#4ade80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Subscriptions", "Dining", "Mortgage", "Groceries"],
    datasets: [
      {
        data: [20, 30, 25, 25],
        backgroundColor: ["#ffb300", "#ff4c4c", "#4ade80", "#00bfff"],
      },
    ],
  };

  const recentActivities = [
    { id: 1, activity: "Completed Design Task", time: "2 hours ago" },
    { id: 2, activity: "Integrated API", time: "1 day ago" },
    { id: 3, activity: "Tested UI", time: "3 days ago" },
    { id: 4, activity: "Database Update", time: "5 days ago" },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-72 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-12">
          <h2 className="text-4xl font-semibold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Welcome Back, Trader!
          </h2>
          <p className="text-gray-400 mt-2">Here’s your crypto portfolio and recent activities.</p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-xl shadow-2xl hover:scale-105 transform transition-transform">
            <h3 className="text-xl font-semibold text-gray-200">Total Balance</h3>
            <p className="text-4xl font-bold mt-2 text-gray-100">$107,843</p>
            <p className="text-sm text-gray-300 mt-2">+2.3% in the last 24h</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-xl shadow-2xl hover:scale-105 transform transition-transform">
            <h3 className="text-xl font-semibold text-gray-200">Revenue</h3>
            <p className="text-4xl font-bold mt-2 text-gray-100">$1,380</p>
            <p className="text-sm text-gray-300 mt-2">+4.1% from last week</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-xl shadow-2xl hover:scale-105 transform transition-transform">
            <h3 className="text-xl font-semibold text-gray-200">Today's Orders</h3>
            <p className="text-4xl font-bold mt-2 text-gray-100">53</p>
            <p className="text-sm text-gray-300 mt-2">+5 new orders</p>
          </div>
        </div>

        {/* Charts and Recent Activities */}
        <div className="grid grid-cols-3 gap-8">
          {/* Line Chart */}
          <div className="col-span-1 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg h-[300px]">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Portfolio Growth</h3>
            <Line
              data={lineData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: "#fff",
                    },
                  },
                },
                scales: {
                  x: {
                    ticks: { color: "#fff" },
                    grid: { color: "rgba(255,255,255,0.1)" },
                  },
                  y: {
                    ticks: { color: "#fff" },
                    grid: { color: "rgba(255,255,255,0.1)" },
                  },
                },
              }}
            />
          </div>

          {/* Pie Chart */}
          <div className="col-span-1 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg h-[300px]">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Asset Allocation</h3>
            <Pie
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      color: "#fff",
                    },
                  },
                },
              }}
            />
          </div>


          {/* Recent Activities */}
          <div className="col-span-1 bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Recent Activities</h3>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex justify-between text-gray-300">
                  <span>{activity.activity}</span>
                  <span className="text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
