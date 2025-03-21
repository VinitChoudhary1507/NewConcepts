// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const createUserWithProduct = require('./controller/ProductsController').createUserWithProduct;

// Parse JSON bodies
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  

// Define the route for product creation
app.post('/api/v1/createUserWithProduct', createUserWithProduct);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
