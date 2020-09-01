const fs = require('fs');

const readFile = (file, option) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject('Unable to find path');
    } else {
      const array = [];
      const regex = /\[([^[]+)\]\((http.*)\)/gm;
      const links = data.match(regex);
      links.forEach((elem) => {
        const text = elem.match(/\[([^[]+)\]/)[1].replace('\n', '');
        const href = elem.match(/\((http.*)\)/)[1].replace(')', '');
        const obj = {
          file,
          text,
          href,
        };
        array.push(obj);
      });
      resolve(array, option);
    }
  });
});
module.exports = readFile;
