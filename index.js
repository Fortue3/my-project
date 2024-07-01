const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const db = require('./db');
const contactsRouter = require('./routes/contacts');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/contacts', contactsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

