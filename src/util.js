exports.debug = (title, obj) => {
  const fs = require('fs');
  // create colors inside conosole.log
  const colors = require('colors');
  const tstamp = new Date();

  const timeOutput = '\n [ ' + tstamp + ' ] \n';
  const seperator = '\n==========================\n'.red;
  // create output string from variables
  const output = seperator + title + seperator;

  // if DEBUG=true display the debugger
  if (process.env.DEBUG) {
    fs.appendFile('log/lincoln.log', output, (err) => {
      if (err) throw err;
      console.log(output, obj, timeOutput.green);
    });
  }
};
