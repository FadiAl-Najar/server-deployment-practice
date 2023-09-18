'use strict';

function validator(req, res, next) {
    const name = req.query.name;

    if (!name){
        res.status(500).send({
            status: 500,
            message: 'Invalid name, please provide name',
        })
    } else {
        next();
    }
    
}

module.exports = validator;