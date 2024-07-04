// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
  
    {
        type: 'input',
        name: 'title',
        message: 'What is your repository name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the purpose and functionality of this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process for your project?',
        default: 'npm i',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information can you provide about the usage of the project?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license applicable to this project.',
        choices: ['MIT','APACHE_2.0','BSL_1.0','CC','None']

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would a user contribute to your repo?',

    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide walkthrough of required tests if applicable.',
        default: 'npm test',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide a valid email address.',

    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
        console.log('Generating your README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();