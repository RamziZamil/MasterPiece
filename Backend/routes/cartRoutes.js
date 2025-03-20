const express = require("express");
const { authorize } = require("../middleware/auth");
const router = express.Router();

// Controller function to add an item to the cart (to be implemented)
const addToCart = (req, res) => {
  // Logic to add item to cart
  res
    .status(201)
    .json({ success: true, message: "Item added to cart successfully" });
};

// Route to add an item to the cart
router.post("/add", authorize("user", "admin"), addToCart);

module.exports = router;
