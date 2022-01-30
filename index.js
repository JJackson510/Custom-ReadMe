// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput =>{
                if(nameInput) {
                    return true;
                }else{
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }else{
                    console.log('Please enter a valid GitHub username!');
                }
            }
        },
        {
            type : 'input',
            name :'about',
            message: 'Please tell us about your project',
            validate: aboutInput => {
                if(aboutInput) {
                    return true;
                }else {
                    console.log('Please give us a description of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'emailInput',
            message: 'Please enter your email address',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }else{
                    console.log('Please provide a valid email address.');
                }
            }
        }
    ]);
};

const promptUser = (qs) => inquirer.prompt(qs)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`,generateMarkdown(), err =>  ee && console.log(err))
}

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();

generateMarkdown();