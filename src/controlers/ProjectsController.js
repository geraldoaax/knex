const knex = require('../database')

module.exports = {
  async index(req, res, next) {

    try {
      const { user_id } = req.query;

      const query = knex('projects')

      if (user_id) {
        query
          .where({ user_id })
          .join('users', 'user_id', '=', 'projects.user_id')
          .select('projects.*', 'users.username')
      }

      const results = await query

      return res.json(results)

    } catch {
      next(error)
    }

  },
  async create(req, res, next) {
    try {
      const { username } = req.body

      await knex('projects').insert({
        username
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next) {
    try {

      const { projects } = req.body
      const { id } = req.params

      await knex('projects')
        .update({ title })
        .where({ id })

      return res.send()
    } catch {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params

      await knex('projects')
        .where({ id })
        .del()

      return res.send()

    } catch {
      next(error)
    }
  }
}
