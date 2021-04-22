'use strict'
const sendMail = require('../../domain/mailer')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.send('sendmail get')
  })


  const bodyJsonSchema = {
    type: 'object',
    required: ['access', 'to', 'subject', 'text', 'html'],
    propertiesL: {
      access: { type: 'string' },
      from: { type: 'string' },
      to: { type: 'string' },
      subject: { type: 'string' },
      text: { type: 'string' },
      html: { type: 'string' }
    }
  }

  const schema = {
    body: bodyJsonSchema
  }

  fastify.post('/', { schema }, async function (request, reply) {
    const message = request.body
    if (message.access !== process.env.service_pass) reply.unauthorized()
    else {
      message.from = "\"Odinblag mail bot 🤖\" <foo@example.com>"
      console.log(message)
      const messageInfo = await sendMail(message)
      reply.send(messageInfo)
    }
  })
}


