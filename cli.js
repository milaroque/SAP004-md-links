#!/usr/bin/env node

const mdLinks = require('./index.js');

const checkMdLinks = (file, option) => {
  mdLinks(file, option);
};

const file = process.argv[2];
const option = process.argv;

checkMdLinks(file, option);
