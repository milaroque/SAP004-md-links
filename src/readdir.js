const fs = require('fs');
const path = require('path');
const readFile = require('./readfile');

const readPath = (dir, option) => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      reject(err.message);
    } else {
      const array = [];
      files.forEach((file) => {
        if (path.extname(file) === '.md') {
          array.push(readFile(`${dir}/${file}`, option));
        }
      });
      resolve(Promise.all(array))
    }
  });
});

module.exports = readPath;
