require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;



const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descirption: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    dateAdded: {
        type : Date,
        default: new Date()
    }
})

const collectionSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        // required: true
    },
    about: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        requried: true
    },
    items: [itemSchema]

})



const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // makes sure email is not the same 
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    profilePic: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    collections: [collectionSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;