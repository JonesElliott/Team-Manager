const Intern = require("../lib/Intern");

describe("Intern Class", () => {

  describe("\n    Intern Arguments", () => {

    test("Can set school via constructor", () => {
      const testValue = "UCLA";
      const e = new Intern("Foo", 1, "test@test.com", testValue);
      expect(e.school).toBe(testValue);
    });

  });

  describe("\n    Intern Functions", () => {

    test("getRole() should return \"Intern\"", () => {
      const testValue = "Intern";
      const e = new Intern("Foo", 1, "test@test.com", "UCLA");
      expect(e.getRole()).toBe(testValue);
    });
    
    test("Can get school via getSchool()", () => {
      const testValue = "UCLA";
      const e = new Intern("Foo", 1, "test@test.com", testValue);
      expect(e.getSchool()).toBe(testValue);
    });

  });
});
