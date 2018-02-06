/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const testSettings = require('terra-toolkit/lib/index').testSettings;
const nightwatchConfiguration = require('terra-toolkit/lib/nightwatch.json');
const config = require('terra-toolkit/lib/webpack.config');

module.exports = ((settings) => {
  const updatedSettings = testSettings(config, settings);
  updatedSettings.globals_path = './node_modules/terra-toolkit/lib/globals.js';

  updatedSettings.src_folders = ['tests/nightwatch'];
  updatedSettings.output_folder = 'target/reports/nightwatch';

  return updatedSettings;
})(nightwatchConfiguration);