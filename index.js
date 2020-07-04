const fs = require('fs');

const mdLinks = (file) => {
  const array = [];
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        const regex = /\[([^\[]+)\]\((.*)\)/gm;
        const links = data.match(regex);
        links.forEach((elem) => {
          text = elem.match(/\[([^\[]+)\]/)[1].replace('\n', '');
          href = elem.match(/\((.*)\)/)[1];
          array.push({ text, href, file });
        })
        resolve(array);
      }
    })
  })
}
module.exports = mdLinks;
