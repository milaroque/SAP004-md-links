const fs = require('fs');
const readPath = require('./readdir.js');
const readFile = require('./readfile.js');

const mdLinks = (file, option = []) => new Promise((resolved, rejected) => {
  fs.stat(file, (err, stats) => {
    if (err) rejected('Sorry, but there is no archive with that name in this directory');
    else if (stats.isDirectory()) {
      resolved(readPath(file, option));
    } else if (stats.isFile()) {
      resolved(readFile(file, option));
    }
  });
});
module.exports = mdLinks;
