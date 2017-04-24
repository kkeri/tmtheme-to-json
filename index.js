var plist = require('plist')
 
/**
 * Converts a loaded tmTheme file into a theme in VS Code format.
 * The returned object can be passed to `JSON.stringify()` to produce a valid
 * VS Code theme file.
 * @return a javascript object
 * @param {String} str - xml string (in plist format)
 */
function convertTheme(str) {
  var theme = plist.parse(str)
  theme.settings = convertArray(theme.settings)
  return theme
}

function convertArray(a) {
  for (var i = 0; i < a.length; i++) {
    a[i] = convertObject(a[i])
  }
  return a
}

function convertObject(o) {
  if (o.scope != null) {
    return convertScopedSettings(o)
  } else {
    return o
  }
}

function convertScopedSettings(o) {
  if (o.scope.includes(',')) {
    o.scope = o.scope.split(',').map(function(s) {
      return s.trim()
    })
  }
  return o
}

exports.convertTheme = convertTheme