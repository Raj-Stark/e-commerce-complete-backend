const createOrder = async (req, res) => {
  res.send("Create Order");
};
const getAllOrders = async (req, res) => {
  res.send("Get All Order");
};
const getSingleOrder = async (req, res) => {
  res.send("Single Order");
};
const getCurrentUserOrders = async (req, res) => {
  res.send("get current user order");
};
const updateOrder = async (req, res) => {
  res.send("update order");
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
};
