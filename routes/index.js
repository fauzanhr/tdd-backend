var express = require('express');
var router = express.Router();

const baseController = require('../controllers/baseController')
/* GET home page. */
router.get('/', baseController.index);
router.post('/sum', baseController.sum)
module.exports = router;
