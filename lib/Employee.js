class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || name.trim().length === 0) {
            throw new Error('Name must be a string and not empty')
        }
        this.name = name;
        if (typeof id !== "number") {
            throw new Error('ID must be a number and not empty')
        }
        this.id = id;
        if (typeof email !== "string" || email.trim().length === 0) {
            throw new Error('Email must be a string and not empty')
        }
        this.email = email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }

}




module.exports = Employee;