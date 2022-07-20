const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        if (typeof school !== "string" || school.trim().length === 0) {
            throw new Error('school must be a string and not empty');
        }
        this.school = school;
        this.role = "Intern";
    };
    getSchool() {
        return this.school;
    };
};

module.exports = Intern