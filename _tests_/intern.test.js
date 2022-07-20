const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe(`Intern`, () => {
    describe(`Init`, () => {
        it(`Should create an instance of "Intern" that is an extension of "Employee"`, () => {
            const newIntern = new Intern("James", 1, "anon@anon.com", "UC Berkeley");
            expect(newIntern instanceof Employee).toEqual(true);
        });
        it(`Should have a "school" property equal to the argument passed`, () => {
            const newIntern = new Intern("James", 1, "anon@anon.com", "UC Berkeley");
            expect(newIntern.school).toEqual("UC Berkeley");
        });
        it(`Should throw an Error if a valid input for "school" property is not provided`, () => {
            const school = "";
            const callbackFn = () => new Intern("James", 1, "anon@anon.com", school);
            const expectedError = 'school must be a string and not empty';
            expect(callbackFn).toThrow(expectedError);
        });
    });
    describe(`getSchool Method`, () => {
        it(`Should return the "school" property's value`, () => {
            const newIntern = new Intern("James", 1, "anon@anon.com", "UC Berkeley");
            const result = newIntern.getSchool();
            expect(result).toEqual(newIntern.school);
        });
    });
    describe(`getRole method`, () => {
        it(`Should return the "role" property with a value of "Intern"`, () => {
            const newIntern = new Intern("James", 1, "anon@anon.com", "UC Berkeley");
            const result = newIntern.getRole();
            expect(result).toEqual("Intern");

        });
    });
});
