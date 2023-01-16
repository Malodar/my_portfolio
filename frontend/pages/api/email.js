export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.mail,
      pass: process.env.password,
    },
    secure: true,
  })  

  const mailData = {
    from: process.env.mail,
    to: 'artsiom.k@aol.com',
    subject: req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.senderEmail + `by: ${req.body.name}`,
    html: `<div>${req.body.message}</div><p>Sent from Portfolio website:
    ${req.body.senderEmail}</p><p>Sender name: ${req.body.name}</p>`
  }  
  
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })  
  res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}



