const mongoose = require('mongoose')
const moment = require('moment')
const companyRegistrationSchema = new mongoose.Schema({
 
    email:String,
    phone:String,
    name:String,
    city:String,
    address:String,
    state:String,
    companyName:String,
    image:String,
    team:String,
    products:String,
    problem:String,
    solution:String,
    proPosition:String,
    competetors:String,
    revenueModel:String,
    potentialSize:String,
    market:String,
    need:String,
    status:{    
        type:String,
        default:'Pending'
    },
    createdAt : {
        type:String,
        default:moment().format("DD-MM-YYYY")
    },
    open: {
        type:Boolean,
        default:false,
    }
});

const registeredCompany = mongoose.model("registeredCompany", companyRegistrationSchema);

module.exports = registeredCompany;