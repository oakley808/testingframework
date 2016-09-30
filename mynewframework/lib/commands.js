var Promise = require('bluebird');
var driver;
module.exports = {

  setDriver: function(passedInDriver) {
    driver = passedInDriver;
  },

  click: function(locatorObject) {
    console.log('I am clicking ' + locatorObject.description);
    return new Promise(function(resolve, reject) {
     return resolve(driver.click(locatorObject.locator));
   });
    //if click fails try again
  },

  setValue: function(locatorObject, textToType) {
    console.log('I am typing ' + textToType + ' into ' + locatorObject.description);
    return new Promise(function(resolve, reject) {
      return resolve(driver.setValue(locatorObject.locator, textToType));
    });
  }

};
