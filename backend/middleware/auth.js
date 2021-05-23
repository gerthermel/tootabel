const session = require('express-session');
const sess = require('../middleware/session');

module.exports = function(params){
    return function(req, res, next){
        var currentUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        if( sess.get('userId') ){
            //console.log( '2. Authorized' );
            next();
        }else{
            //console.log( '3. Not authorized' );
            var ref ='';
            if( params !== undefined && params.ref !== undefined){
                if(currentUrl.indexOf('/page/') > 0) {
                    ref = '?ref='+currentUrl;
                }
            }
            res.redirect('/page/sign-in'+ref)
            return;
        };
       
    };
}





