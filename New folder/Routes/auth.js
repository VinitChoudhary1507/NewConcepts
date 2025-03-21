const express = require('express');
const router = express.Router();
const mongoschema = require('../mongoschema');
const { body, validationResult } = require('express-validator');


      router.post('/',[ 
            body('name').isLength({min:4,max:10}),
            body('email').isEmail(),
           body('password').isLength({min:5,max:10}),
      ],async(req,res)=>{
          const errors = validationResult(req);
          if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
          }
            
         
            try {
                  // Check if the email already exists in the database
                  const existingUser = await mongoschema.findOne({ email: req.body.email });
            
                  if (existingUser) {
                    return res.status(400).json({ message: 'User already exists with this email.' });
                  }
            
                  // Create new user (if email doesn't exist)
                  const newUser = new mongoschema(req.body);
            
                  await newUser.save();
                  res.status(201).json({ message: 'User registered successfully.' });
                  console.log(req.body);
                
                }
                 catch(err){
                  console.error(err);
                  res.status(500).json({ message: 'Server error.' });
                }
              
      })

module.exports =router;
            // obj={
            //   a:'thios',
            //   number:34
            // }
            // res.json(obj)