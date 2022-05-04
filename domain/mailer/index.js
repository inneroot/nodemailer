"use strict";
const nodemailer = require("nodemailer");
const FROM_LABEL = process.env.from_label ?? 'mail bot 🤖'
const HOST = process.env.host ?? "smtp.gmail.com"
const HOSTPORT = +process.env.host_port ?? 587
module.exports = async function sendMail(mail) {

  const mailerConfig = {
    host: HOST,
    port: HOSTPORT,
    secure: HOSTPORT === 465, // true for 465, false for other ports
    auth: {
      user: process.env.mail_user,
      pass: process.env.mail_pass,
    },
  }
  let transporter = nodemailer.createTransport(mailerConfig);
  try {
    mail.from = `\"${FROM_LABEL}\" <foo@gmail.com>`
    let info = await transporter.sendMail(mail);
    console.log("Message sent: %s", info.messageId);
    return { messageId: info.messageId }
  } catch (error) {
    console.error(error)
    return { error }
  }
}