/**
 * Concatenate pages
 */
'use strict';

var xtend = require('xtend');
var pages = require('../../pages');
var customConcat = {};

if (process.grunt.file.exists('./concat.js')) {
	customConcat = require('../../concat');
}

module.exports = xtend(pages, customConcat);
