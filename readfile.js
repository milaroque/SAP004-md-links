const fs = require('fs');
const chalk = require('chalk');
const checkLinks = require('./validatehttp');
const statsLink = require('./statshttp');

const readFile = (file, option) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject(err.message);
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
      if (option.includes('--validate') && option.includes('--stats')) {
        return Promise.all(checkLinks(array)).then((res) => {
          res.map((i) => console.log(`${chalk.red.bold(file)} ${chalk.blueBright.bold(i.href)} ${chalk.red.bold(i.status)} ${chalk.red.bold(i.statusText)} ${chalk.magenta.bold(i.text).substring(0, 50)}`));
          console.log(statsLink(res));
        });
      } if (option.includes('--validate')) {
        return Promise.all(checkLinks(array)).then((res) => {
          res.map((i) => console.log(`${chalk.red.bold(file)} ${chalk.blueBright.bold(i.href)} ${chalk.red.bold(i.status)} ${chalk.red.bold(i.statusText)} ${chalk.magenta.bold(i.text).substring(0, 50)}`));
        });
      } if (option.includes('--stats')) {
        return Promise.all(checkLinks(array)).then((res) => console.log(statsLink(res)));
      }
      Promise.all(array).then((res) => {
        res.map((i) => console.log(`${chalk.red.bold(file)} ${chalk.blueBright.bold(i.href)} ${chalk.magenta.bold(i.text).substring(0, 50)}`));
      });

      resolve(array, option);
    }
  });
});
module.exports = readFile;
