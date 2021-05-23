const session = require('express-session');

module.exports = function(params){
    return function(req, res, next){
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://nolife.gg');
        next();
       
    };
}