const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./index');



const PORT = process.env.PORT;
const HOST = process.env.HOST;

const MONGODB_URL =process.env.MONGODB_URI;

mongoose.connect(MONGODB_URL).then(con =>{
    console.log('connected successfully')

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });

});


