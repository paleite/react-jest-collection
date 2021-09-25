const { eslintFiles } = require("eslint-files");

module.exports = {
  "*.js": [
    "cspell",
    () => "tsc --project tsconfig.eslint.json",
    /** @param {string[]} files */
    async (files) =>
      `eslint --config .eslintrc.precommit.js --fix --max-warnings=0 ${await eslintFiles(
        files
      )}`,
    "prettier --write",
  ],
  "*.json": "prettier --write",
  "*.md": ["cspell", "prettier --write"],
  "*.ts?(x)": [
    "cspell",
    () => "yarn run typecheck",
    () => "jest --bail --coverage",
    /** @param {string[]} files */
    async (files) =>
      `eslint --config .eslintrc.precommit.js --fix --max-warnings=0 ${await eslintFiles(
        files
      )}`,
    "prettier --write",
  ],
};
