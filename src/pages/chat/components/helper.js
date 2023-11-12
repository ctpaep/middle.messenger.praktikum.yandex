Handlebars.registerHelper('helper', function (object, propertyName, defaultValue, options) {
    var result = options.lookupProperty(object, propertyName)
    if (result != null) {
        return result
    }
    return defaultValue
})
