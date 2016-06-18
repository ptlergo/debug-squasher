exports.debug = (title, obj) => {
  const seperator = '\n==========================\n';
  // create output string from variables
  const output = seperator + title + seperator;
  // if DEBUG=true display the debugger
  if (process.env.DEBUG) {
    console.log(output, obj);
  }
};
