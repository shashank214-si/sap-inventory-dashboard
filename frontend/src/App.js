import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';

function App() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInventory = () => {
    axios.get('https://sap-inventory-dashboard.onrender.com/api/inventory')
      .then(res => {
        setInventory(res.data.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchInventory();
    // Real-time feel ke liye har 10 sec mein refresh
    const interval = setInterval(fetchInventory, 10000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    if (status === "Out of Stock") return "red";
    if (status === "Low Stock") return "orange";
    return "green";
  };

  if (loading) return <p>Loading SAP Inventory Data...</p>;

  return (
    <div className="App">
      <h1>SAP-Integrated Inventory Dashboard</h1>
      <p>Live data synced via SAP RFC/BAPI (Mock Mode)</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={inventory}>
          <XAxis dataKey="MATERIAL_DESC" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="STOCK_QTY" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>

      <table border="1" cellPadding="8" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Material ID</th>
            <th>Description</th>
            <th>Plant</th>
            <th>Stock Qty</th>
            <th>Unit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.MATERIAL}>
              <td>{item.MATERIAL}</td>
              <td>{item.MATERIAL_DESC}</td>
              <td>{item.PLANT}</td>
              <td>{item.STOCK_QTY}</td>
              <td>{item.UNIT}</td>
              <td style={{ color: getStatusColor(item.STATUS), fontWeight: 'bold' }}>
                {item.STATUS}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

