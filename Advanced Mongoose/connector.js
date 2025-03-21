const mongoose = require('mongoose');
async function dbconnect(params) {
    try{

        await mongoose.connect('mongodb+srv://choudharyvinit715:FfRnaKwdTikFYFtO@vinitchoudhary.7hpcx.mongodb.net');
      
           console.log('Connected to MongoDB');
    
    }
catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // process.exit(1); // Exit the process if connection fails
} 
    
}
module.exports =  dbconnect;