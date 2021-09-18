/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // Include all ts- and tsx-files, so we don't accidentally forget to put them
  // under test.
  collectCoverageFrom: ["**/*.ts", "**/*.tsx"],
  // Ensure no code is written without a test.
  coverageThreshold: {
    global: { branches: 100, functions: 100, lines: 100, statements: 100 },
  },
  // Use ts-jest for our tests, to get typechecking.
  preset: "ts-jest",
  // All tests are located below the `src` directory.
  roots: ["src"],
};
