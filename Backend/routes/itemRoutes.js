const express = require("express");
const { authorize } = require("../middleware/auth");
const router = express.Router();

// Controller function to add an item (to be implemented)
const addItem = (req, res) => {
  // Logic to add item
  res.status(201).json({ success: true, message: "Item added successfully" });
};

// Route to add an item, restricted to admin users
router.post("/add", authorize("admin"), addItem);

module.exports = router;
