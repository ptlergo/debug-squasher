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

exports.versionbump = (currentVersion, tag) => {
  // Split the string at the dot
  let intVersionArray = currentVersion.split('.');
  // Loop through the split array
  for ( let i = 0; i <= intVersionArray.length; i++ ) {
    parseInt(intVersionArray[i]);
  };
  // Varify that the tag is either major minor or patch.
  if (tag === 'major' || tag == 'minor' || tag == 'patch') {
    if (tag === 'major') {
      // Increase major and zero out minor and patch.
      // Then turn everything to a sting and join with a dot.
      intVersionArray[0]++;
      intVersionArray[0].toString();
      intVersionArray[1] = '0';
      intVersionArray[2] = '0';
      const majorVersionBump = intVersionArray.join('.');
      return majorVersionBump;
    } else if (tag === 'minor') {
      // increase minor and zero patch.
      // Then turn everything to a sting and join with a dot.
      intVersionArray[0].toString();
      intVersionArray[1]++;
      intVersionArray[1].toString();
      intVersionArray[2] = '0';
      const minorVersionBump = intVersionArray.join('.');
      return minorVersionBump;
    } else if (tag === 'patch') {
      // increase patch.
      // Then turn everything to a sting and join with a dot.
      intVersionArray[0].toString();
      intVersionArray[1].toString();
      intVersionArray[2]++;
      intVersionArray[2].toString();
      const patchVersionBump = intVersionArray.join('.');
      return patchVersionBump;
    }
  } else {
    // return an error string to throw error in console with gulp
    return 'error';
  };
};
