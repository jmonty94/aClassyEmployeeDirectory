import fs from "node:fs";
import inquirer from "inquirer";
import {Employee} from './lib/Employee.js';
import {Manager} from './lib/Manager.js';
import {Engineer} from './lib/Engineer.js';
import {Intern} from './lib/Intern.js';
import {managerQuestions, addEmployee, engineerQuestions, internQuestions} from './src/questions.js'

async function init() {
    await inquirer.prompt(managerQuestions).then((answers) => {
        // console.log(answers);
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);

        addNewEmployee();
    });
};

const addNewEmployee = function() {
    inquirer.prompt(addEmployee).then((answers) => {
        let answer = answers.employee;
        if (answer === `Engineer`) {
            addEngineer();
        } else if (answer === `Intern`) {
            addIntern();
        } else if (answer === `No thanks`){
            console.log(`Creating HTML`);
        }
    })
};
const addEngineer = function() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        addNewEmployee();
    });
};
const addIntern = function() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        addNewEmployee();
    });
};



init()


