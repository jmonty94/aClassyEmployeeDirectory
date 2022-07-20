const Employee = require('../lib/Employee');
const Manager  = require('../lib/Manager');

describe(`Manager`, () => {
    describe(`Init`, () => {
        it(`Should create an instance of "Manager" that is an extension of "Employee"`, () => {
            const newManager = new Manager("James", 1, "anon@anon.com", 48);
            expect(newManager instanceof Employee).toEqual(true);
        });
        it(`Should have an "officeNumber" property equal to the argument passed in`, () => {
            const newManager = new Manager("James", 1, "anon@anon.com", 48);
            expect(newManager.officeNumber).toEqual(48);
        });
        it(`Should throw an Error if a valid input for officeNumber was not provided`, () => {
            const officeNumber = "";
            const callbackFn = () => new Manager("James", 1, "anon@anon.com", officeNumber);
            const expectedError = 'officeNumber must be a number and not empty';
            expect(callbackFn).toThrow(expectedError);
        });
    });
    describe(`getOfficeNumber method`, () => {
        it(`Should return the "officeNumber" properties value`, () => {
            const newManager = new Manager("James", 1, "anon@anon.com", 48);
            const result = newManager.getOfficeNumber();
            expect(result).toEqual(newManager.officeNumber);
        });
    });
    describe(`getRole method`, () => {
        it(`Should return the "role" property with a value of "Manager"`, () => {
            const newManager = new Manager("James", 1, "anon@anon.com", 48);
            const result = newManager.getRole()
            expect(result).toEqual("Manager")

        })
    })
})