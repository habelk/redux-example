

const visitControl = (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}`);
  };
  
  module.exports = {
    before: (browser, done) => {
      browser.resizeWindow(browser.globals.width, browser.globals.height, done);
    },

    'Dummy Test to check if nightwatch is configured properly': (browser) => {
      visitControl(browser);
      browser.assert.elementNotPresent('.test-header');
    }
  };