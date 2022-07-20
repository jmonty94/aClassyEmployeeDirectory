const Employee = require('../lib/Employee');
const Manager  = require('../lib/Manager');

describe(`Manager`, () => {
    describe(`Init`, () => {
        it(`Should create an instance of "Manager" that is an extension of "Employee"`, () => {
            const newManager = new Manager("James", 1, "anon@anon.com", 48)
            expect(newManager instanceof Employee).toEqual(true)
        })
        it(`Should have an "officeNumber" property equal to the argument passed in`, () => {
            const newManager = new Manager("James", 1, "anon@anon.com", 48)
            expect(newManager.officeNumber).toEqual(48)
        })
    })
})