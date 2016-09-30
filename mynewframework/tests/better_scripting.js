var webdriverio = require('webdriverio');
var EbayHome = require('../pages/EbayHome');
var commands = require('../lib/commands');

var driver;

describe('Basic tests without a framework', function() {
  this.timeout(30000);


  beforeEach(function(done) {
    var options = {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    };

    driver = webdriverio.remote(options)
    .init();
    commands.setDriver(driver);
    return done();
  });

  afterEach(function() {
    driver.end();
  });

  it('Should open ebay and search for orphans', function() {
    //I want to open a browser
    //I want to load google
    var ebayHome = new EbayHome(driver);
    return ebayHome.open()
    .then(function() {
      return ebayHome.searchFor('orphans');
    });

  });


});
