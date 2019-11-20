
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geese').del()
    .then(function () {
      // Inserts seed entries
      return knex('geese').insert([
        {name: 'Ben Aflack', color: 'white'},
        {name: 'Goose Bumbs', color: 'red'},
        {name: 'Tom Honks', color: 'blue'}
      ]);
    });
};
