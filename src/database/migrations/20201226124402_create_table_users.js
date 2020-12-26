
exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('username')

  table.timestamp('create_at').defautlTo(knex.fn.now())
  table.timestamp('updated_at').defautlTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('users')

