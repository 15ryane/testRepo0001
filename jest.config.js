// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "scss"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$":
      "<rootDir>/.tests/file-mock.js",
    "\\.(css|less|scss)$": "<rootDir>/.tests/style-mock.js"
  },
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/.tests/setup-tests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
