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

// Util Bump Unit Test
describe('Util Version Bump', () => {
  // Setup local scope variables:
  // version for initial version # for each test
  // set newver for expects
  const version = '1.2.3';
  let newver;

  // Test for the Major Version Bump
  it('| Should bump the version number by MAJOR', (done) => {
    // run the util bump with the major param
    // then expect the returned value to be correct
    newver = util.bump(version, 'major');
    expect(newver).to.be.equal('2.0.0');
    done();
  });

  // Test for the Minor Version Bump
  it('| Should bump the version number by MINOR', (done) => {
    // run the util bump with the minor param
    // then expect the returned value to be correct
    newver = util.bump(version, 'MINOR');
    expect(newver).to.be.equal('1.3.0');
    done();
  });

  // Test for the Patch Version Bump
  it('| Should bump the version number by PATCH', (done) => {
    // run the util bump with the patch param
    // then expect the returned value to be correct
    newver = util.bump(version, 'PaTcH');
    expect(newver).to.be.equal('1.2.4');
    done();
  });

  // Test for Error return after LABEL is passed in incorrectly
  it('| Should return error for incorrect LABEL', (done) => {
    // run the util bump with the hello param, expecting error response
    newver = util.bump(version, 'Hello');
    expect(newver).to.be.equal('error');
    done();
  });

  // Test for Error return after incorrect version string formatting is passed in
  it('| Should return error for incorrect VERSION STRING', (done) => {
    // run the util bump with the incorrect version string, expecting error response
    newver = util.bump('1.2.4.5.6.7.8.9', 'Hello');
    expect(newver).to.be.equal('error');
    done();
  });
});
