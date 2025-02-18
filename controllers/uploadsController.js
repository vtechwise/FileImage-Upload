const path = require("path");

const uploadImage = async (req, res) => {
  const productImage = req.files.image;
  console.log(productImage, req.files);

  const imagePath = path.join(
    __dirname,
    `../public/upload${productImage.name}`
  );
  await productImage.mv(imagePath);
  res.send("upload image");
};

module.exports = uploadImage;
