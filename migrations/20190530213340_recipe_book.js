exports.up = async function(knex) {
	await knex.schema.createTable('recipe_book', (tbl) => {
		tbl.increments('id');
		tbl.string('dish_name', 128).notNullable();
	});
	await knex.schema.createTable('recipes', (tbl) => {
		tbl.increments('id');
		tbl.string('recipe_name', 128).notNullable();
		tbl.integer('dish_id').references('id').inTable('recipe_book').onDelete('CASCADE').onUpdate('CASCADE');
	});
	await knex.schema.createTable('ingredients', (tbl) => {
		tbl.increments('id');
		tbl.string('name', 128).notNullable();
		tbl.integer('quantity').notNullable();
		tbl.integer('dish_id').references('id').inTable('recipe_book').onDelete('CASCADE').onUpdate('CASCADE');
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('recipe_book');
	await knex.schema.dropTableIfExists('recipes');
};
