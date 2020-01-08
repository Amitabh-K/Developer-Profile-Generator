const fs = require("fs")
const axios = require("axios")
const inquirer = require("inquirer")
const pdf = require("html-pdf")
const open = require("open")
const generateHTML = require("./generateHTML")


const data = {}
const questions = [{
    type: "input",
    name: "username",
    message: "Enter your GitHub username: ",
},
{
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"],
}];

init();
function init() {
    inquirer
        .prompt(questions)
        .then(function ({ username, color }) {
            const queryURL = `https://api.github.com/users/${username}`;
            const querlURLStar = `https://api.github.com/users/${username}/starred`
            axios.get(queryURL).
                then(function ({ data }) {
                    
                })
        })
}