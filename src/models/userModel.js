const mongoose = require('mongoose');
const schema = mongoose.Schema;

let user = new schema(
    {    
        firstName: {
            type: String,
            required: 'First name is required'
        },
        lastName: {
            type: String,
            required: 'Last name is required'
        },
        email: {
            type: String,
            required: 'Email is required'
        },
        age:  {
            type: Number,
            min: 13
        }
    }
);

module.exports = mongoose.model('User', user);