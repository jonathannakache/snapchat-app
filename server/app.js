const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
require('dotenv').config()

var cors = require('cors');

app.use(cors());

const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/sendMail", (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      // user: process.env.EMAIL,
      // pass: process.env.PASSWORD
      user: "jondu06700@gmail.com",
      pass: "jonicojonico"
    }
  });

  const mailOptions = {
    from: "jondu06700@gmail.com", // sender address
    to: "jondu06700@gmail.com", // list of receivers
    subject: "Snapchat App", // Subject line
    html: `<h1 style="color: #5e9ca0;">Hey John</h1>
    <h2 style="color: #2e6c80;"><span style="color: #2e6c80;">Tu viens de recevoir une photo depuis l'application Snapchat de la pars de :</span></h2>
    <h2>Nom :${req.body.name} </h2>
    <h2>Telephone : ${req.body.tel} </h2>
    <h2>Email : ${req.body.email} </h2>
    <p>&nbsp;</p>`
  };

  //   console.log(res);

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log("Error Occurs :", err);
    else console.log("Email Sent !");
  });
  res.send('Email Sent')
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
