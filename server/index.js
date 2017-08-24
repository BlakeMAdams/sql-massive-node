const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	massive = require('massive'),
	connectionString = "postgres://postgres:asdf@localhost/sandbox",
	products_controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive( connectionString).then(db => {
	app.set('db', db)

	// app.get('db').seed().then(res => console.log(res))
	// .catch(err => console.log(err))
});
	
app.listen(3000, () => console.log('listening port 3000'));


// ENDPOINTS
//app.METHOD(URL, HANDLER)
//HANDLER (req, res) => { }
app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.post('/api/product', products_controller.create);
app.delete('/api/product/:id', products_controller.delete);



