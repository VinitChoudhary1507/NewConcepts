const express = require('express');
const mongoschema = require('../mongoschema');
const router = express.Router();


router.get('/',(req,res)=>{
    //   obj={
    //     a:'thios',
    //     number:34
    //   }
    //   res.json(obj)
    console.log(req.body);
    const  user = new mongoschema(req.body)
    console.log(user);
    user.save();
    res.send(req.body);
})
module.exports =router;