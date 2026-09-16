# SAP-Integrated Inventory Dashboard

A full-stack dashboard demonstrating SAP ERP integration architecture:
- Node.js middleware simulating SAP BAPI/RFC responses (BAPI_MATERIAL_STOCK_REQ_LIST structure)
- Express REST API layer
- React frontend with real-time polling and data visualization (Recharts)

**Note:** Currently uses mock data structured to match SAP BAPI response format. 
Designed to be easily connected to real SAP systems using `node-rfc` library.

## Tech Stack
Node.js, Express, React, Recharts, Axios

## Future Scope
- Replace mock data layer with `node-rfc` for live SAP connection
- Add WebSocket for true real-time updates
- Add authentication and role-based access
