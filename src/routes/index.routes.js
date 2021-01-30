const {Router} = require('express');
const router = Router();
const {connect} = require('../util/database');

router.get('/', (async (req, res) => {
  const pool = await connect();
  const result = await pool.execute('select * from articles');
  console.log(result[0]);
  res.render('index', {
  })
}));

module.exports = router;