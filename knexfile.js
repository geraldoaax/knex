// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      database: 'knex',
      user: 'sa',
      password: 'instale502',
      server: 'GERALDO-DESK'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
