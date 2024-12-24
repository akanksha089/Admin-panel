
import { useState } from 'react';
import Sidebar from "../components/Sidebar"
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from 'react-icons/fa'; // Import icons for Edit, Delete, View, Add

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for handling modal visibility
  const [userData, setUserData] = useState({ name: '', coins: '', lastActive: '' });

  // Function to handle opening and closing of the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userData); // Handle user data submission here
    closeModal(); // Close modal after submission
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Sidebar */}
      <Sidebar />
  
      {/* Main Content */}
      <div className="flex-1 ml-72 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-12">
          <h2 className="text-4xl font-semibold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            User List
          </h2>
          <p className="text-gray-400 mt-2">Browse the active users on the platform.</p>
        </header>
    
        {/* Add User Button */}
        <div className="flex justify-end mb-8">
          <button
            className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            onClick={openModal} // Open modal when clicked
          >
            <FaPlus className="mr-2 inline" />
            Add User
          </button>
        </div>
    
        {/* User Table */}
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Users Overview</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm text-gray-400">User</th>
                <th className="px-6 py-4 text-left text-sm text-gray-400">Coins</th>
                <th className="px-6 py-4 text-left text-sm text-gray-400">Last Active</th>
                <th className="px-6 py-4 text-left text-sm text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example User Row */}
              <tr className="hover:bg-cyan-500/10 cursor-pointer">
                <td className="px-6 py-4 text-gray-300">John Doe</td>
                <td className="px-6 py-4 text-gray-300">120.5 BTC</td>
                <td className="px-6 py-4 text-gray-300">2 hours ago</td>
                <td className="px-6 py-4 text-gray-300 space-x-4">
                  <button className="text-yellow-400 hover:text-yellow-500" title="Edit User">
                    <FaEdit />
                  </button>
                  <button className="text-red-400 hover:text-red-500" title="Delete User">
                    <FaTrashAlt />
                  </button>
                  <button className="text-teal-400 hover:text-teal-500" title="View Profile">
                    <FaEye />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-cyan-500/10 cursor-pointer">
                <td className="px-6 py-4 text-gray-300">Jane Smith</td>
                <td className="px-6 py-4 text-gray-300">78.2 ETH</td>
                <td className="px-6 py-4 text-gray-300">10 minutes ago</td>
                <td className="px-6 py-4 text-gray-300 space-x-4">
                  <button className="text-yellow-400 hover:text-yellow-500" title="Edit User">
                    <FaEdit />
                  </button>
                  <button className="text-red-400 hover:text-red-500" title="Delete User">
                    <FaTrashAlt />
                  </button>
                  <button className="text-teal-400 hover:text-teal-500" title="View Profile">
                    <FaEye />
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Add User */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white p-8 rounded-xl w-96">
            <h3 className="text-2xl font-semibold mb-4">Add User</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">User Name</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-black/30 border border-gray-500 text-gray-300"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Coins</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-black/30 border border-gray-500 text-gray-300"
                  value={userData.coins}
                  onChange={(e) => setUserData({ ...userData, coins: e.target.value })}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold">Last Active</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-black/30 border border-gray-500 text-gray-300"
                  value={userData.lastActive}
                  onChange={(e) => setUserData({ ...userData, lastActive: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-400 to-indigo-600 text-white py-2 px-6 rounded-lg"
                >
                  Add User
                </button>
                <button
                  type="button"
                  className="text-red-400 hover:text-red-500"
                  onClick={closeModal} // Close modal on cancel
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

  );
};

export default UsersPage;
