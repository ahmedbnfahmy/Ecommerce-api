const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    phone: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: false, required: true },
    shop:{
        shopName: { type: String},
        description: { type: String}
    },
 
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);