const express = require('express');
const router = express.Router();
console.log('router is start');
const apicont = require('../controller/redomcontroller');

 router.get('/',apicont.createitem);
 router.get('/delete',apicont.deleteitem);

module.exports = router;