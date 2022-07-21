const managerQuestions = [
    {
        message: "What is the Manager of your team's name?",
        name: "name",
        type: "input",
    },
    {
        message: "What is their Employee ID number?",
        name: "id",
        type: "number",
    },
    {
        message: "What is their email address?",
        name: "email",
        type: "input",
    },
    {
        message: "What is their Office Number?",
        name: "officeNumber",
        type: "number",
    },
];
const addEmployee = [
    {
        message: `Would you like to add another employee?`,
        name: `employee`,
        type: `list`,
        choices:[`Engineer`, `Intern`, `No thanks`],
    },
];
const engineerQuestions = [
    {
        message: `What is your Engineer's name?`,
        name: `name`,
        type: `input`,
    },
    {
        message: `What is their Employee ID number?`,
        name: `id`,
        type: `number`,
    },
    {
        message: `What is their Email Address?`,
        name: `email`,
        type: `input`,
    },
    {
        message: `What is their GitHub profile name?`,
        name: `github`,
        type: `input`,
    },
];
const internQuestions = [
    {
        message: `What is your Intern's name?`,
        name: `name`,
        type: `input`,
    },
    {
        message: `What is their Employee ID number?`,
        name: `id`,
        type: `number`,
    },
    {
        message: `What is their Email Address?`,
        name: `email`,
        type: `input`,
    },
    {
        message: `What school does your Intern attend?`,
        name: `school`,
        type: `input`,
    },
];

export { managerQuestions, addEmployee, engineerQuestions, internQuestions }