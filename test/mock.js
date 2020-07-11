const array = [
  {
    text: 'Markdown',
    href: 'https://pt.wikipedia.org/wiki/Markdown',
    file: './test/test.md',
  },
  {
    text: 'Node.js',
    href: 'https://nodejs.org/',
    file: './test/test.md',
  },
  {
    text: 'md-links',
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    file: './test/test.md',
  },
  {
    text: 'Chrome',
    href: 'https://developers.',
    file: './test/test.md',
  },
  {
    text: 'Node.js',
    href: 'https://nodejs.org/pt-br/',
    file: './test/test.md',
  },
];

const arrayValidate = [
  {
    text: 'Markdown',
    href: 'https://pt.wikipedia.org/wiki/Markdown',
    file: './test/test.md',
    status: '200',
    statusText: 'OK',
  },
  {
    text: 'Node.js',
    href: 'https://nodejs.org/',
    file: './test/test.md',
    status: '200',
    statusText: 'OK',
  },
  {
    text: 'md-links',
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    file: './test/test.md',
    status: '200',
    statusText: 'OK',
  },
  {
    text: 'Chrome',
    href: 'https://developers.',
    file: './test/test.md',
    status: '404',
    statusText: 'Fail',
  },
  {
    text: 'Node.js',
    href: 'https://nodejs.org/pt-br/',
    file: './test/test.md',
    status: '200',
    statusText: 'OK',
  },
];

module.exports = { array, arrayValidate };
