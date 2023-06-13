var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/save", async (req, res) => {
  const customer = req.body;
  const result = await db.insert(customer);
  console.log(result);
  res.json(result);
})

module.exports = router;
