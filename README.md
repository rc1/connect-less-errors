# LESS-Errors

[LESS CSS](https://github.com/cloudhead/less.js) error reporting middleware for [Connect.js](https://github.com/senchalabs/connect)'s [compiler middleware](http://senchalabs.github.com/connect/middleware-compiler.html).

Error when compiling a `.less` file? Instead of sending an empty `.css` file this middleware will send an empty `.css` file with a parse error contained within a comment block. 


# Example Usage (with Express)

```JavaScript

var lessErrorHandler = require ('./libs/less-error/less-error.js');

....

    app.use(express.compiler({src: __dirname + '/public', enable:['less']}));
    app.use(lessErrorHandler);
    app.use(express.errorHandler()); 
    app.use(express.static(__dirname + '/public'));

```


# Roadmap

* beautify the output
* tests
* make css error appear in document
* make module report other errors