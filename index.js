import fs from "node:fs";
import inquirer from "inquirer";
import {Employee} from './lib/Employee.js';
import {Manager} from './lib/Manager.js';
import {Engineer} from './lib/Engineer.js';
import {Intern} from './lib/Intern.js';

const managerQuestions = [
    {
        message: "What is the Manager of your team's name?",
        name: "mangerName",
        type: "input",
    },
    {
        message: "What is their Employee ID number?",
        name: "managerID",
        type: "number",
    },
    {
        message: "What is their email address?",
        name: "managerEmail",
        type: "input",
    },
    {
        message: "What is their Office Number?",
        name: "officeNumber",
        type: "number",
    },
]


function init() {
    inquirer.prompt(managerQuestions).then((inquirerResponses) => {
        console.log(inquirerResponses);
    })
}
init()