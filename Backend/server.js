const shopCards = require("./data/shop_cards"); // Import shop cards
const showCaseCards = require("./data/showcase_cards"); // Import showcase cards

// Creating a server
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import connectDB for connecting to MongoDB
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const router = require("./routes/userRoutes");

dotenv.config(); // Configure dotenv
connectDB(); // Connect to MongoDB

app.use(express.json()); // Configure express to parse JSON

app.get("/api/shopCards", (req, res) => {
  // Get shop cards
  res.json(shopCards); // Send shop cards
});

app.get("/api/showCaseCards", (req, res) => {
  // Get showcase cards
  res.json(showCaseCards); // Send showcase cards
});

app.use("/api/users", userRoutes); // Use user routes


// app.use(notFound); // Use notFound middleware
// app.use(errorHandler); // Use errorHandler middleware)

const PORT = process.env.PORT || 8000; // Configure port

app.listen(PORT, console.log(`server runninng on port ${PORT}`)); // Start server
