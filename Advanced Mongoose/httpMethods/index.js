const express = require('express');

const app = express();
app.use(express.json());

    app.post('/user',(req,res)=>{

        const user = {name: req.body.name, password:req.body.password} 
        user.push(user);

    });


    app.get('/user',(req,res)=>{
    });