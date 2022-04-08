class NewController {
    
    //[GET] /news
    index(req, res){
        res.render('news')
    }

    //[GET] /news/:slog 
    slog(req,res){
        res.send('Love')
    }
}



module.exports = new NewController