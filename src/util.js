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

exports.bump = (curver, label) => {
  // setup local variables for the scope of the function
  const pattern = /^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/;
  let newver;
  let num;

  // test to see whether the version string passed in is correct format
  if (pattern.test(curver)) {
    // sets each indivial character of the current version number
    //  to a array of integers after splitting the string
    const splitver = curver.split('.').map(Number);
    // verifying the label param in either lowercase or uppercase :)
    const lowlabel = label.toLowerCase();

    if (lowlabel === 'major') {
      // Increases the major tag on the current version number
      num = 0;
      for (let curr = 0; curr < splitver.length; curr++) {
        if (curr === num) splitver[curr] += 1;
        else if (curr > num) splitver[curr] = 0;
      }
    } else if (lowlabel === 'minor') {
      // Increases the minor tag on the current version number
      num = 1;
      for (let curr = 0; curr < splitver.length; curr++) {
        if (curr === num) splitver[curr] += 1;
        else if (curr > num) splitver[curr] = 0;
      }
    } else if (lowlabel === 'patch') {
      // Increases the patch tag on the current version number
      num = 2;
      for (let curr = 0; curr < splitver.length; curr++) {
        if (curr === num) splitver[curr] += 1;
        else if (curr > num) splitver[curr] = 0;
      }
    } else {
      // if label was something other than major.minor.patch it will return error string
      newver = 'error';
      return newver;
    }
    // joins the integer array into a string once again,
    // this time as the new version number and returns the data
    newver = splitver.join('.');
  } else {
    newver = 'error';
  }
  return newver;
};
