const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('the server is up and runing')
});

module.exports = router;