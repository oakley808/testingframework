var Promise = require('bluebird');
var commands = require('../lib/commands');
var driver;
var locators;

function EbayHome(passedInDriver) {
  this.driver = passedInDriver;
  this.locators = require('../locators/EbayHome.json');
};

EbayHome.prototype.open = function() {
    var self = this;
    //open the ebay home page
    return new Promise(function(resolve, reject) {
      return resolve(self.driver.url('http://www.ebay.com'));
    });
};

EbayHome.prototype.searchFor = function(textToSearchFor) {
  // type something and search for it
  var self = this;
  return commands.setValue(self.locators.topSearchBar, textToSearchFor)
  .then(function() {
    return  commands.click(self.locators.topSearchButton);
  });
};


module.exports = EbayHome;
