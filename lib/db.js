const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
// connect to mongodb
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        throw new Error("Connection failed!")
    }
}


module.exports = connect;