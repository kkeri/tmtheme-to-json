# tmtheme-to-json

Converts a `.tmTheme` file to an equivalent JSON representation to be used
with Visual Studio Code.

*Note: if all you want is to use a theme with VS Code, you don't need
to convert it. VS Code can consume a `.tmTheme` file directly.
Althought you may find it easier to edit your theme in JSON format.*

All optional and custom properties are preserved during conversion.
The theme is not validated by the tool.
Check your theme file if it doesn't function as expected.

## Installation

~~~
npm install -g tmtheme-to-json
~~~

## Usage on the command line

~~~
tmtheme-to-json my.tmTheme
~~~

This will create `my.tmTheme.json` in the same directory.

You can specify multiple input files *(globs are not working on Windows)*.

## Usage in code

~~~js
var fs = require('fs')
var convertTheme = require('tmtheme-to-json').convertTheme

var theme = convertTheme(fs.readFileSync('my.tmTheme', 'utf-8'))
fs.writeFileSync('my.tmTheme.json', JSON.stringify(theme, null, 2))
~~~
