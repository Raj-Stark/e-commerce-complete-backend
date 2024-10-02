const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
} = require("../controllers/orderController");

const {
  authenticateUser,
  authorizePermission,
} = require("../middleware/authentication");

const express = require("express");

const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createOrder)
  .get(authorizePermission, authorizePermission("admin"), getAllOrders);

router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);

router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
