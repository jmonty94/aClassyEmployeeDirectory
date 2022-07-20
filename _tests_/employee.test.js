const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Init", () => {
        it("Should return an object containing a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const newEmployee = new Employee(name, id, email);
            expect("name" in newEmployee && "id" in newEmployee && "email" in newEmployee).toEqual(true);
        });
        it('Should have a properties that are equal to the arguments that were passed in', () => {
            const name = "James";
            const id = 1;
            const email = "anon@gmail.com";
            const result = new Employee(name, id, email);
            expect(result.name && result.id && result.email).toEqual(name && id && email);
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
});