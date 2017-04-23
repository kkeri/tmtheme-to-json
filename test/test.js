var fs = require('fs')
var path = require('path')
var util = require('util')
var assert = require('assert')
var convertTheme = require('../index').convertTheme


describe('empty plist', function() {
  it('throws', function () {
    assert.throws(function () { testFile('empty-plist')})
  })
})

describe('empty array', function() {
  it('throws', function () {
    assert.throws(function () { testFile('empty-array')})
  })
})

describe('global', function() {
  it('matches', function () {
    testFile('global')
  })
})

describe('scoped', function() {
  it('matches', function () {
    testFile('scoped')
  })
})

describe('multiscope', function() {
  it('matches', function () {
    testFile('multiscope')
  })
})

describe('multistyle', function() {
  it('matches', function () {
    testFile('multistyle')
  })
})


function testFile(fname) {
  fname = __dirname + '/' + fname
  var theme = convertTheme(fs.readFileSync(fname + '.tmTheme', 'utf-8'))
  fs.writeFileSync(fname + '.out.json', JSON.stringify(theme, null, 2))
  ref = JSON.parse(fs.readFileSync(fname + '.ref.json', 'utf-8'))
  assert.deepEqual(theme, ref)
}
