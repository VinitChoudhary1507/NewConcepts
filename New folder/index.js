const express = require('express')
const db = require('./db');
const User = require('./mongoschema');
const jwt = require("jsonwebtoken");

const app = express();
const port = 47114;

const bcrypt = require('bcrypt');
db();

app.use(express.json());

const creation = async () => {
  try {

    const password = '11223213';
    const saltRounds = 10;

    const hashedpassword = await bcrypt.hash(password, saltRounds);
    const secretKey = "vinithu";

    const users = new User({
      name: "visaaanit",
      email: "cdoddtdda@gmdfail.com",
      password: hashedpassword,
    });

    await users.save();
    console.log("User created successfully!", users);

    const isMatch = await bcrypt.compare(password, hashedpassword)
    if (!isMatch) {
      console.log("Invalid credentials");
    }

     jwt.sign({ users }, secretKey, { expiresIn: '300s' }, (err, token) => {
              if (err) {
                console.log("User not created !");
              }
              else {
                console.log("User created successfully!", token);
              }
            jwt.verify(token,secretKey,(err, decoded) => {
                if (err) {
                  console.log('Token is invalid:', err);
                } else {
                  console.log('Decoded token:', decoded);
                }
          }) 
            });
   

            }
      catch (error) {
        console.error("Error creating user", error);
      }
    

}

creation();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// app.use('/api/user',require('./Routes/user'));
// const auth = require('./Routes/auth')
// app.use('/api/auth',auth);