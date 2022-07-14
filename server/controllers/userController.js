const userModel = require('../Model/user-schema')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv=require('dotenv')
const companyModel = require('../Model/registration-schema')

const SECRET_KEY ='abcd1234'
const maxAge = 3*24*60*60;

 dotenv.config()

const userRegister = async ( req,res )=>{
    const data = req.body
    const user = await userModel.findOne({email:data.email})
     try {      
       if(!user){
        data.password = await bcrypt.hash(data.password, 10);
        const newUser =await new userModel({
            email : data.email,
            phone : data.phone,
            password : data.password,
            fName:data.fName,
            companyName:data.cName
        })
        await newUser.save((error,done)=>{
            if(error){
                console.log('something went Wrong',error);
                res.json({status:false,msg:'something went wrong'})
            }else if(done){
                console.log('done')
                let token = jwt.sign({ _id: done._id,email:done.email,fName:done.fName }, SECRET_KEY, { expiresIn: maxAge });
                res.json({status:true,msg:'registration successfull',token})
            }
        })
       }
       else{
        res.status(400).json({message:'Email already taken'})
       }
    } catch (error) {
        res.json({message:'Email already taken'}).status(400)
    }


}

const userLogin = async(req,res)=>{
    const data = req.body
console.log(data,'data');
    try {
        const user = await userModel.findOne({email:data.email})
        if(user){
        if(user && user.status){
           
        bcrypt.compare(data.password, user.password).then(async (result) => {
            if(result){
                let token = jwt.sign({ _id: user._id,email:data.email }, SECRET_KEY, { expiresIn: maxAge });
                    res.status(200).json({msg:'success',token})
            }
          else{
            throw 'double check your email and password';
          }
        })
        .catch((error)=> res.status(401).json(error))
    }else{
        throw 'Blocked by admin';
    }
        }else{
            throw 'No user found'
        }
    } catch (error) {
       
        res.status(401).json(error)
    }
}

const CompanyRegistration = async(req,res)=>{

    const data = req.body
  
    const user = await companyModel.findOne({email:data.email})
     try {      
       if(!user){
        console.log(data,'daaa');
        const newCompany =await new companyModel({
            email : data.email,
            phone : data.phone,
            name : data.name,
            city : data.city,
            address : data.address ,
            state :  data.state ,
            companyName : data.companyName,
            image:data.image,
            team : data.team,
            products : data.products,
            problem : data.problem,
            solution : data.solution,
            proPosition : data.proPosition,
            competetors : data.competetors,
            revenueModel : data.revenueModel ,
            potentialSize : data.potentialSize,
            market : data.market,
             need:data.need
        })
        console.log('success');
        await newCompany.save((error,done)=>{
            console.log('jjj');
            if(error){
                console.log('something went Wrong',error);
                    throw 'something went wrong'
            }else if(done){
                console.log('done')
                res.json(done)
            }
        })
       }else{
        throw 'An Registration already in your email'
       }
       
    } catch (error) {
        res.json(error)
    }

}

const findRegistration = async(req,res)=>{
    const token = jwt.decode(req.params.id)
    const company = await companyModel.find({email:token.email})
    console.log(company,'company');
    res.json(company)
}
const deleteCompany =async(req,res)=>{
const id = req.params.id
console.log(id,'id');
const token = jwt.decode(id)
console.log(token,'token');
const company = await  companyModel.findOneAndDelete({email:token.email})
res.json(company)
}

module.exports ={deleteCompany,userRegister,userLogin,findRegistration,CompanyRegistration}