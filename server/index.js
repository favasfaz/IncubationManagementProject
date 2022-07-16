const express = require("express");
const config = require('./connection/config')
var bodyParser = require('body-parser')
const {deleteCompany,userRegister,userLogin,CompanyRegistration,findRegistration} = require('./controllers/userController');
const {adminLogin,getSlot,bookSlot,allSlots,viewDeteils,allApps,openedToclose,changingStatus,allApplication,registeredApplication,newApplication,pendingApplication,blockedApplication,notOpenedApps} = require('./controllers/adminController')

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/userRegister",userRegister );
app.post('/loginUser',userLogin)
app.post('/companyRegistration',CompanyRegistration)
app.get('/findRegistration/:id',findRegistration)
app.get('/newApplication',newApplication)
app.get('/pendingApplication',pendingApplication)
app.get('/registeredApplication',registeredApplication)
app.get('/blockedApplication',blockedApplication)
app.get('/allApplication',allApplication)
app.get('/admin/deleteCompany/:id',deleteCompany)
app.get('/notOpenedApps',notOpenedApps)
app.post('/changingStatus',changingStatus)
app.get('/openedToclose',openedToclose)
app.get('/allApps',allApps)
app.get('/viewDeteils/:id',viewDeteils)
app.get('/allSlots',allSlots)
app.post('/bookSlot',bookSlot)
app.get('/getSlot/:id',getSlot)
app.post('/loginAdmin',adminLogin)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});