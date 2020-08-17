
module.exports = {
  verbose: true,
  clearMocks: true,
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    "enzymeAdapter": "react16",
  }
};