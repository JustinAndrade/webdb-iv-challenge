exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').del().then(function() {
		// Inserts seed entries
		return knex('recipes').insert([
			{ id: 1, recipe_name: "Granny's", dish_id: 1 },
			{ id: 2, recipe_name: 'From Paris With Love', dish_id: 1 },
			{ id: 3, recipe_name: 'Not Your Average Parm', dish_id: 1 }
		]);
	});
};
