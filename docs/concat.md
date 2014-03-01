[&laquo; back to Table of Contents](TOC.md)

# Concatenate files with INIT

INIT supports concatenation out of the box through `grunt-contrib-concat`.
This is used by default for concatenating your template partials into a working
prototype / HTML page.

## Add custom concat tasks

You can add custom tasks to concatenate files. You find a file called [`concat.js`](../concat.js)
in the root folder of INIT. Add your custom concatenations in there.

A sample `concat.js`-file could look like this:


	'use strict';

	module.exports = {
		customConcat: {
			src: [
				'source-1.js',
				'source-2.js',
				'source-3.js'
			],
			dest: 'result.js'
		},
		customConcat2: {
			src: [
				'source-4.js',
				'source-5.js'
			],
			dest: 'result2.js'
		}
	};

The `src` key references your partials that you want to concatenate. The `dest` key
describes the relative path to the result. The path is set relative from INIT’s
root.
