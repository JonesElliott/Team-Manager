const Employee = require("../lib/Employee");

// Better description for the tests in the command line
describe("Employee Class", () => {

  // Better description for this area of the emplyee class test
  describe("\n    Employee Class Arguments", () => {
    
    test("Instantiate Employee (Class) instance", () => {
      const e = new Employee();
      expect(typeof(e)).toBe("object");
    });
    
    test("Can set name argument via constructor arguments", () => {
      const name = "Alice";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });
    
    test("Can set id argument via constructor argument", () => {
      const testValue = 100;
      const e = new Employee("Foo", testValue);
      expect(e.id).toBe(testValue);
    });
    
    test("Can set email argument via constructor argument", () => {
      const testValue = "test@test.com";
      const e = new Employee("Foo", 1, testValue);
      expect(e.email).toBe(testValue);
    });
  });

  // Better description for this area of the emplyee class test
  describe("\n    Employee Class Functions", () => {

    test("Can get name argument via getName() function", () => {
      const testValue = "Alice";
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
    
    test("Can get id argument via getId() function", () => {
      const testValue = 100;
      const e = new Employee("Foo", testValue);
      expect(e.getId()).toBe(testValue);
    });
    
    test("Can get email argument via getEmail() function", () => {
      const testValue = "test@test.com";
      const e = new Employee("Foo", 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
    
    test("Can get role argument via getRole() function | returns \"Employee\" as default", () => {
      const testValue = "Employee";
      const e = new Employee("Alice", 1, "test@test.com");
      expect(e.getRole()).toBe(testValue);
    });
  });
});
