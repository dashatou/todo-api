var express = require('express');
var router = express.Router();
var users = require('../db/user');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  users.findById(req.params.id, function (err, doc){
    if(err) {
      next(err);
    }
    if(doc){
      res.json(doc);
    } else {
      next();
    }
  });
});

module.exports = router;
