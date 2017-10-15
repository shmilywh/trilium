const express = require('express');
const router = express.Router();
const auth = require('../auth');

router.get('', auth.checkAuth, (req, res, next) => {
  res.render('app', {});
});

module.exports = router;
