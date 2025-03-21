const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;

    const newUser = new User({ name });
    await newUser.save();

    res.status(201).json({
      message: 'User created successfully!',
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};
