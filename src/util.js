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

  // if DEBUG=true display the debugger
  if (process.env.DEBUG) {
    if (method === 'log') {
      const log = output + colors.blue(timeOutput) + fObj;
      console.log(log);
    } else if (method === 'error') {
      const log = output + colors.red(timeOutput) + fObj;
      console.log(log);
    } else if (method === 'warn') {
      const log = output + colors.yellow(timeOutput) + fObj;
      console.log(log);
    } else {
      console.error(colors.red('You have passed a invalid method'));
    }
  }
};

exports.versionbump = (currentVersion, tag) => {
  let newVersion;
  // Split the string at the dot
  const tagValues = currentVersion.split('.');
  // Loop through the split array
  for (let i = 0; i <= tagValues.length; i++) {
    parseInt(tagValues[i], 10);
  }
  // Varify that the tag is either major minor or patch.
  if (tag === 'major' || tag === 'minor' || tag === 'patch') {
    if (tag === 'major') {
      // Increase major and zero out minor and patch.
      // Then turn everything to a sting and join with a dot.
      tagValues[0]++;
      tagValues[0].toString();
      tagValues[1] = '0';
      tagValues[2] = '0';
      newVersion = tagValues.join('.');
    } else if (tag === 'minor') {
      // increase minor and zero patch.
      // Then turn everything to a sting and join with a dot.
      tagValues[0].toString();
      tagValues[1]++;
      tagValues[1].toString();
      tagValues[2] = '0';
      newVersion = tagValues.join('.');
    } else if (tag === 'patch') {
      // increase patch.
      // Then turn everything to a sting and join with a dot.
      tagValues[0].toString();
      tagValues[1].toString();
      tagValues[2]++;
      tagValues[2].toString();
      newVersion = tagValues.join('.');
    }
  } else {
    // return an error string to throw error in console with gulp
    newVersion = 'error';
  }
  return newVersion;
};
