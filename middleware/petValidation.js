const validator = require('../helpers/validate');

const savePet = (req, res, next) => {
    const validationRule = {
        petName: "required|string",
        petColor: "required|string",
        species: "required|string",
        gender: "required|string",
        
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const updateIngredient = (req, res, next) => {
    const validationRule = {
        petName: "required|string",
        petColor: "required|string",
        species: "required|string",
        gender: "required|string",
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(400).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};


module.exports = {
    updatePet,
    savePet
};