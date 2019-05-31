exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipe_book').del().then(function() {
		// Inserts seed entries
		return knex('recipe_book').insert([
			{ id: 1, dish_name: 'Chicken Parm' },
			{ id: 2, dish_name: 'Shrimp Mozambique' },
			{ id: 3, dish_name: 'Tacos' }
		]);
	});
};
