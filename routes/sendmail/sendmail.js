'use strict'
const sendMail = require('../../domain/mailer')

module.exports = async function (fastify, opts) {
  const bodyJsonSchema = {
    type: 'object',
    required: ['access', 'to', 'subject', 'text'],
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
    if (message.access !== process.env.access_pass) reply.unauthorized()
    else {
      console.log(message)
      const messageInfo = await sendMail(message)
      reply.send(messageInfo)
    }
  })
}


