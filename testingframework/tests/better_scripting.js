var webdriverio = require('webdriverio')
var EbayHome = require('../pages/EbayHome')
var driver;



describe('Basic tests without a framework', function() {
  this.timeout(30000)

  beforeEach(function() {
    var options = {
        desiredCapabilities: {
            browserName: 'firefox'
        }
    }
    
    driver = webdriverio.remote(options)
      .init()

    commands.setDriver(driver)
    return done()
  })

  afterEach(function() {
    driver.end()
  })

  it('Should open ebay', function(done) {
    var ebayHome = new EbayHome(driver)
    ebayHome.open()
    ebayHome.searchFor('orphans')
  })
})
