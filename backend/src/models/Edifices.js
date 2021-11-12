const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const edificesSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    address:{
        type: String, 
        trim: true
    },
});

module.exports = mongoose.model('Edifices',edificesSchema);