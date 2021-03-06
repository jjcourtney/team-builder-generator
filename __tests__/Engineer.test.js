const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("github", () => {
        it("should have a property github", () => {
            
            const testEngineer = new Engineer("Jonathan", 1, "asd@asd.com", "testGithub");
            const hasGithub = testEngineer.hasOwnProperty("github");
            const githubType = typeof testEngineer.github;

            expect(hasGithub).toBe(true);
            expect(githubType).toBe("string");
        })
    });
    describe("getGithub", () => {
        it("Should return correct github username", () => {
            
            const expected =  "testGithub";
            const result = new Engineer("Jonathan", 1, "asd@asd.com", "testGithub").getGithub();

            expect(result).toEqual(expected);
        })
    });
    describe("getRole", () => {
        it("Should return 'Engineer'", () => {
            
            const expected = "Engineer";
            const result = new Engineer("Jonathan", 1, "asd@asd.com", "testGithub").getRole();

            expect(result).toEqual(expected);
        })
    });
})

