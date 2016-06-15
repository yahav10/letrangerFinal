var mongoose =require('mongoose');
var schema = mongoose.Schema;

var actionSchema = new schema({
	name: "string",
	price: "string",
	designer: "string",
	new: Boolean,
	like_counter: "string",
	img_url: "string",
	categories: [],
	id: {type:"string", index:1, required:true, unique:true},
}, {collection: 'products'});

var Action = mongoose.model('Action', actionSchema);

module.exports = Action;