module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.vue$": "vue-jest",
      "^.+\\js$": "babel-jest"
    },
    moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
    testMatch: ["**/tests/**/*.spec.ts", "**/tests/**/*.spec.js"],
    moduleNameMapper: {
      "^main(.*)$": "<rootDir>/src$1",
    },
};
  