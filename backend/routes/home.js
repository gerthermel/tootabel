const config = require('config');
const express = require('express');
const router = express.Router();
const db = require('../modules/db');
const url = require('url');
const sess = require('../middleware/session');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/', async (req, res) => {
    console.log('done')
    res.status(200).send('Done')
})



module.exports = router;



