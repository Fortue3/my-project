const swaggerAutogen = require("swagger-autogen")();

const doc ={
    info:{
        title: 'contacts Api',
        description: 'contacts Api'
    },
    localhost:'my-project-382m.onrender.com',
    schemes: ['https', 'http']
};

const outputFile = "./models/swagger.json";
const endpointsFiles = ["./routes/index.js"]; 
swaggerAutogen(outputFile, endpointsFiles, doc);
