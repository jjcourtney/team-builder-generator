const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school", () => {
        it("should have a property school", () => {
            
            const testIntern = new Intern("Jonathan", 1, "asd@asd.com", "testSchool");
            const hasSchool = testIntern.hasOwnProperty("school");
            const schoolType = typeof testIntern.school;

            expect(hasSchool).toBe(true);
            expect(schoolType).toBe("string");
        })
    });
    describe("getSchool", () => {
        it("Should return correct school username", () => {
            
            const expected =  "testSchool";
            const result = new Intern("Jonathan", 1, "asd@asd.com", "testSchool").getSchool();

            expect(result).toEqual(expected);
        })
    });
    describe("getRole", () => {
        it("Should return 'Intern'", () => {
            
            const expected = "Intern";
            const result = new Intern("Jonathan", 1, "asd@asd.com", "testSchool").getRole();

            expect(result).toEqual(expected);
        })
    });
})

