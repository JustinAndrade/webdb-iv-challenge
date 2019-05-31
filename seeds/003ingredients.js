exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ id: 1, name: 'chicken breast', quantity: 2 },
			{ id: 2, name: 'tomatoe sauce', quantity: 2 },
			{ id: 3, name: 'angel hair pasta', quantity: 2 }
		]);
	});
};
