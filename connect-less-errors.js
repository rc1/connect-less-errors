var path = require('path');

module.exports = function (err, req, res, next) {
    if (path.extname(req.url) === '.css') {
        
        var details =   "/* Less CSS: " +  err.name + "\n" +
                        " * \n"+
                        " * in     : " + path.basename(req.url, "css") + ".less \n" +
                        " * line   : " + err.line + "\n" +
                        " * column : " + err.column  + "\n" +
                        " * errors :";

        for (var index in err.extract) {
            details +=  " " + err.extract[index]  + "\n *         ";
        }

        details +=      "\n" +
                        " * Output : " +  JSON.stringify(err) + "\n" + 
                        "*/";

        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(details);
    } else {
        next(err);
    }
};