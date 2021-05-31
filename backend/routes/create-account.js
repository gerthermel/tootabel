const express = require('express');
const router = express.Router();
const db = require('../modules/db');
const md5 = require('md5');

router.use(express.urlencoded({extended:true}));
router.use(express.json());
/*
router.get('/', async (req, res) => {
    var isAuth = false
    var alertsJs = await alerts.display();
    var css =`
    <link rel="stylesheet" href="/css/create_account.css">
    `;
    var topJs =  `
    ${alertsJs}
    <script type="text/javascript" src="/js/create_user_validation.js"></script>`
    res.render('create-account', 
        {
            pageRoot: '../',
            headerTitle:'Nolife.gg',
            isAuth: isAuth,
            layout: 'empty',
            headerTitle: 'Create Account',
            extraJstop: topJs,
            extraCss: css,
            pageName: 'create-account',
        }
    );
    
})
*/

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

router.post('/usernameTakenCheck', (reg, res)=>{
    res.status(200).send(false)
});

router.post('/emailTakenCheck', (reg, res)=>{
    res.status(200).send(false)
});

router.post('/', async (req, res) => {
  var data = req.body.form;
  var sql = `INSERT INTO users
  ( username, password) 
  VALUE 
  ('${data.username}', '${md5(data.password)}')`;
  try{
    var result = await db.query(sql)
    res.status(200).send(result);
  } catch(err){
    res.status(500).send({message: `Database Query Error`});
    console.log(err)
    return;
  }
})

module.exports = router;

