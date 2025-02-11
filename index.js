require('dotenv').config(); // Load environment variables first

const express = require('express');
const app = express();

// Check admin privileges
const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

// Define your routes and application logic below
app.get('/', (req, res) => {
  if (isAdmin) {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000."));