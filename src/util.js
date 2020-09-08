exports.debug = (title, obj, method) => {
  // create colors inside conosole.log
  const colors = require('colors');
  const utils = require('util');
  // Format time stamp
  const moment = require('moment');
  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');
  // format the object
  const fObj = colors.white('Object: ') + utils.format('%j', obj);

  const timeOutput = colors.white('Time: ') + '[ ' + time + ' ]\n';
  const seperator = colors.gray('\n==========================\n');
  // create output string from variables
  const output = seperator + '\t' + title + seperator;


  if (process.env.DEBUG) {
    console.log(output + output2);
    // I took out the route to the logging file that is catching the logs.
  } else {
    console.error(new Error('The debugging tool did not find this'));
  }
};

  exports.bump = (currentV, certainSetUpdate) => {
    const major = currentV.major;
    const minor = currentV.minor;
    const patch = currentV.patch;

    if(certainOf certainSetUpdate){

      if (certainSetUpdate === 'major'){
        patch = 0;
        minor = 0;
        major += 1;
      }
      if (certainSetUpdate === 'minor'){
        minor += 1;
        patch = 0;

      }
      if (certainSetUpdate === 'patch'){
        patch += 1;
      }
    }
  } else {
    console.warn('Second argument must be entered');
  }
  return 'Version: ' + major + '.' + minor + '.' + patch;
  };
