#!/usr/bin/env node
const checkMdLinks = require('./mdLinks')


const file = process.argv[2];
const option = process.argv;

checkMdLinks(file, option);

