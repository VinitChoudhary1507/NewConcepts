const mongoose = require('mongoose');
const mongoURL= 'mongodb+srv://choudharyvinit715:FfRnaKwdTikFYFtO@vinitchoudhary.7hpcx.mongodb.net/'
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
};
module.exports = connectToMongo;