#!/usr/bin/env node

const mdLinks = require('./index.js');
const chalk = require('chalk');
const statsLink = require('./statshttp.js');
const checkLinks = require('./validatehttp.js');
const file = process.argv[2];
const option = process.argv;

mdLinks(file, option)
  .then((array) => {
    array.map((elem) => {
      if (option.includes('--validate') && option.includes('--stats')){
        console.log(statsLink(array))
          checkLinks(elem.href)
          /* .then((response) => {
            console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.red.bold(response.status)} ${chalk.red.bold(response.statusText)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`)
            console.log(statsLink(array))
          }).catch(error => {
            console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.red.bold(error)} ${chalk.red.bold(error)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`)
          }) */
      } else {
        console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`)
      }

    })
  })
  .catch((error) => console.log(error));
