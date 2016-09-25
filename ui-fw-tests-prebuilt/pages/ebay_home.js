var Promise = require('bluebird');
var driver;
var locators;

function EbayHome(driver) {
    this.driver = driver;
    var locatorName = this.constructor.name + '.json';
    this.locators = require('../locators/' + locatorName);
}

EbayHome.prototype.open = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    return resolve(self.driver.url('http://www.ebay.com'));
  });
}

EbayHome.prototype.searchFor = function(searchText) {
  var self = this;
  return new Promise(function(resolve,reject) {
    console.log('Searching for ' + searchText);
    return resolve(self.driver.setValue(self.locators.topSearchBar.locator, searchText)
    .click(self.locators.topSearchButton.locator));
  });
}

EbayHome.prototype.getTitle = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    return resolve(self.driver.getTitle());
  });
}

module.exports = EbayHome;
