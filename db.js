const mongoose = require('mongoose')

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://sriram:QhnVWVNZCq00htgl@sriram.qtljv3c.mongodb.net/Contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))

    .catch((err) => console.error("Could not connect to MongoDB", err));




    
 const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
 })

 module.exports =   mongoose.model('User' , userSchema)