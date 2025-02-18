const getAllProducts = async (req, res) => {
  res.send("all products");
};

const createProduct = async (req, res) => {
  res.send("creat product");
};

module.exports = {
  getAllProducts,
  createProduct,
};
