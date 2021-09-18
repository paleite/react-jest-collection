const { eslintFiles } = require("eslint-files");

module.exports = {
  "*.js": [
    () => "tsc --project tsconfig.eslint.json",
    "jest --bail --findRelatedTests",
    /** @param {string[]} files */
    async (files) =>
      `eslint --config .eslintrc.precommit.js --fix --max-warnings=0 ${await eslintFiles(
        files
      )}`,
    "prettier --write",
  ],
  "*.json": "prettier --write",
  "*.md": "prettier --write",
  "*.ts?(x)": [
    () => "yarn run typecheck",
    "jest --bail --findRelatedTests",
    /** @param {string[]} files */
    async (files) =>
      `eslint --config .eslintrc.precommit.js --fix --max-warnings=0 ${await eslintFiles(
        files
      )}`,
    "prettier --write",
  ],
};
