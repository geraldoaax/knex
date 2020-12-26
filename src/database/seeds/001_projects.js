
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pronects').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          user_id: 2,
          title: 'ReactNative'
        },
        {
          user_id: 2,
          title: 'ReactJS'
        },
        {
          user_id: 3,
          title: 'Node With Knex'
        }
      ]);
    });
};
