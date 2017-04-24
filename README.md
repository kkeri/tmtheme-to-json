# tmtheme-to-json

Converts a `.tmTheme` file into an equivalent JSON representation to be used
with Visual Studio Code.

*If all you want is to use a theme with VS Code, you don't need
to convert it. VS Code can consume `.tmTheme` files directly,
although you may find it easier to edit your theme in JSON format.*

All optional and custom properties are preserved during conversion.
The theme is not validated by the tool.
Please check the theme file if it doesn't function as expected.

## Installation

~~~
npm install -g tmtheme-to-json
~~~

## Usage on the command line

~~~
tmtheme-to-json my.tmTheme
~~~

This will create `my.tmTheme.json` in the same directory.

You can even specify multiple input files (globs are not supported on Windows).

## Usage in code

~~~js
var fs = require('fs')
var convertTheme = require('tmtheme-to-json').convertTheme

var theme = convertTheme(fs.readFileSync('my.tmTheme', 'utf-8'))
fs.writeFileSync('my.tmTheme.json', JSON.stringify(theme, null, 2))
~~~
