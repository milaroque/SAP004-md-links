#!/usr/bin/env node
const chalk = require('chalk');
const mdLinks = require('./index.js');
const checkLinks = require('./validatehttp.js');
const statsLink = require('./statshttp.js');

const file = process.argv[2];
const option = process.argv;

mdLinks(file, option)
  .then((array) => {
    if (option.includes('--validate') && option.includes('--stats')) {
      Promise.all(checkLinks(array)).then((res) => res.map((elem) => console.log(`${chalk.red.bold(file)} ${chalk.blueBright.bold(elem.href)} ${chalk.red.bold(elem.status)} ${chalk.red.bold(elem.statusText)} ${chalk.magenta.bold(elem.text).substring(0, 50)}`)));
      Promise.all(checkLinks(array)).then((res) => console.log(statsLink(res)));
    } else if (option.includes('--validate')) {
      Promise.all(checkLinks(array)).then((res) => res.map((elem) => console.log(`${chalk.red.bold(file)} ${chalk.blueBright.bold(elem.href)} ${chalk.red.bold(elem.status)} ${chalk.red.bold(elem.statusText)} ${chalk.magenta.bold(elem.text).substring(0, 50)}`)));
    } else if (option.includes('--stats')) {
      Promise.all(checkLinks(array)).then((res) => console.log(statsLink(res)));
    } else {
      array.map((elem) => console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`));
    }
  })
  .catch((error) => console.log(error));
