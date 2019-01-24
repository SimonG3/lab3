
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToShow = req.params.userName;
	if (nameToShow === undefined) {
		nameToSHow = "World";
	}
	console.log("Name is " + nameToShow);
	res.render('index', {'name': nameToShow,});
};