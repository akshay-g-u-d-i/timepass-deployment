const mongoose = require('mongoose')
const mongouri = "mongodb+srv://gudiakshay:15081947@first-cluster.tp2egst.mongodb.net/podcast-app?retryWrites=true&w=majority"
const {Schema} = mongoose;


const mongodb = () => {

    mongoose
        .connect(mongouri)
        .then(() => {
            console.log("Mongodb connected")
        })
        .catch((err) => {
            console.log("Error occured")
        })
}



//Creating user schema

const userschema = new Schema({
    name : {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
},{timestamps: true})

const usermodel = mongoose.model('user', userschema)


module.exports = {
    mongodb,
    usermodel
}