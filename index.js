// TODO: Include packages needed for this application
// Require 'fs','inquirer',  and 'generatemarkdown'.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: "What do you want to call your project?",
        type: 'input'
    },
    {
        name: 'description',
        message: "Please, describe the idea behind your project.",
        type: 'input' 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (error) => error ? console.error(error) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then(response => writeToFile('readme.md', generateMarkdown(response)));
}

// Function call to initialize app
init();
writeToFile();