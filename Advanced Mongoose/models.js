 const mongoose = require('mongoose');
 const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    friend: {
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"Model"
    }
 });

 UserSchema.methods.sayHi = function(){
    console.log(`hi The name is ${this.name}`);
 }
 const User = mongoose.model('User',UserSchema);
 module.exports = User;
