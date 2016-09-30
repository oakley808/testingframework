var Promise = require('bluebird')
var commands = require('../lib/commands')
var driver
var locators

function EbayHome(driver) {
  this.driver = driver
  this.locators = require('../locators/EbayHome.json')
}

EbayHome.prototype.open = function() {
  // open the ebay home page
  var self = this
  self.driver.url('http://www.ebay.com')
}

EbayHome.prototype.searchFor = function(textToSearchFor) {
  // type something and seaach for it
  var self = this

  // var locator = self.locators.topSearchBar.locator
  // var buttonLocator = self.locators.topSearchButton.locator
  // self.driver.setValue(locator, textToSearchFor)
  // self.driver.click(buttonLocator)


  return new Promise(function(resolve, reject) {
    commands.setValue(self.locators.topSearchBar, textToSearchFor)
    commands.click(self.locators.topSearchButton)
    if (err) return reject()
    return resolve()
  })




}


module.exports = EbayHome
