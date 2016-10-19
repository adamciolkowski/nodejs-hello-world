# nodejs-hello-world

A hello world node.js application that is as basic and simple as possible.

## Included dependencies:

* [webpack] - A module bundler. Combines resources into a single js file 
    included in the web page. Can do additional processing like minification 
    or dead code elimination.
* [webpack-dev-server] - Server used to run an app during development. 
* [react] - A library for building user interfaces.
* [babel] - A javascript compiler. Can transform ES6 (which not all 
    browsers yet support) into equivalent ES5 code
* style/css/sass - webpack loaders which allow to modularize styles by 
    importing them in components that use them. 

## How to run:

```
npm install
npm start
```

Application will be run on localhost on port 8080

[webpack]: https://webpack.github.io/
[webpack-dev-server]: https://webpack.github.io/docs/webpack-dev-server.html
[react]: https://facebook.github.io/react/
[babel]: https://babeljs.io/