const util = require('../src/util');
const expect = require('chai').expect;
const pkgDotJson = require('../package.json');

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
  it('Should util.log');
  it('Should util.error');
  it('Should util.warn');
});
