const util = require('../src/util');
const expect = require('chai').expect;
const pkgDotJson = require('../package.json');
const sinon = require('sinon');

describe('Debug-Squasher Debug Tool Test: ', () => {
  // stub to test output
  it('Should be able to recognize the debug string', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });
});

describe('Version Bump Util: ', () => {
  const originalVersion = pkgDotJson.version;
  // Split the string at the dot
  let newVersion;
  let oldTagValues;
  let tagValues;
  after(() => {
    // Reset the old version
    pkgDotJson.version = originalVersion;
  });

  it('Should increment major and zero minor and patch', () => {
    // This will use the major bump of debug tool and set to var
    newVersion = util.versionbump(pkgDotJson.version, 'major');
    // Split into array using the dot
    tagValues = newVersion.split('.');
    oldTagValues = pkgDotJson.version.split('.');
    // Turn all values to int
    for (let i = 0; i < tagValues.length; i++) {
      tagValues[i] = parseInt(tagValues[i], 10);
    }
    for (let o = 0; o < oldTagValues.length; o++) {
      oldTagValues[o] = parseInt(oldTagValues[o], 10);
    }
    // Test that each position is what it should be.
    expect(tagValues[0]).to.equal(oldTagValues[0] + 1);
    expect(tagValues[1]).to.equal(0);
    expect(tagValues[2]).to.equal(0);
  });

  it('Should increment minor and zero patch', () => {
    // This will use the major bump of debug tool and set to var
    newVersion = util.versionbump(pkgDotJson.version, 'minor');
    // Split into array using the dot
    tagValues = newVersion.split('.');
    oldTagValues = pkgDotJson.version.split('.');
    // Turn all values to int
    for (let i = 0; i < tagValues.length; i++) {
      tagValues[i] = parseInt(tagValues[i], 10);
    }
    for (let o = 0; o < oldTagValues.length; o++) {
      oldTagValues[o] = parseInt(oldTagValues[o], 10);
    }
    // Test that each position is what it should be.
    expect(tagValues[0]).to.equal(oldTagValues[0]);
    expect(tagValues[1]).to.equal(oldTagValues[1] + 1);
    expect(tagValues[2]).to.equal(0);
  });

  it('Should increment patch', () => {
    // This will use the major bump of debug tool and set to var
    newVersion = util.versionbump(pkgDotJson.version, 'patch');
    // Split into array using the dot
    tagValues = newVersion.split('.');
    oldTagValues = pkgDotJson.version.split('.');
    // Turn all values to int
    for (let i = 0; i < tagValues.length; i++) {
      tagValues[i] = parseInt(tagValues[i], 10);
    }
    for (let o = 0; o < oldTagValues.length; o++) {
      oldTagValues[o] = parseInt(oldTagValues[o], 10);
    }
    // Test that each position is what it should be.
    expect(tagValues[0]).to.equal(oldTagValues[0]);
    expect(tagValues[1]).to.equal(oldTagValues[1]);
    expect(tagValues[2]).to.equal(oldTagValues[2] + 1);
  });
});

describe('Console Log, Error, Warn: ', () => {
  // mock obj and string to pass into the util
  const testObj = { hello: 'test' };
  const testString = 'test title';
  // Creating a object of methods for sinon
  const objspy = {
    log: (testtitle, obj, methodType) => {
      util.debug(testtitle, obj, methodType);
    },
    error: (testtitle, obj, methodType) => {
      util.debug(testtitle, obj, methodType);
    },
    warn: (testtitle, obj, methodType) => {
      util.debug(testtitle, obj, methodType);
    },
  };
  // settingt the spy on the methods
  const logit = sinon.spy(objspy, 'log');
  const errorit = sinon.spy(objspy, 'error');
  const warnit = sinon.spy(objspy, 'warn');

  // console.log test
  it('Should util.log', () => {
    objspy.log(testString, testObj, 'log');
    expect(logit.calledWith(testString, testObj)).to.be.true;
    expect(logit.calledOnce).to.be.true;
  });
  // console.error test
  it('Should util.error', () => {
    objspy.error(testString, testObj, 'error');
    expect(errorit.calledWith(testString, testObj)).to.be.true;
    expect(errorit.calledOnce).to.be.true;
  });
  // console.warn test
  it('Should util.warn', () => {
    objspy.warn(testString, testObj, 'warn');
    expect(warnit.calledWith(testString, testObj)).to.be.true;
    expect(warnit.calledOnce).to.be.true;
  });
});
