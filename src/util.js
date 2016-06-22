// exports.debug = (title, obj) => {
//   const fs = require('fs');
//   // create colors inside conosole.log
//   const colors = require('colors');
//   const tstamp = new Date();
//
//   const timeOutput = '\n [ ' + tstamp + ' ] \n';
//   const seperator = '\n==========================\n'.red;
//   // create output string from variables
//   const output = seperator + title + seperator;
//
//   // if DEBUG=true display the debugger
//   if (process.env.DEBUG) {
//     fs.appendFile('log/lincoln.log', output, (err) => {
//       if (err) throw err;
//       console.log(output, obj, timeOutput.green);
//     });
//   }
// };


exports.debug = (title, obj, method) => {
  const fs = require('fs');
  // create colors inside conosole.log
  const colors = require('colors');
  const utils = require('util')
  // Format time stamp
  const moment = require('moment');
  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');
  // format the object
  const fObj = colors.white('Object: ') + utils.format('%j', obj);

  const timeOutput = colors.white('Time: ') + '[ ' + time + ' ]\n';
  const seperator = colors.gray('\n==========================\n');
  // create output string from variables
  const output = seperator + '\t' + title + seperator;

  // if DEBUG=true display the debugger
  if (process.env.DEBUG) {
    if (method === 'log') {
      const log = output + colors.blue(timeOutput) + fObj
      console.log(log);
    } else if (method === 'error') {
      const log = output + colors.red(timeOutput) + fObj
      console.log(log);
    } else if (method === 'warn') {
      const log = output + colors.yellow(timeOutput) + fObj
      console.log(log);
    } else {
      console.error(colors.red('You have passed a invalid method'));
    }

  }
};
