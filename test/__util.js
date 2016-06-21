const util = require('../src/util');
const expect = require('chai').expect;

describe('Debug-Squasher Debug Tool Test: ', () => {
  // stub to test output
  it('Should be able to recognize the debug string', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });

  // stub to test logging
});
