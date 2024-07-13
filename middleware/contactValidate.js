const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        address: 'required|string',
        location: 'required|string',
        Town: 'required|string',
        age: 'required|string',
        phonenumber: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};
const updateContact = (req, res, next) => {
    const validationRule = {
        firstName: 'string',
        lastName: 'string',
        address: 'required|string',
        location: 'required|string',
        Town: 'required|string',
        age: 'required|string',
        phonenumber: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
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
    saveContact,
    updateContact
};