const express = require('express')
const app = express()

app.use(express.jason())
app.use(express.urlencoded({extended: true})) /*Methode, die aus Express kommt */

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;

