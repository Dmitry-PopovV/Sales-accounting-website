const checkCookie = require('./../services/checkCookie');

function authorizationCheck() {
    return (req, res, next) => {
        const cookie = (req.cookies['key']);
        if (cookie != undefined)
            req.myIdVal = Number(cookie.split("<&>")[1]);
        checkCookie(cookie, req.dbConnection).then(val => {
            if (val) {
                next();
            } else {
                res.redirect("/login");
            }
        });
    }
}

module.exports = authorizationCheck;
