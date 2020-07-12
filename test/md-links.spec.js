const mdLinks = require('../index.js');
const mock = require('./mock.js');

describe('mdLinks', () => {
  it('mdLinks should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return validation', () => {
    mdLinks('./test/', '--validate').then((result) => {
      expect(result).toEqual(mock.arrayValidate);
    });
  });
  it('should return validation', () => {
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
  it('should return stats', async () => {
    const data = await mdLinks('./test/', '--stats');
    expect(data).toEqual(mock.arrayStats);
  });
  it('erro', () => {
    mdLinks('./testsss/test.md')
      .catch((err) => {
        expect(err).toBe('Sorry, but there is no archive with that name in this directory');
      });
  });
});
