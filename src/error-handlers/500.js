'use strict';

const serverError = (error, erq, res, next) => {
    console.log(error);
    res.status(500).json({
        code: 500,
        message: `Internal Error`  
    })
}

module.exports = serverError;