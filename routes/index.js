const router = require("express").Router();
const pets = require("./pets");
const contactsts = require("./contacts")
const apiDoc = require("./swagger.js");
const oauth = require("./oauth.js");
const login = require("./login.js");
const logout = require("./logout.js");
const passport = require("passport");


router.use("/", apiDoc, oauth)
router.use('/', require('./swagger'));
router.use('/contacts', require('./contact'));
router.use('/pets', require('./pets'));

router.get('/', (req,res) =>
    //#swagger.tags = ['users']
    {res.send('Hello World')});

    router.get("/login", passport.authenticate("github"), login);
router.get("/logout", logout);
router.get("/", (req, res) =>{
    res.send(
        req.session.user !== undefined ? `Logged in as ${req.session.user.displayName} <br><a href='/logout'>Log out</a><br><a href='/api-docs'>API Docs</a>` : "<a href='/login'>Login</a>"
    )
})

module.exports = router;