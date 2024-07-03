const pets = require("./pet");
const contacts = require("./contact")
const router = require("express").Router();
const apiDoc = require("./swagger.js");

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));
router.use('/pets', require('./pets'));

router.get('/', (req,res) =>
    //#swagger.tags = ['users']
    {res.send('Hello World')});

module.exports = router;