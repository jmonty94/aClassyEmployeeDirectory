const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Init", () => {
        it("Should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("name" in obj).toEqual(true)
        })
        it("Should return an object containing a 'id' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("id" in obj).toEqual(true)
        })
        it("Should return an object containing a 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee();
            expect("email" in obj).toEqual(true)
        })
        it('Should have a properties that are equal to the arguments that were passed in', () => {
            const name = "James"
            const result = new Employee(name, 1, "anon@gmail.com")
            expect(result.name).toEqual(name)
        })
        it('Should have a properties that are equal to the arguments that were passed in', () => {
            const id = 1
            const result = new Employee("James", id, "anon@gmail.com")
            expect(result.id).toEqual(id)
        })
        it('Should have a properties that are equal to the arguments that were passed in', () => {
            const email = "anon@gmail.com"
            const result = new Employee("James", 4, email)
            expect(result.email).toEqual(email)
        })
        it("Should throw an error if a valid name was not provided", () => {
            const callbackFn = () => new Employee();
            const expectedError = new Error("Name must be a string and not empty")
            expect(callbackFn).toThrowError(expectedError)
        })
        it("Should throw an error if a valid ID was not provided", () => {
            const callbackFn = () => new Employee();
            const expectedError = new Error("ID must be a number and not empty")
            expect(callbackFn).toThrowError(expectedError)
        })
        it("Should throw an error if a valid email was not provided", () => {
            const callbackFn = () => new Employee();
            const expectedError = new Error("Email must be a string and not empty")
            expect(callbackFn).toThrowError(expectedError)
        })
    })
})