"use strict";
exports.__esModule = true;
var withAuth = function (req, res, next) {
    if (!req.session.userId) {
        res.redirect("/signin");
    }
    else {
        next();
    }
};
module.exports = withAuth;
