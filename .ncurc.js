/** @type {(d: string) => boolean} */
const hasDateExpired = (d) => Date.now() > new Date(d).getTime();

/** @type {(package: string, date: string) => string[]} */
const avoidUpdatingPackageUntil = (package, date) =>
  hasDateExpired(date) ? [] : [package];

const reject = [
  "@types/node",
  avoidUpdatingPackageUntil("eslint", "2021-11-15"),
].flat();
module.exports = {
  packageManager: "yarn",
  upgrade: true,
  /** @type {string[]} */ reject,
};
