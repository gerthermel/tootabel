const express = require('express');
const router = express.Router();
const md5 = require('md5');
const Users = require('../models/users')

router.use(express.urlencoded({extended:true}));
router.use(express.json());

function validateAlias( alias ){
    var alias = alias.trim();
    var $error = 'Field is empty'; 
    var $error2 = 'Alias is already in use!'; 
    var $error4 = 'Only letters and numbers are allowed!'; 
    var $error5 = 'Alias must be atleast 3 letters long!'; 
    var $error6 = 'Alias must contain atleast one letter!'; 
    if(alias.length == 0){
        return $error;
    }else if(alias.length < 3){
        return $error5;
    }else if( !alias.match(/^\w+$/) ){
        return $error4;
    }else if( alias.match(/^\d+$/) ){
       return $error6;
    }

}

router.post('/usernameTakenCheck', async (req, res)=>{
  var username = req.body.username;
  await Users.find( { username: `${username}` }, function (err, docs) {
    if( docs.length > 0 ){
      res.status(200).send(true);
    }else{
      res.status(200).send(false);
    }
  });

});

router.post('/emailTakenCheck', (req, res)=>{
    res.status(200).send(false)
});

router.post('/', async (req, res) => {
  var data = req.body.form;
  var password = md5(data['password']);
  data['password'] = password;
  Users.create(data).then( function(user){
    res.status(200).send(user);
  })
  
  return;
})

module.exports = router;

