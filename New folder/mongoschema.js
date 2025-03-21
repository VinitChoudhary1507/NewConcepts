// import mongoose from 'mongoose';
// import express from express
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    unique:false,
  },
  password:{
      type:String,
    required:true,
    
  }
 
});

const User = mongoose.model('User',UserSchema,'data');
module.exports =User;