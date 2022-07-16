const mongoose = require('mongoose')

const SlotSchema = new mongoose.Schema({
 
 section :String,
 isBooked:Boolean,
 slot:Number,

name:String,
email:String,
id:String,
});


const slot = mongoose.model("slot", SlotSchema);

module.exports = slot;