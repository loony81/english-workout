// THIS MIDDLEWARE FUNCTION ENSURES THAT CERTAIN API ENDPOINTS (THAT MODIFY DATA)
// ARE ONLY ACCESSIBLE TO AUTHORIZED USERS

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req,res,next){
	const token = req.header('x-auth-token')
	//if there's no token at all
	if(!token) {
		//for /api/items routes we will let a user thru without setting req.user property
		// for those users who don't want to register but still want to use the app
		if (req.originalUrl.startsWith('/api/items')) return next()
		// for all other routes access must be denied
		return res.status(401).send({message: 'Access denied.'})	
	}

	try{
		const decodedPayload = jwt.verify(token, config.get('jwtkey'))
		//if jwt is present and valid, add it to the request as a user object and pass it on
		req.user = decodedPayload
		next()
	} catch(ex){
		//user provided jwt but it is not valid that's why we forbid further access
		res.status(403).send({message: 'Invalid token'})
	}
}