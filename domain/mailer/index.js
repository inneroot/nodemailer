"use strict";
const nodemailer = require("nodemailer");

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
    let info = await transporter.sendMail(mail);
    console.log("Message sent: %s", info.messageId);
    return { messageId: info.messageId }
  } catch (error) {
    console.error(error)
    return { error }
  }
}