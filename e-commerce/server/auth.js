const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key_here'; 

const generateToken = (user) => {
    return jwt.sign(
        {id : user.id, email: user.email},
        JWT_SECRET,
        {expiresIn: '24h'}
    )
}


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Acess Denided. No token provided'});
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(403).json({message: 'Invalid token'});
    }
}

module.exports = {generateToken, verifyToken};