const express = require('express');
const helmet = require('helmet');
const server = express();
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
	res.status(200).json('Welcome to the API');
});

server.get('/recipe_book', (req, res) => {
	db('recipe_book')
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Server listening
const port = 3300;
server.listen(port, function() {
	console.log(`\n *** Listening on http://localhost:${port} ***\n`);
});
