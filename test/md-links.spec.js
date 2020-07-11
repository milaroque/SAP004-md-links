const mdLinks = require('../index.js');
const mock = require('./mock.js');

describe('mdLinks', () => {
  it('mdLinks should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('should return validation', (done) => {
    mdLinks('./test/', '--validate').then((result) => {
      expect(result).toEqual(mock.arrayValidate);
      done();
    });
  });
  it('should return array objects', (done) => {
    mdLinks('./test/test.md').then((result) => {
      expect(result).toEqual(mock.array);
      done();
    });
  });
  it('should return stats', (done) => {
    mdLinks('./test/', '--stats').then((result) => {
      expect(result).toEqual(mock.arrayStats);
      done();
    });
  });
});
