const express = require('express');
const cors = require('cors');
const inventoryData = require('./mockData');

const app = express();
app.use(cors());

// Ye endpoint real SAP BAPI_MATERIAL_STOCK_REQ_LIST jaisa response dega
app.get('/api/inventory', (req, res) => {
  // Simulate SAP RFC call delay (real system mein bhi thoda time lagta hai)
  setTimeout(() => {
    res.json({
      success: true,
      source: "SAP_MOCK_RFC",
      data: inventoryData
    });
  }, 500);
});

// Single item detail (BAPI_MATERIAL_GET_DETAIL jaisa)
app.get('/api/inventory/:materialId', (req, res) => {
  const item = inventoryData.find(i => i.MATERIAL === req.params.materialId);
  res.json({ success: true, data: item });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));