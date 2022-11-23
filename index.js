const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const theTeam = [];

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
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officNumber);
    theTeam.push(manager);
})}
