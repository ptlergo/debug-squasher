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

  if (process.env.DEBUG) {
    if (status === 'warn'){
      const warn = output + obj + output2 + ' Warning Status!';
      console.warn(colors.warn(warn));

    }else if(status === 'error'){
      const error = output + obj + output2 + ' Failed to Load Output';
      console.error(colors.error(error));
    }
    }else if (status === 'log'){
        const log = (output + obj + output2 + title ' Loading Output')
        console.log(colors.error(log));

    }else{
      console.error(output + obj + output2 + ' Failed to Load Output');
}
};
