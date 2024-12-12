// isEven.test.js
const isEven = require("./isEven"); // Importera funktionen

describe("isEven", () => {
  test("checks if 2 is even", () => {
    expect(isEven(2)).toBe(true); // Förväntar att 2 är jämnt
  });

  test("checks if 3 is odd", () => {
    expect(isEven(3)).toBe(false); // Förväntar att 3 är udda
  });
});
