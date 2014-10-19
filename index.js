function validate(schema, value){
	if(schema instanceof Function){
		return Object(value) instanceof schema;
	}

	if(schema instanceof Array){
		return Array.isArray(value) && value.every(validation(schema[0]));
	}

	if(schema instanceof Object){
		return Object.keys(value).every(function(key){
			return validate(schema[key], value[key]);
		});
	}
}

function validation(schema, value){
	if(arguments.length < 2){
		return validate.bind(null, schema);
	}

	return validate(schema, value);
};

module.exports = validation;
