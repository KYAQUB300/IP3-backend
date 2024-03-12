const User = require('../model/users.js');
const catchAsync = require('../utils/catchAsync.js');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');


const sendJWTToken = (user) => {
    return jwt.sign({
        _id: user._id,
    }, process.env.JWT_SECRET)
}

const createSendToken = (res, statusCode, user, msg) => {

    const token = sendJWTToken(user);
    
    const cookieObject = {
        httpOnly: true,
        expires: new Date(Date.now() + 30 * 60 * 1000),
    }
    if (process.env.NODE_ENV == 'production') cookieObject.secure = true;

    res.cookie('jwt', token, cookieObject);
    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        message: msg,
        token,
        data: {
            user
        }
    });

}

const login = catchAsync(async (req, res, next) => {
    const {username, password} = req.body;

     //1-Check Email & Password are not null
    if(!username || !password) {
        return res.status(400).json('Please provide valid email and password.') 
    }

    const user = await User.findOne({username}).select('+password');
    
    //2-Check that user exists and match the Password
    if(!user || !await user.checkPassword(password, user.password)) {
        return res.status(400).json('Please provide valid email and password') 
    }

    console.log(user)

    createSendToken(res, 200, user, 'User has logged in successfully');
})

const signUp = catchAsync(async (req, res, next) => {
    let {fullName, username, email, phone, password} = req.body;

    try {
        var new_user = await User.create({fullName, username, email, phone, password});
    }catch(e) {
        return res.status(400).json({
            status: 'error',
            message: e.message
        })
    }

    createSendToken(res, 201, new_user, 'User has sign up successfully');
})

const logout = catchAsync(async (req, res, next) => {
    
    res.cookie('jwt', 'emergency' , {
        expiresIn: new Date(Date.now()) + 10 * 1000,
        httpOnly: true
    })

    res.status(200).json({
        status: 'success',
        message: 'Logout successfully'
    })
})

const protect = catchAsync(async (req, res, next) => {

    let token;
    //Check JWT is present in request
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    else if(req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if(!token) return res.status(401).json("Please login to get access to that routes.");

    //Check JWT is valid
    try {
        var foundId = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json('Please login to get access to that routes.') 
    }

    //check user exist in database
    const user = await User.findById(foundId._id);

    if (!user) {
        return res.status(401).json("Token belongs to user not found.") 
    }

    res.locals.user = user;
    req.user = user;

    next();
})

module.exports = {
    login,
    signUp,
    protect,
    logout
};
