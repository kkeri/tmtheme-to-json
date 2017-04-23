#!/usr/bin/env node

var fs = require('fs')
var parseArgs = require('minimist')
var convertTheme = require('./index').convertTheme

var argv = parseArgs(process.argv.slice(2));

for (var file of argv._) {
  var theme = convertTheme(fs.readFileSync(file, 'utf-8'))
  fs.writeFileSync(file + '.json', JSON.stringify(theme, null, 2))
}
