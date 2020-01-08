const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const puppeteer = require("puppeteer");
const genHTML = require("./generateHTML");


function init() {
    startPDFGenerator();
}

// Take Username and Color as an input using inquirer
async function startPDFGenerator () {

    let username = await inquirer.prompt({
        
        message: "Please provide the Github username:  ",
        name: "name"

    });
    
    let color = await inquirer.prompt({
        
        name: "color",
        message: "Using the arrow keys select the color:  ",
        type: "list",
        choices: ['green', 'pink', 'blue', 'red']
        
    });

// Store Github  json and user input


    let name = username.name;
    const queryUrl = `https://api.github.com/users/${name}`
    const repoStars = `https://api.github.com/users/${name}/starred`
    let GHFeed = await gitHubData(queryUrl, repoStars);

    GHFeed.color = validateColor(color.color);

    const html = genHTML.generateHTML(GHFeed);
    const filename = GHFeed.name;

    generatePDF(filename, html);
}

//Match n map the github json with objects listed in generateHTML.js file

 // call to get the stars 

 



// try and catch statement that knows how to handle the situation that the github user has no stars, and takes that situation to set the stars to 0
    
  


// function ties in the color list to the color list in provided generateHTML.js file


// generate the PDF and send it go the results folder in the same directory
