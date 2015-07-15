var express = require('express');
var fs = require('fs');
var app = express();

var bodyParse = require("body-parser");
//var configDB = require('product.js');
var frentren ;


app.use(express.static('client'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));



fs.readFile('./client/frentren.html', function (manoj, htmlcontent) {
    if (manoj) {
        throw manoj; //exception 
    }  
    
    frentren = htmlcontent;
	app.get('/', function (req, response) {
	  response.set('Content-Type', 'text/html');
	  response.send(htmlcontent);
	});
	app.post('/makeshipment',function(req,response){
		console.log(req.body.order);
		for(i=0;i<req.body.order.length;i++){
			Product.create(req.body.order[i]);
		}

	});

	var server = app.listen(3000, function () {
	  var host = server.address().address;
	  var port = server.address().port;

	  console.log('Example app listening at http://%s:%s', host, port);
	});
});



var Product=require('./product');
//Product.find({}).remove();
//Product.create({'name':'adidas','price':1899},{'name':'bat','price':2500},{'name':'iphone','price':41999});

/*

fs related variable should be defined earlier to use like a container
index.html is getting downloaded just after hitting server
for content type-text/html
res.writeHead(200, {'Content-Type': 'text/event-stream'});
			

*/