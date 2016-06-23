# Debug-Squasher

A simple debug tool to display debug messages where needed.
Perfect for testing models, and routes.

## Install

```
npm install debug-squasher --save
```

## Usage
Require the 'debug-squasher' package.
``` javascript
const util = require('debug-squasher');
```

## .bump
In order to use the Version Bump feature simply follow this format `util.bump(version_number, label)`. Where the params are as follows:

 * version_number: is going to be the version number that you want to bump. It should follow the [Semantic Versioning](http://semver.org/) rules.

 * label: it specifies the type of bump to be made. It can be either MAJOR, MINOR or PATCH, if anything else is passed in it will return an error string. The label can be either lower or upper case.

``` javascript
Example Use:
util.bump('1.2.3', 'Minor');

Output:
Version Tag: '1.3.0'
```

### .debug
user can decide what the output message should be. A 2nd parameter is available
for data output.
``` javascript

util.debug('Whatever you would like the message to output.', object);
```

## Run
debug-squasher runs only when the Environmental Variable 'DEBUG' is on.
```
DEBUG=true node server.js
```


> visit my [app-store](https://github.com/ptlergo/App-Store) project to see it in action.  
