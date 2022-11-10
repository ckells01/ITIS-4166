const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: [true, 'First name is required']},
    lastName:  {type: String, required: [true, 'Last name is required']},
    email:     {type: String, required: [true, 'Email address is required'], unique: [true, 'This email address has already been used before'] },
    password:  {type: String, required: [true, 'Password is required'] },
});

// export model
module.exports = mongoose.model('User', userSchema);