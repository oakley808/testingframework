var webdriverio = require('webdriverio');



describe('Basic tests without a framework', function() {


  it('Should open google', function() {
    //I want to open a browser
    //I want to load google
    var options = {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    };

    return webdriverio.remote(options)
    .init()
    .url('http://www.google.com')
    .end();

  });


});
