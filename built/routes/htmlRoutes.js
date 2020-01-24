"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
function default_1(app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + "/public/index.html"));
    });
    console.log('this ran');
    app.post('/test', function (req, res) {
        console.log(req.body.test);
        fs.writeFileSync(path.join(__dirname + '/test.ogg'), Buffer.from(req.body.test.replace('data:audio/webm;codecs=opus;base64,', ''), 'base64'));
        res.json('success');
    });
}
exports["default"] = default_1;