// TODO: Include packages needed for this application
// Require 'fs','inquirer',  and 'generatemarkdown'.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'username',
        message: 'What is your Github username?',
        type: 'input',
        validate: function (answer) {
            if (answer === '') {
                return "username required.";
            }
            return true;
        },
    },
    {
        name: 'title',
        message: "Give your project a title.",
        type: 'input',
        validate: function (answer) {
            if (answer === '') {
                return "Title required!";
            }
            return true;
        },
    },
    {
        name: 'description',
        message: "Please, describe the idea behind your project.",
        type: 'input',
        validate: function (answer) {
            if (answer === '') {
                return "Please provide a brief description";
            }
            return true;
        },
    },
    {
        name: 'installation',
        message: 'What programs did you use?',
        type: 'checkbox',
        choices: ['HTML', 'CSS', 'JS', 'NODE.JS'],
        validate: function (answer) {
            if (answer.length < 1) {
                return "Please select one.";
            }
            return true;
        },
    },
    {
        name: 'collaborators',
        message: 'Any co-creators or contributions?',
        type: 'input',
    },
    {
        name: 'license',
        message: "Choose a license for your project.",
        type: 'list',
        choices: ['Apache', 'MIT', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'none'],
    },
];

// Description, Installation, Usage, Contributing, and Tests

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ? console.error(error) : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => writeToFile('readme sample.md', generateMarkdown(response)));
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the {title} of my project and {sections} entitled [Description], [Table of Contents], [Installation], [Usage], [License], [Contributing], [Tests], and [Questions]

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README