#!/usr/bin/env node

const mdLinks = require('./index.js');
const axios = require('axios');
const chalk = require('chalk');
const file = process.argv[2];
const option = process.argv[3];

mdLinks(file, option)
	.then((array) => {
		array.map((elem) => {
		if (option === '--validate'){
			axios.get(elem.href)
			.then((response) => {
				console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.blueBright.bold(response.status)} ${chalk.blueBright.bold(response.statusText)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`) 
			}).catch(error => {
				console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.blueBright.bold(error)} ${chalk.blueBright.bold(error)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`)
			})
		}else{
			console.log(`${chalk.red.bold(elem.file)} ${chalk.blueBright.bold(elem.href)} ${chalk.magenta.bold(elem.text.substring(0, 50))}`)
		}
			
		})
	})
	.catch((error) => console.log(error));
