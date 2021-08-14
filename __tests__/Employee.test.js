const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the name of the Employee", () => {
            const expected = "Jonathan";
            const result = new Employee("Jonathan", 1, "asd@asd.com").getName();

            expect(result).toEqual(expected);
        })
    });
    describe("getId", () => {
        it("should return an id of the Employee", () => {
            const expected = 1;
            const result = new Employee("Jonathan", 1, "asd@asd.com").getId();

            expect(result).toEqual(expected);
        })
    });
    describe("getEmail", () => {
        it("should return an email of the Employee", () => {
            const expected = "asd@asd.com";
            const result = new Employee("Jonathan", 1, "asd@asd.com").getEmail();

            expect(result).toEqual(expected);
        });
        it("should return 'Invalid email' if incorrect format inputted into email'", () => {
            const expected = "Invalid email";
            const result = new Employee("Jonathan", 1, "asf").getEmail();

            expect(result).toEqual(expected);
        });
    });
    describe("getRole", () => {
        it("Should return 'Employee'", () => {
            
            const expected = "Employee";
            const result = new Employee("Jonathan", 1, "asd@asd.com").getRole();

            expect(result).toEqual(expected);
        })
    });
})

