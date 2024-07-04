const express = require('express');
const contactsRouter = require('./routes/contact');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./models/swagger.json');


const app = express();

app.use(express.json());

app.use('/contacts', contactsRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;

