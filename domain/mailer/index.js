"use strict";
const nodemailer = require("nodemailer");
const FROM_LABEL = process.env.from_label ?? 'mail bot 🤖'
module.exports = async function sendMail(mail) {

  const mailerConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.gmail_user,
      pass: process.env.gmail_pass,
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