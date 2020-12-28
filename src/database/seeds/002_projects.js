
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 2,
          title: "reactnative"
        },
        {
          user_id: 3,
          title: "niner"
        },
        {
          user_id: 4,
          title: "gaita"
        },
        {
          user_id: 2,
          title: "reactjs"
        }
      ]);
    });
};
