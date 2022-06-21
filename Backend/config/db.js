const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const konnect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        
        console.log(`MongoDB Connected: ${konnect}`);

    } catch (error) {

        console.error(`Error: ${error.message}`);
        process.exit();
        
    }
}

module.exports = connectDB;