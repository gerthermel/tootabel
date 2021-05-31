const config = require('config');
const express = require('express');
const router = express.Router();
const db = require('../modules/mongodb');
const url = require('url');
const sess = require('../middleware/session');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/destroy', async (req, res) => {
    req.session.destroy();
    res.status(200).end();
})

router.get('/', async (req, res) => {
    var data = false;
    if( sess.get('userId') ){
        data = {
            'userAlias': sess.get('userAlias'),
            'userId': sess.get('userId'),
            'userDp': sess.get('userDp'),
            'userCover': sess.get('userCover'),
            'birthDate': sess.get('birthDate'),
            'userEmail': sess.get('userEmail'),
            'userEmailVerified': sess.get('userEmailVerified'),
            'userCountry': sess.get('userCountry'),
            'userAbout': sess.get('userAbout'),
            'userFirstName': sess.get('userFirstName'),
            'userLastName': sess.get('userLastName'),
            'userRights': sess.get('userRights'),
            'teams': {},
        }
    }
    
    res.status(200).send(data)
})

router.post('/', async (req, res) => {
    const alias = req.body.alias;
    const password = req.body.password;
    
    var sql = `SELECT
       *
    FROM users 
    WHERE username = '${alias}' AND password = md5('${password}')`;
    try {
        var result = await db.query(sql)
    } catch(err) {
        //logger.log({level:'warn', sql:sql, label: `SQL in ${__filename} (${__line})`,message: err});
        res.status(500).send({message: `Something went wrong. Please try again in few minutes!`});
        return;
    }
    if (result.length > 0) {
        sess.login(result[0].id);
        sess.set('userAlias', result[0].username);
        sess.set('userId', result[0].id.toString());
        sess.set('userEmail', result[0].email);
        sess.set('userData', result[0]);
        res.status(200).send({
            'userAlias': result[0]['username'],
            'userId': result[0]['id'],
        })
    }else{
        res.status(400).send({message: `Invalid alias or password!`});
    }
})

/*
router.get('/isAuth', async (req, res) => {
    if( sess.get('userId')){
        res.status(200).send(true)
    }else{
        res.status(401).end();
    }
})

router.post('/', async (req, res) => {
    const alias = req.body.alias;
    const password = req.body.password;
    
    var sql = `SELECT
       *
    FROM users 
    WHERE alias = '${alias}' AND password = md5('${password}')`;
   
    try {
        var result = await db.query(sql)
    } catch(err) {
        logger.log({level:'warn', sql:sql, label: `SQL in ${__filename} (${__line})`,message: err});
        res.status(500).send({message: `Something went wrong. Please try again in few minutes!`});
        return;
    }
    if (result.length > 0) {
        console.log(result)
        sess.login(result[0].id);
        sess.set('userAlias', result[0].alias);
        sess.set('userId', result[0].id.toString());
        sess.set('userDp', `${ result[0].dp}`);
        sess.set('userCover', `${ result[0].cover}`);
        sess.set('birthDate', result[0].bday);
        sess.set('userEmail', result[0].email);
        sess.set('userEmailVerified', result[0].verified);
        sess.set('userCountry', result[0].city);
        sess.set('userAbout', result[0].about);
        sess.set('userFirstName', result[0].first_name);
        sess.set('userLastName', result[0].last_name);
        sess.set('userRights', result[0].rights);
        sess.set('teams', {});
        delete result[0]['rights'];
        delete result[0]['user_id'];
        delete result[0]['yt_id'];
        delete result[0]['fb_id'];
        sess.set('userData', result[0]);
        res.status(200).send({
            'userAlias': result[0]['alias'],
            'userId': result[0]['id'],
            'userRights': result[0]['rights'],
            'userDp': `${ result[0].dp}`,
            'userCover': `${ result[0].cover}`,
            'birthDate': result[0]['bday'],
            'userEmail': result[0]['email'],
            'userEmailVerified': result[0]['verified'],
            'userCountry': result[0]['city'],
            'userAbout': result[0]['about'],
            'userFirstName': result[0]['first_name'],
            'userLastName': result[0]['last_name'],
            'teams': {},
        })
    }else{
        res.status(400).send({message: `Invalid alias or password!`});
    }
})
*/

module.exports = router;



