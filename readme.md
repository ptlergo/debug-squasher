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

### .debug
The debug functionality can be accessed by running `util.debug(title, data, status, logtype)` which will log according to the log type. The params work as follows:

 * title: is the Title of the log.

 * data: any type of data type passed in. It can also be an error return from a function.

 * status: an informational segment provided by the developer to keep track of the debug.

 * logtype: this determines whether the output will be through `console.log, console.warn, or console.error`.

```
Example Usage:
util.debug('Test Title', { apple: 'pie' }, 'Description Status', 'log');

Output:

[Thu, 06/23rd/16, 10:55:45pm]: Test Title:
Description Status
==============================================
{"apple":"pie"}
```

## Run
debug-squasher runs only when the Environmental Variable 'DEBUG' is on.
```
DEBUG=true node server.js
```


> visit my [app-store](https://github.com/ptlergo/App-Store) project to see it in action.  
