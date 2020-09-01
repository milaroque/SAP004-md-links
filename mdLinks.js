const checkLinks = require('./src/validatehttp');
const statsLink = require('./src/statshttp');
const mdLinks = require('./index.js');
const chalk = require('chalk');

const checkMdLinks = (file, option) => {
  return mdLinks(file, option)
  .then((array) => {
    if (option.includes('--validate') && option.includes('--stats')) {
      return (checkLinks(array)).then((res) => {
        res.map((i) => console.log(`${chalk.red.bold(i.file)} ${chalk.blueBright.bold(i.href)} ${chalk.red.bold(i.status)} ${chalk.red.bold(i.statusText)} ${chalk.magenta.bold(i.text).substring(0, 50)}`));
        console.log(statsLink(res));
      });
    } else if (option.includes('--validate')) {
      return (checkLinks(array)).then((res) => {
      res.map((i) => console.log(`${chalk.red.bold(i.file)} ${chalk.blueBright.bold(i.href)} ${chalk.red.bold(i.status)} ${chalk.red.bold(i.statusText)} ${chalk.magenta.bold(i.text).substring(0, 50)}`));
      return res;
      });
    } else if (option.includes('--stats')) {
      return (checkLinks(array)).then((res) => console.log(statsLink(res)))
    }else {
      return array.flat().map((i) => console.log(`${chalk.red.bold(i.file)} ${chalk.blueBright.bold(i.href)} ${chalk.magenta.bold(i.text).substring(0, 50)}`));
    }
  });
};

module.exports = checkMdLinks