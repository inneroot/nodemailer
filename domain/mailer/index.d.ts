interface TransportObj {
  host: string,
  port: number,
  secure: boolean,
  auth: {
    user: string,
    pass: string
  }
}

interface SendMailObj {
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
}

interface ReturningObj {
  messageId?: string,
  error?: Object
}

declare function sendMail(mail: SendMailObj): ReturningObj;