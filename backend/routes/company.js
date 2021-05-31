const express = require('express');
const db = require('../modules/db');
const session = require('express-session');
const router = express.Router();
const sess = require('../middleware/session');
const md5 = require('md5');
const permissions = require('../modules/permissions')
const dateFormat = require('dateformat');
const Company = require('../models/company');
const Users = require('../models/users');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/my-companies',  async (req, res)=>{
  var myId = sess.get('userId');
  var pipeLine = [
    {
      '$match': {
        'workers.worker_id': `${myId}`
      }
    }
  ]
  Company.aggregate(pipeLine, function (err, docs) {
    try{
      res.status(200).send(docs)
    }catch(err){
      console.error(error);
      res.status(400).send({message: 'Get Companies Database Error #1'})
    }
  })

})

router.get('/:id', async (req, res)=>{
  var id = req.params.id
  Company.find({_id: id}, (err,doc)=>{
    try{
      res.status(200).send(doc)
    }catch(error){
      console.error(error);
      res.status(400).send({message: 'Get Company Database Error #1'})
    }
  })
})

router.post('/create', async (req, res) => {
  var myId = sess.get('userId');
  var name = req.body.form['name'].trim();
  var now = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
  var doc = {
    name: `${name}`,
    workers: [{
        worker_id: sess.get('userId'),
        permissions: ['add','remove','update', 'read'],
      }]
  }

  Company.create(doc).then( function(company){
    try{
      console.log(company);
      res.status(200).send(company);
    } catch(err){
      console.log(err)
    }
  })
})


module.exports = router;

