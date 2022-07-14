

const companyModel = require ('../Model/registration-schema')
const slotModel = require('../Model/slot-schema')
const adminModel = require('../Model/admin-schema')
const jwt = require('jsonwebtoken')
 const SECRET_KEY = 'faz1234'
const maxAge = 3*24*60*60;

const newApplication =async(req,res)=>{

    const allCompanies = await companyModel.find({}).sort({createdAt:-1}).limit(5)
    res.json(allCompanies)

}

const pendingApplication =async(req,res)=>{
    const allCompanies = await companyModel.find({status:'Pending'})
    console.log(allCompanies,'pending');
    res.json(allCompanies)
}

const registeredApplication =async(req,res)=>{
    const allCompanies = await companyModel.find({status:'Registered'})
    console.log(allCompanies,'regggg');
    res.json(allCompanies)
}
const blockedApplication = async (req,res)=>{
    const allCompanies = await companyModel.find({status:'Blocked'})
    res.json(allCompanies)
}

const allApplication =async(req,res)=>{

    const allCompanies = await companyModel.find({}).sort({createdAt:-1})
    res.json(allCompanies)

}

const notOpenedApps =async (req,res)=>{
    const count =await companyModel.find({open:false}).count()
    const companies = await companyModel.find({open:false})
    if(count == null){
        count=0
        res.json({count})
    }else{
        res.json({count,companies})
    }
}

const changingStatus =async (req,res)=>{
  const  {id,value} = req.body
  console.log(id,'id',value,'value');
 try {
    if(value==1){
        await companyModel.findByIdAndUpdate({_id:id},{$set:{status:'Registered'}})
        res.json({status:true})
      }else if(value==2){
        await companyModel.findByIdAndUpdate({_id:id},{$set:{status:'Blocked'}})
        res.json({status:true})
      }
 } catch (error) {
    console.log(error,'error');
 }
}

const openedToclose =async(req,res)=>{
    console.log('succcess');
    await companyModel.updateMany({open:false},{$set:{open:true}})
    const count =await companyModel.find({open:false}).count()
    console.log(count,'cou');
    res.json(count)
    }
    const allApps=async(req,res)=>{
        const emptyArr = []
        res.json(emptyArr)
    }
    const viewDeteils =  async(req,res)=>{
    const company = await companyModel.findById({_id:req.params.id})
    console.log(company,'comapmy');
    res.json(company)
    }

    const allSlots = async(req,res)=>{
        console.log('success');
        const fullSlots = await slotModel.find({})
        const sectionA = fullSlots.filter((val)=>{
            return val.section === 'A'
        })
        const sectionB = fullSlots.filter((val)=>{
            return val.section === 'B'
        }) 
        const sectionC = fullSlots.filter((val)=>{
            return val.section === 'C'
        }) 
        const sectionD = fullSlots.filter((val)=>{
            return val.section === 'D'
        }) 
        const sectionE = fullSlots.filter((val)=>{
            return val.section === 'E'
        })
        res.json({sectionA,sectionB,sectionC,sectionD,sectionE})
    }


    const bookSlot = async(req,res)=>{
        const {id,name} = req.body
        console.log(name,'id');
        console.log(name,'name');
        const slot =await  companyModel.findOne({_id:name})
        console.log(slot,'slot');
     await slotModel.findOneAndUpdate({_id:id},{$set:{isBooked:true,name:slot.companyName,email:slot.email,id:slot._id}})
     res.json({status:true})
    }

    const getSlot =async(req,res)=>{
        const id = req.params.id
        const slot = await slotModel.findOne({_id:id})
        res.json(slot)
    }

    const adminLogin= async (req,res)=>{
        const data = req.body
        console.log(data,'data');
        try {
            const admin = await adminModel.findOne({email:data.email})
                if(admin && admin.password == data.password){
                    let token = jwt.sign({ _id: admin._id,email:admin.email }, SECRET_KEY, { expiresIn: maxAge });
                        res.status(200).json({msg:'success',token})
                }
            else{
                throw 'double check your email and password';
            }
          
    
        } catch (error) {
            res.status(401).json(error)
        }
    }

module.exports={adminLogin,getSlot,bookSlot,allSlots,viewDeteils,allApps,openedToclose,changingStatus,allApplication,newApplication,pendingApplication,registeredApplication,blockedApplication,notOpenedApps}