const fs = require('fs');

const readFile = (file, option) => {
  const array = [];
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err.message);
      } else {        
          const regex = /\[([^\[]+)\]\((http.*)\)/gm;
          const links = data.match(regex);
          links.forEach((elem) => {
            text = elem.match(/\[([^\[]+)\]/)[1].replace('\n', '');
            href = elem.match(/\((http.*)\)/)[1];
            array.push({ file,text, href});
          })
        resolve(array);
      }
    })
  })
}
module.exports = readFile; 
