[![build status](https://secure.travis-ci.org/rc1/connect-less-errors.png)](http://travis-ci.org/rc1/connect-less-errors)
# Connect-LESS-Errors

[LESS CSS](https://github.com/cloudhead/less.js) error reporting middleware for [Connect.js](https://github.com/senchalabs/connect)'s [compiler middleware](http://senchalabs.github.com/connect/middleware-compiler.html).

Error when compiling a `.less` file? Instead connect of sending just an empty `.css` file, connect will send a `.css` file containing the error.


# Example Usage (with Express)

```JavaScript

var lessErrorHandler = require ('./connect-less-error/connect-less-error.js');

....

    app.use(express.compiler({src: __dirname + '/public', enable:['less']}));
    app.use(lessErrorHandler);
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler()); 

```