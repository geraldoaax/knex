
exports.up = knex => knex.schema.alterTable('users', table => {

  table.timestamp('deleted_at').defaultTo(knex.fn.now())

})


exports.up = knex => knex.schema.alterTable('users', table => {

  table.dropColumn('deleted_at')

})

