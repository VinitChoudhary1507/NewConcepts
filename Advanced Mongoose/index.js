const mongoose = require('mongoose');
const dbconnect = require('./connector')
const User = require('./models')
// const express = require('express');

async function Detail(params) {  
  
    
  //   await dbconnect();
  //  function db((req,_res) => {

  //    const users =  new User({ name:'kartik'});
  //    const retailerId = req.users.id; 
  //    await users.save();
  //    console.log('User Created',users,retailerId) ;
   
  //  });
}
Detail();




// const id = req.params;
// const users = await User.findOne({id})


//     users.sayHi();  // This will now work!

// users.save();   


// const users = await Model.find(); // ✅ Get all users

//     for (let user of users) {
  //         user.friend = '60d9f7cbb508b42494c9b5f1';
  //         await user.save(); // ✅ Save each user individually
  //     }
  // try { 
  //     await dbconnect();
  //   const retailerId = req.model.id; // Extract the retailer's ID from the authenticated user
  //   if (!retailerId) {
  //     return res.status(400).json({ message: "Retailer ID is required" });
  //   }
  
  //   const newProduct = new Product({
  //     ...req.body, // Spread all request body data
  //     retailerId,  // Attach the retailer's ID
  //   });
  
  //   await newProduct.save();
  
  //   res.status(201).json({ message: "Product created successfully", product: newProduct });
  // } catch (error) {
  //   res.status(500).json({ message: "Error creating product", error });
  // }