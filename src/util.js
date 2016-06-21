exports.debug = (title, obj) => {
  const fs = require('fs');
  const tstamp = new Date();

  const seperator = '\n==========================\n';
  // create output string from variables
  const output = seperator + title + seperator + ' [ ' + tstamp + ' ].';

  // if DEBUG=true display the debugger
  if (process.env.DEBUG) {
    fs.appendFile('log/lincoln.log', output, (err) => {
      if (err) throw err;
      console.log(output);
    });
  }
};
