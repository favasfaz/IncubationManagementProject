const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/incubationManagement ',
  {
    useNewUrlParser: true,
  }
).then(()=>{
    console.log('mongoose is connected successfully');
})
.catch((err)=>console.log(err))