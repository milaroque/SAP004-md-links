const mdLinks = require('../index.js');
const mock = require('./mock.js');

describe('mdLinks', () => {
  it('mdLinks should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return link validation in a directory', () => {
    mdLinks('./test/', '--validate').then((result) => {
      expect(result).toEqual(mock.arrayValidate);
    });
  });
  it('should return link validation in a file ".md"', () => {
    mdLinks('./test/test.md', '--validate').then((result) => {
      expect(result).toEqual(mock.arrayValidate);
    });
  });
  it('should return validation and stats', () => {
    mdLinks('./test/test.md', '--validate', '--stats').then((result) => {
      expect(result).toEqual(mock.arrayValidate, mock.arrayStats);
    });
  });
  it('should return array objects', () => {
    mdLinks('./test/test.md').then((result) => {
      expect(result).toEqual(mock.array);
    });
  });
  it('should return stats', (done) => {
    mdLinks('./test/', '--stats').then((result) => {
      expect(result).toEqual(mock.arrayStats);
      done();
    });
  });
  it('erro', () => {
    expect.assertions(1);
    return expect(mdLinks('./test/tests.md')).rejects.toMatch('Sorry, but there is no archive with that name in this directory');
  });
});
