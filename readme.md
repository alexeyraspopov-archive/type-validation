# type-validation

Check types.

## Install

 * via [npm](https://npmjs.org) `npm install alexeyraspopov/type-validation`
 * via [component](http://component.io) `component install alexeyraspopov/type-validation`
 * via [bower](http://bower.io) `bower install type-validation`

## API

	check(type/map, value);

## Usage

	var validate = require('type-validation');

	validate(String, 'Ann');
	validate([Number], [1, 2, 3, 4, 5]);
	validate({ name: String, age: Number, friends: [String] }, ...);

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
