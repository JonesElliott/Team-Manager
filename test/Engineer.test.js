const Engineer = require("../lib/Engineer");

// Better description for the tests in the command line
describe("Engineer Class", () => {

  // Better description for arguments test
  describe("\n    Engineer Class Arguments", () => {

    test("Can set GitHUb account via constructor", () => {
      const testValue = "GitHubUser";
      const e = new Engineer("Foo", 1, "test@test.com", testValue);
      expect(e.github).toBe(testValue);

    });
  });

  // Better description for functions tests
  describe("\n    Engineer Class Functions", () => {

    test("getRole() function should return \"Engineer\"", () => {
      const testValue = "Engineer";
      const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
      expect(e.getRole()).toBe(testValue);
    });
    
    test("Can get GitHub username via getGithub() function", () => {
      const testValue = "GitHubUser";
      const e = new Engineer("Foo", 1, "test@test.com", testValue);
      expect(e.getGitHub()).toBe(testValue);
    });
    
  });
});

