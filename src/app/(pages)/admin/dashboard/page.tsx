import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-md h-screen">
          <div className="p-4 text-center font-bold text-lg border-b">Admin Dashboard</div>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Dashboard Overview</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Products</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Orders</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Customers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Reports</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold">Total Sales</h2>
              <p className="text-3xl">$10,000</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold">Orders</h2>
              <p className="text-3xl">150</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold">Active Users</h2>
              <p className="text-3xl">200</p>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="mt-6 bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 px-4 text-left">Order ID</th>
                  <th className="border-b py-2 px-4 text-left">Customer</th>
                  <th className="border-b py-2 px-4 text-left">Total</th>
                  <th className="border-b py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2 px-4">#12345</td>
                  <td className="border-b py-2 px-4">John Doe</td>
                  <td className="border-b py-2 px-4">$200</td>
                  <td className="border-b py-2 px-4 text-green-500">Completed</td>
                </tr>
                <tr>
                  <td className="border-b py-2 px-4">#12346</td>
                  <td className="border-b py-2 px-4">Jane Smith</td>
                  <td className="border-b py-2 px-4">$150</td>
                  <td className="border-b py-2 px-4 text-yellow-500">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
