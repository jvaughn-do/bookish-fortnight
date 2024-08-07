const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, '/test.js'));
  })

app.get("/worker.js", (req, res) => {
  res.sendFile(path.join(__dirname, '/worker.js'));
  })
app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, '/test.html'));
})

app.get("/", (req, res) => {
  res.json({ message: 'Hello from the server!' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
