var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fretrenadmin');
var productSchema = mongoose.Schema({
	id: String,
	name: String,
    price: Number
});

module.exports=mongoose.model('Product',productSchema);