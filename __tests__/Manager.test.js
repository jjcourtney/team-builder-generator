const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        it("should have a property officeNumber", () => {
            
            const testManager = new Manager("Jonathan", 1, "asd@asd.com", 5);
            const hasOfficeNumber = testManager.hasOwnProperty("officeNumber");
            const officeNumberType = typeof testManager.officeNumber;

            expect(hasOfficeNumber).toBe(true);
            expect(officeNumberType).toBe("number");
        })
    });
    describe("getRole", () => {
        it("Should return 'Manager'", () => {
            
            const expected = "Manager";
            const result = new Manager("Jonathan", 1, "asd@asd.com", 5).getRole();

            expect(result).toEqual(expected);
        })
    });
})

