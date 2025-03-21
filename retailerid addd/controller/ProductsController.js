const User = require('../models/User');
const Product = require('../models/Product');

exports.createUserWithProduct = async (req, res) => {
  try {
    const {  productName } = req.body; // Extract user & product details

    // Create a new Product linked to this user
    const newProduct = new Product({ product: productName, retailerId: newUser._id });
    await newProduct.save();

    // Update the user's 'products' array
    newUser.products.push(newProduct._id);
    await newUser.save();

    res.status(201).json({
      message: 'User and Product created successfully!',
      user: newUser,
      product: newProduct
    });

  } catch (error) {
    res.status(500).json({ message: 'Error creating user/product', error });
  }
};
