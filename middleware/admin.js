//this middleware function ensures that certain operations, such as deleting data or accessing certain data
// can only be performed by admins
//it must be executed after the authorization middlware function auth.js,
// otherwise we won't have access to req.user
module.exports = function (req,res,next){
	//even if you are authenticated but not an admin, you are not allowed to access this resourse
	if(!req.user.isAdmin) return res.status(403).send({message: 'Access denied.'})
	next()
}