const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log('connected successfully');
}).catch((err) => {console.log("Can not connect to the database",err)});
      
module.exports = mongoose;
