var mongoose = require('mongoose');
var Action = require('./action');
var User = require('./user');

//console.log("db connection object can be used" + db);

//for route /ws_todo/getActionData
exports.getData = function(req, res){
	Action.find({}).
	where('action').ne('PRIVATE').
	exec(function(err, docs){
		//actionData = docs;
		console.log("docs: " + docs);
		//mongoose.disconnect();
		res.json(docs);
		return;
	});
}

exports.getDesignersNames = function(req, res){
	User.find({}).
	where('designer').ne(false).
	exec(function(err, docs){
		//actionData = docs;
		console.log("docs: " + docs);
		//mongoose.disconnect();
		console.log(docs);
		res.json(docs);
		return;
	});
}

//for route /ws_todo/saveActionData
//SAVE A NEW DOC
var newtodoAction = new Action({
	name: "Shoes",
	id: "131",
	price: "300",
	designer: "Gal",
	like_counter: "0",
	img_url: "shoes2.jpg",
	categories: ["MensWear", "Shoes"],
	new: true
});

exports.addData = function(req, res){
	newtodoAction.save(function(err, doc){
		if(err)
			console.log(err);
		else{
			console.log("\nSaved document: " + doc);
			//mongoose.disconnect();
			res.json(doc);
			return;
		}
	});
}

exports.saveData = function(req, res){
	newProduct.save(function(err, doc){
		if(err)
			console.log(err);
		else{
			console.log("\nSaved document: " + doc);
			//mongoose.disconnect();
			res.json(doc);
			return;
		}
	});
}