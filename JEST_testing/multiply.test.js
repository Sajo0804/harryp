// multiply.test.js
const multiply = require("./multiply"); // Importera funktionen

describe("multiply", () => {
  test("multiplies 2 by 3 to equal 6", () => {
    expect(multiply(2, 3)).toBe(6); // Förväntar att 2 * 3 = 6
  });

  test("multiplies -1 by 5 to equal -5", () => {
    expect(multiply(-1, 5)).toBe(-5); // Förväntar att -1 * 5 = -5
  });
});
