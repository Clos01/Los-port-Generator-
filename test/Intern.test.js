// (npm run test) this requiers it to through lib then intern to make sure the code works from there it tests the values to make sure it can give an output same with all test

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Unc";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "Unc");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Unc";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
