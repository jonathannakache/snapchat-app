const express = require('express')
const app = express()
const nodemailer = require("nodemailer");

const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/sendMail', (req, res) => res.send(' GOOOOOOD!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))