import {Employee} from "../lib/Employee.js";
import {Engineer} from "../lib/Engineer.js";

describe(`Engineer`, () => {
    describe(`Init`, () => {
        it(`Should create an instance of "Engineer" that is an extension of "Employee"`, () => {
            const newEngineer = new Engineer("James", 1, "anon@anon.com", "jmonty94");
            expect(newEngineer instanceof Employee).toEqual(true);
        });
        it(`Should have a "github" property equal to the argument passed`, () => {
            const newEngineer = new Engineer("James", 1, "anon@anon.com", "jmonty94");
            expect(newEngineer.github).toEqual("jmonty94");
        });
        it(`Should throw an Error if a valid input for "github" property is not provided`, () => {
            const github = "";
            const callbackFn = () => new Engineer("James", 1, "anon@anon.com", github);
            const expectedError = 'github must be a string and not empty';
            expect(callbackFn).toThrow(expectedError);
        });
    });
    describe(`getGithub Method`, () => {
        it(`Should return the "github" property's value`, () => {
            const newEngineer = new Engineer("James", 1, "anon@anon.com", "jmonty94");
            const result = newEngineer.getGithub();
            expect(result).toEqual(newEngineer.github);
        });
    });
    describe(`getRole method`, () => {
        it(`Should return the "role" property with a value of "Engineer"`, () => {
            const newEngineer = new Engineer("James", 1, "anon@anon.com", "jmonty94");
            const result = newEngineer.getRole();
            expect(result).toEqual("Engineer");

        });
    });
});