// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      database: 'knex',
      user: 'sa',
      password: 'instale502'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },


};
