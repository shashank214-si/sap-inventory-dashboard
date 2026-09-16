// mockData.js
const inventoryData = [
  {
    MATERIAL: "MAT-1001",
    MATERIAL_DESC: "Steel Rod 10mm",
    PLANT: "1000",
    STOCK_QTY: 450,
    UNIT: "PC",
    REORDER_LEVEL: 100,
    STATUS: "In Stock"
  },
  {
    MATERIAL: "MAT-1002",
    MATERIAL_DESC: "Copper Wire 2mm",
    PLANT: "1000",
    STOCK_QTY: 80,
    UNIT: "MTR",
    REORDER_LEVEL: 100,
    STATUS: "Low Stock"
  },
  {
    MATERIAL: "MAT-1003",
    MATERIAL_DESC: "Aluminum Sheet",
    PLANT: "2000",
    STOCK_QTY: 0,
    UNIT: "PC",
    REORDER_LEVEL: 50,
    STATUS: "Out of Stock"
  }
  // aur 10-15 items add kar do variety ke liye
];

module.exports = inventoryData;