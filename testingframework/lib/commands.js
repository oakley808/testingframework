var driver

module.exports = {
  setDriver: function(driver) {

  },

  click: function(locatorObject) {
    console.log('I am clicking ' + locatorObject.description )
    driver.click(locatorObject.locator)
    // if click fails, try again... do stuff...
  },

  setValue: function(locatorObject, textToType) {
    console.log('I am typing ' + textToType + ' into ' + locatorObject.description)
    driver.setValue(locatorObject.locator)
  }

}
