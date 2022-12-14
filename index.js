// variables and files required
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const theTeam = [];
const renderPage = require('./src/template')

// prompt for manager questions
const managerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'Id',
                message: 'What is your employee Id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?',
            },
        ])

.then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber);
    theTeam.push(manager);
    teamOptions();
})};
// prompt for list of team member options
const teamOptions = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'What would you like to do?',
            choices: [
                'addEngineer',
                'addIntern',
                'finishedTeam'
            ]
        }
    ])
    .then((answer) => {
        switch (answer.userChoice) {
            case 'addEngineer':
                addEngineer();
                break;
            case 'addIntern':
                addIntern();
                break;
            default: 
                createTeam();
        } 
    }) 
}
// prompt for engineer questions
function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is your employee Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
    ])

.then(answers => {
console.log(answers);
const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.github);
theTeam.push(engineer);
teamOptions();
})  
}
// prompt for Intern questions
function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is your employee Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
        },
    ])

.then(answers => {
console.log(answers);
const intern = new Intern(answers.name, answers.Id, answers.email, answers.school);
theTeam.push(intern);
teamOptions();
})  
}
// function to fill theTeam with answers from the prompt and create HTML
function createTeam() {
    console.log(theTeam);
    
    fs.writeFileSync(path.join(__dirname, 'dist/team.html'),renderPage(theTeam), 'utf-8');
}
managerQuestions();