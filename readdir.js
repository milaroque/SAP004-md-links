const fs = require('fs');
const path = require('path');
const readFile = require('./readfile');

const readPath = (dir, option) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err)
        reject(err.message);
      else {
        files.forEach(file => {
          if (path.extname(file) == ".md") {
            resolve(readFile(`${dir}/${file}`))       
          }
        })
      } 
    })
  })
}

module.exports = readPath;

