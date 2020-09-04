const _ = require('lodash');

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle;

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors);
        res.status(500).json({errors});
    } else {
        next();
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const array_errors = [];

    _.forIn(nodeRestfulErrors, error => {
        array_errors.push(error.message)
    });

    return array_errors;
}