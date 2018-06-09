var express = require('express');
var os =  require('os');
var router = express.Router();
var ip = require("ip");


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(ip.address());
  res.render('index', { title: 'Auto scaling demo',hostname: os.hostname(),freemem:os.freemem()/1048576 ,ip:ip.address() });
});

module.exports = router;
