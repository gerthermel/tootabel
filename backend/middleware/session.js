const sessName = 'sessId'
const expire =  1 * 86400//86400;
var dateFormat = require('dateformat');
var md5 = require('md5');
const db = require('../modules/mongodb');
var session = null;

async function check(req, res, next){
    session = req.session;
    console.log(session)
    if ( !session[sessName] ) {
      createSession(req);
    }else{
      loadMyInfo()
    };
    next()
}

async function createSession(req){
    console.log('asdasdasd')
    var date = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    const sid = md5(date + Math.floor(1000 + Math.random() * 9000));
    session[sessName] = sid;
    /*
    sql = "INSERT INTO session SET create_time = now(), user_id = '0', vars = '', sess_id = '"+sid+"'";
    try {
        await db.query(sql)
        //console.log('2. Session created '+session[sessName] )
    } catch(err) {
        console.log(err)
    }
    */
}

function destroy(){
    session.destroy();
    session = {};
}

async function loadMyInfo(){

}

async function cleanSession() {
    var sql = "DELETE FROM session WHERE (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(modify_time) > "+expire+")";
    try {
        await db.query(sql)
    } catch(err) {
        console.log(err)
    }

    if (session[sessName]) {
        var sql = `SELECT * FROM session WHERE sess_id="${session[sessName]}"`;
        try {
            var res = await db.query(sql)
            if( res.length < 1 ){
                destroy();
            }
        } catch(err) {
            console.log(err)
        }
    }
}

async function set(key, val){
    session[key] = val;
}

function get(key){
    if (session && session[key]) {
        return session[key];
    }else{
        return null;
    }
}

async function login(id){
        sql = "UPDATE session SET user_id='"+id+"', modify_time=NOW() WHERE sess_id = '"+session[sessName]+"'";
        console.log(sql)
        try {
            session.userId = id;
            var result = await db.query(sql)
        } catch(err) {
            console.log(err)
        }
}

async function logout(){
    sql = `DELETE FROM session WHERE user_id='${get('userId')}' AND sess_id = '${session[sessName]}'`;
    try {
        await db.query(sql)
        destroy();
    } catch(err) {
        console.log(err)
    }
    
}

async function flushSession(sess){
    var vars = JSON.stringify(sess);
    sql = "UPDATE session SET vars = '"+vars+"', modify_time=NOW() WHERE sess_id = '"+sess[sessName]+"'";
    try {
       var result = await db.query(sql)
    } catch(err) {
        console.log(err)
    }
}

module.exports = check;
module.exports.loadMyInfo = loadMyInfo;
module.exports.flushSession = flushSession;
module.exports.get = get;
module.exports.set = set;
module.exports.login = login;
module.exports.logout = logout;
module.exports.destroy = destroy;



