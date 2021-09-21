const typescriptProjects = ["./tsconfig.json", "./tsconfig.eslint.json"];

/** @type import("eslint").Linter.Config<import("eslint").Linter.RulesRecord> */
const config = {
  root: true,
  reportUnusedDisableDirectives: true,
  noInlineConfig: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: typescriptProjects,
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  settings: { react: { version: "detect" } },

  rules: {
    eqeqeq: "error",
    curly: ["error", "all"],

    "import/exports-last": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-default-export": "error",
    "import/group-exports": "error",
    "import/newline-after-import": "warn",
    "import/no-mutable-exports": "warn",

    // REACT

    /**
     * React core team recommends against prop-types and suggests to rely on
     * TypeScript instead:
     *
     * > Static type checkers like Flow and TypeScript identify certain types of
     * > problems before you even run your code. They can also improve developer
     * > workflow by adding features like auto-completion. For this reason, we
     * > recommend using Flow or TypeScript instead of PropTypes for larger code
     * > bases.
     *
     * @see https://reactjs.org/docs/static-type-checking.html
     */
    "react/prop-types": "off",

    "react/no-multi-comp": "error",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
    "react/prefer-stateless-function": "error",

    /**
     * Next.js v9.5.3+ and React v17.0.0+ remove the requirement of having React
     * in scope.
     *
     * @see https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
     * @see https://github.com/vercel/next.js/releases/tag/v9.5.3
     * @see https://github.com/vercel/next.js/pull/16603
     */
    "react/react-in-jsx-scope": "off",

    // TYPESCRIPT

    /**
     * TypeScript provides equivalent checks, so we turn them off
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
     */
    "import/default": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-named-as-default-member": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    "@typescript-eslint/no-unnecessary-condition": "error",

    // Avoid import statement for TS types, use explicit `import type`
    "@typescript-eslint/consistent-type-imports": "error",

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },

  overrides: [
    {
      files: ["src/next.js/**/*.tsx"],

      rules: {
        /**
         * Next.js consumes the `default` export, and certain exported functions
         * (e.g. `getServerSideProps`), causing `import/no-unused-modules` to
         * report a false-positive, so we disable it for all Next.js-pages.
         */
        "import/no-unused-modules": "off",
      },
    },
  ],
};

/** @type import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>[] */
const overrides = [
  {
    /**
     * This following rules can't be used on JavaScript in code-bases with
     * mixed JS/TS, so we turn them off on all `.js`-files
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/aee723813ec47ccac0a165cf1bc9674f6257b609/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#configuring-in-a-mixed-jsts-codebase
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/aee723813ec47ccac0a165cf1bc9674f6257b609/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#configuring-in-a-mixed-jsts-codebase
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/1f3c34426cea6d04df2393032e0728ade7390d3c/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
     */
    files: ["*.js"],

    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-implicit-any-catch": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },

  {
    /**
     * Configurations in project root
     */
    files: ["./*.js"],

    env: {
      node: true,
    },

    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },

  {
    /**
     * Jest recommended rules for all files jest would match
     * NB: This might conflict with other test-frameworks
     */
    files: ["*.test.ts", "*.test.tsx"],

    extends: [
      "plugin:jest/recommended",
      "plugin:jest-formatting/recommended",
      "plugin:jest-dom/recommended",
      "plugin:testing-library/react",
    ],
  },
];

module.exports = { ...config, overrides };
