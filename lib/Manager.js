const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        if (typeof officeNumber !== "number") {
            throw new Error('officeNumber must be a number and not empty')
        }
        this.officeNumber = officeNumber
        this.role = "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return this.role
    }
}


module.exports = Manager