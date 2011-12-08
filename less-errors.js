
var path = require('path');

module.exports = function (err, req, res, next) {
    if (path.extname(req.url) === '.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        // wrap the error in css so chrome does not bail out
        res.end("/* " + JSON.stringify(err) + " */");
    } else {
        next(err);
    }
};