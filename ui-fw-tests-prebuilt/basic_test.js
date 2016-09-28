var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var EbayHome = require('./pages/ebay_home');
var PageObjectScope = require('./lib/page_object_scope');
var driver;
var browser = process.env.BROWSER || 'firefox';
var options = {
    desiredCapabilities: {
        browserName: browser
    }
};

describe('Initial Test', function() {
  this.timeout(20000);

  beforeEach(function(done) {
    driver = webdriverio.remote(options)
    .init();
    on = new PageObjectScope(driver);
    return done();
  });

  afterEach(function() {
    driver.end();
  });

  it('Should load google and return title', function(done) {
    driver
    .url('http://www.google.com')
    .getTitle().then(function(title) {
      console.log('Title was: ' + title);
      done();
    });

  });

  it('Should load ebay using page objects', function() {
    return on.ebayHome().open()
    .then(function() {
      return on.ebayHome().searchFor('New Camera')
    })
    .then(function() {
      return on.ebayHome().getTitle();
    })
    .then(function(title) {
      console.log("Retrived Page Title: " + title);
    })

  });
})
