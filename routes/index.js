const pets = require("./pet");
const contacts = require("./contact")
const router = require("express").Router();
const apiDoc = require("./swagger.js");
const oauth = require("./oauth.js");
const login = require("./login.js");
const logout = require("./logout.js");
const passport = require("passport");


router.use("/", apiDoc, oauth)
router.use("/pets", pets);
router.use("/contacts", contacts);


router.get("/login", passport.authenticate("github"), login);
router.get("/logout", logout);
router.get("/", (req, res) =>{
    res.send(
        req.session.user !== undefined ? `Logged in as ${req.session.user.displayName} <br><a href='/logout'>Log out</a><br><a href='/api-docs'>API Docs</a>` : "<a href='/login'>Login</a>"
    )
})

module.exports = router;