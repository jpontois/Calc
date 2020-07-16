const mongoose = require('mongoose');
const userModel = require('../../models/userModel');
const newUser = mongoose.model('User');
const isValid = require('./isValid');

function createUser (firstName, lastName, email, age) {
    if (isValid(firstName, lastName, email, age)) {
        const newUser = new userModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            age: age
        });
        return newUser;
    }
    return 'User isn\'t valid';
}

module.exports = createUser;