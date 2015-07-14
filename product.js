var productSchema = mongoose.Schema({
	id: String;
	name: String;
    price: Number;
});
module.exports=mongoose.model('Product',productSchema);
/*module.exports={
	'url': 'mongodb://localhost/fretrenadmin'
};*/