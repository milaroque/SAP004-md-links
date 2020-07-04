#!/usr/bin/env node

const mdLinks = require ('./index.js');
const chalk = require ('chalk');
const file = process.argv[2];

mdLinks(file)
.then((array)=> {
    array.forEach((elem)=> {
        console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`)
    })
})
.catch((error) => console.log(error));

