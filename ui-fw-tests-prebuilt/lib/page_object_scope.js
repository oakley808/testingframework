var EbayHome = require('../pages/ebay_home');
var driver;

function PageObjectScope(driver) {
  this.driver = driver;
}

PageObjectScope.prototype.ebayHome = function() {
  return new EbayHome(this.driver);
}

module.exports = PageObjectScope;
