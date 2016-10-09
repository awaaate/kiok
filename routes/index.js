var app = require('express')
var router = app.Router()
/* GET home page. */
router.get("/",function(req, res){
	res.render("index",{title: 'kio'})
});
router.get("/room/new", function(req, res){
	res.render("crear",{title: "kio"})
})
router.post("/room/new", function(req, res){
		res.redirect("/room/"+ req.body.name)
})

router.get('/room/:name', function(req, res) {
	    res.render('chat',{title : 'kio'})
})
module.exports = router
