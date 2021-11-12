const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dependencesSchema = new Schema({
    edifice:{
        type:Schema.ObjectId,
        ref:'Edifices'
    },
    name:{
        type: String,
        trim: true
    },
    address:{
        type: String, 
        trim: true
    },
});

module.exports = mongoose.model('Dependences',dependencesSchema);