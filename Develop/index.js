// NPM Packages
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const open = require('open');

const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'Enter a GitHub username:'
    },
    {
      type: 'list',
      name: 'color',
      message: 'Which color do you prefer?',
      choices: [
        'green',
        'blue',
        'pink',
        'red'
      ]
    }
  ];

function writeToFile(fileName, data) {
 
}

function init() {
}


