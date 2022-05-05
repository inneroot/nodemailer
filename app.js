'use strict'
const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
  const schema = {
    type: 'object',
    required: ['host', 'host_port', 'mail_user', 'mail_pass', 'access_pass'],
    properties: {
      host: { type: 'string' },
      host_port: { type: 'number' },
      from_label: { type: 'string' },
      mail_user: { type: 'string' },
      mail_pass: { type: 'string' },
      access_pass: { type: 'string' }
    }
  }
  const options = {
    confKey: 'config', // optional, default: 'config'
    schema: schema,
    data: process.env // optional, default: process.env
  }

  fastify.register(require('@fastify/env'), options).ready((err) => {
    if (err) console.error(err)
    console.log(fastify.config)
  })

  await fastify.after()
  fastify.register(require('@fastify/cors'), {
    origin: "*",
    methods: ["POST"]
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
