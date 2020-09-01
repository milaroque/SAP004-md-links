const mdLinks = require('../index.js');
const checkMdLinks = require('../mdLinks')
const statsHttp = require('../src/statshttp')
const mock = require('./mock.js');

describe('mdLinks', () => {
  it('mdLinks should be a function', (done) => {
    expect(typeof mdLinks).toBe('function');
    done();
  });
  it('should return link validation in a directory', (done) => {
    checkMdLinks('./test','--validate').then((result) => {
      expect(result).toEqual(mock.arrayValidate);
      done();
    });
  });
  it('should return link validation in a file ".md"', (done) => {
    checkMdLinks('./test/test.md','--validate').then((result) => {
      expect(result).toStrictEqual(mock.arrayValidate);
      done();
    });
  });
  it('should return array objects', (done) => {
    mdLinks('./test/test.md').then((result) => {
      expect(result).toEqual(mock.array);
      done();
    });
  });
  it('should return stats links', (done) => {
    const result = statsHttp(mock.arrayValidate)
      expect(result).toBe(mock.arrayStats);
      done();
  });
  it('should return stats and validate links', (done) => {
    checkMdLinks('./test/test.md','--validate', '--stats').then((result) => {
      expect(result).toStrictEqual(mock.arrayValidate, mock.arrayStats);
      done();
    });
  });
  it('error', () => {
    expect.assertions(1);
    return expect(mdLinks('./test/tests.md')).rejects.toMatch('Sorry, but there is no archive with that name in this directory');
  });
});