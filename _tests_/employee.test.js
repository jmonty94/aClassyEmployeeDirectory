const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Init", () => {
        it(`Employee instance should have a "name" property of James`, () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const employee = new Employee(name, id, email);
            expect(employee.name).toEqual(name);
        });
        it(`Employee instance should have a "id" property of 1`, () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const employee = new Employee(name, id, email);
            expect(employee.id).toEqual(id);
        });
        it(`Employee instance should have a "email" property of "anon@gmail.com"`, () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const employee = new Employee(name, id, email);
            expect(employee.email).toEqual(email);
        });
        it("Should throw an error if a valid name was not provided", () => {
            const name = null || " " || 4;
            const id = 1;
            const email = "anon@gmail.com";
            const callbackFn = () => new Employee(name, id, email);
            const expectedError = new Error("Name must be a string and not empty");
            expect(callbackFn).toThrowError(expectedError);
        });
        it("Should throw an error if a valid ID was not provided", () => {
            const name = "James";
            const id = "1" || null;
            const email = "anon@gmail.com";
            const callbackFn = () => new Employee(name, id, email);
            const expectedError = new Error("ID must be a number and not empty");
            expect(callbackFn).toThrowError(expectedError);
        });
        it("Should throw an error if a valid email was not provided", () => {
            const name = "James";
            const id = 1;
            const email = " " || 4;
            const callbackFn = () => new Employee(name, id, email);
            const expectedError = new Error("Email must be a string and not empty");
            expect(callbackFn).toThrowError(expectedError);
        });
    });
    describe("getName Method", () => {
        it("The getName method should get the Employee instance's 'name' property", () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const employeeObj = new Employee(name, id, email);
            const result = employeeObj.getName();
            expect(result).toEqual(name);
        });
    });
    describe("getId Method", () => {
        it("getID method should get the Employee instance's 'id' property", () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const employeeObj = new Employee(name, id, email);
            const result = employeeObj.getId();
            expect(result).toEqual(id);
        });
    });
    describe("getEmail Method", () => {
        it("getEmail method should get the Employee instance's 'email' property", () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const employeeObj = new Employee(name, id, email);
            const result = employeeObj.getEmail();
            expect(result).toEqual(email);
        });
    });
    describe("getRole Method", () => {
        it(`Should return the default role of "Employee"`, () => {
            const newEmployee = new Employee("James", 1, "anon@gmail.com")
            const result = newEmployee.getRole()
            expect(result).toEqual('Employee')
        })
    })
});