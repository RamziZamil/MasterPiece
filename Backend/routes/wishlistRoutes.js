const express = require("express");
const { authorize } = require("../middleware/auth");
const router = express.Router();

// Controller function to add an item to the wishlist (to be implemented)
const addToWishlist = (req, res) => {
  // Logic to add item to wishlist
  res
    .status(201)
    .json({ success: true, message: "Item added to wishlist successfully" });
};

// Route to add an item to the wishlist
router.post("/add", authorize("user", "admin"), addToWishlist);

module.exports = router;
