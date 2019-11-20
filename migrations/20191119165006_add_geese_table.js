const GEESE_TABLE_NAME = 'geese';

// make changes
exports.up = function(knex) {
  return knex.schema.createTable(GEESE_TABLE_NAME, function(tbl) {
      tbl.increments();
      tbl.string('name', 128).notNullable();
  })
};

// undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists(GEESE_TABLE_NAME)
};
