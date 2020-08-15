const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', express.static('../client/dist'))



app.get('/api/:id', (req, res) => {
  let id = Number(req.params.id);

  let queryStr = `SELECT * FROM products p INNER JOIN images i ON p.id = i.product_id INNER JOIN sellers s ON s.id = p.seller_id INNER JOIN categories c ON c.id = p.category_id WHERE p.id = ${id}`

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