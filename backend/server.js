require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Load environment variables (dotenv'u iki kez import etmeye gerek yok, bir kez yeterli)
require("dotenv").config();

// Create Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend'in çalıştığı port
    methods: ["GET", "POST"], // İzin verilen HTTP metodları
    allowedHeaders: ["Content-Type"], // İzin verilen başlıklar
  })
);
app.use(express.json());

// Import routes
const searchRoutes = require("./routes/search");

// Use routes
app.use("/search", searchRoutes);

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
