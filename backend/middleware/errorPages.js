
module.exports = function(req, res, next){
    //
    var end = res.end;
    
    res.end  = function(chunk, encoding) {
        if(res.statusCode == 404){
            res.status(200).render('error/404', {layout:false})
            return;
        }
        if(res.statusCode == 401){
            res.status(200).render('error/401', {layout:false})
            return;
        }
        res.end = end;
        res.end(chunk, encoding);
    };
    next();
}


