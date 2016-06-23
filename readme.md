# Debug-Squasher

A simple debug tool to display debug messages where needed.
Perfect for testing models, and routes.

## Install

```
npm install debug-squasher --save
```

## Usage
Create a `log` folder in your project with the file `lincoln.log`. This will be to save all your debug messages.
```
/log/lincoln.log
```
Require the 'debug-squasher' package.
``` javascript
const util = require('debug-squasher');
```

### .debug
user can decide what the output message should be. A 2nd parameter is available
for data output object. The last parameter is telling which console method to use.
``` javascript
// Takes a title, object , and either log, error or warn
util.debug('title', object, 'log | error | warn')
```

## Run
debug-squasher runs only when the Environmental Variable 'DEBUG' is on.
```
DEBUG=true node src/util.js
```

> visit my [app-store](https://github.com/ptlergo/App-Store) project to see it in action.  
