const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const route = require("./routes/contact");
const db = require("./models");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

//app.use(bodyParser.json());
//app.use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});


db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () =>{
        console.log(`app listening on ${HOST}:${PORT}`);
    })
    console.log("connected to database");
}).catch((err) => {
    console.log('Could not connect to database!', err);
    process.exit();
});