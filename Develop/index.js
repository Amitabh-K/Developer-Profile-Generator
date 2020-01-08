// NPM Packages
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const open = require('open');

const convertFactory = require('electron-html-to');
const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});

const generateHTML = require('./generateHTML');


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

inquirer
  .prompt(questions)
  .then(answers => {
    // Destructure answers
    const { username, color } = answers;
    // Make two requests to GitHub based on username
    Promise.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/starred`)
    ]).then(response => {
      // Destructure response #1 which contains most of the data
      const { data } = response[0];
      // Response #2 is just to get the number of starred repos
      data.stars = response[1].data.length;
      // Convert to PDF passing in data and color args
      conversion({
        html: generateHTML(data, color)
      }, (err, result) => {
        if (err) throw err;
        result.stream.pipe(fs.createWriteStream('output/profile.pdf'));
        conversion.kill();
        // Open resulting PDF
        open('output/profile.pdf');
      });
    });
  });


