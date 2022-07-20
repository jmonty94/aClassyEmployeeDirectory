import {Employee} from './Employee.js';

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        if (typeof github !== "string" || github.trim().length === 0) {
            throw new Error('github must be a string and not empty');
        };
        this.github = github;
        this.role = "Engineer";
    };
    getGithub(){
        return this.github;
    };
};

export {Engineer};