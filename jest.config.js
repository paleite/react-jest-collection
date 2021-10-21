const RESET_MODULES_MUST_BE_FALSE_OR_ELSE_NEXT_PAGE_TESTER_FAILS = false;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  resetModules: RESET_MODULES_MUST_BE_FALSE_OR_ELSE_NEXT_PAGE_TESTER_FAILS,
  collectCoverage: true,
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
  // Configure testing-library to be fail the tests when there are better
  // queries that can be used.
  // setupFiles: ["./config/setup-tests.ts"],
};
