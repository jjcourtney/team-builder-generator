const Employee = require("../lib/Employee")

describe("Employee", () => {

    describe("getRole", () => {
        it("Should return 'Employee'", () => {
            
            const expected = "Employee"
            const result = new Employee("Jonathan", 1, "asd@asd.com").getRole()

            expect(result).toEqual(expected)
        })
    });
})

