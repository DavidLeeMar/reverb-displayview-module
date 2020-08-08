const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', express.static('../client/dist'))



app.get('/api', (req, res) => {
  let queryStr = `SELECT * FROM sellers s, categories c, products p WHERE p.id=5`
  db.query(queryStr, (err, results) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(results)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})