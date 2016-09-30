var webdriverio = require('webdriverio')
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

describe('Basic tests without a framework', () => {
  it('Should open google', () => {
    /*
      i want to open a browser and load google
     */
    return webdriverio
      .remote(options)
      .init()
      .url('http://www.google.com')
      .end()
  })
})
