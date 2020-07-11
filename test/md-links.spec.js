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
  it('should return validation', (done) => {
    mdLinks('./test/test.md', '--validate').then((result) => {
      expect(result).toEqual(mock.arrayValidate);
      done();
    });
  });
  it('should return validation and stats', (done) => {
    mdLinks('./test/test.md', '--validate', '--stats').then((result) => {
      expect(result).toEqual(mock.arrayValidate, mock.arrayStats);
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
  it('erro', (done) => {
    mdLinks('./testsss/test.md')
      .catch((err) => {
        expect(err).toBe('Sorry, but there is no archive with that name in this directory');
        done();
      });
  });
});
