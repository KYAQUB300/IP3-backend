const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const slugify = require("slugify");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        maxLength: 25,
        minLength: 5,
        required: [true, 'User must enter a name.']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please enter a valid email address'],
        unique: true,
        lowercase: true,
        required: [true, 'Email must be provided.'],
    },
    username: {
        type: String,
        maxLength: 25,
        minLength: 5,
        unique: true,
        lowercase: true,
        required: [true, 'Username must be provided.'],
    },
    password: {
        type: String,
        required: [true, 'Password must be provided.'],
        maxLength: [20, 'Password must be at most 20 characters'],
        minLength: [8, 'Password must be at least 8 characters'],
        select: false,
    },
    phone: String,
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

userSchema.pre('save', async function (next) {
    
    this.slug = slugify(this.username, { lower: true })

    if(!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 12);
    
    next();
})

userSchema.methods.checkPassword = async function(candidatePassword, userPassword) {
   return await bcrypt.compare(candidatePassword, userPassword);
}

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;