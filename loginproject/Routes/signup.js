const express=require('express');
const router=express.Router();
const SIGNUP=require('../model/signup');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');


router.post('/signin',(req,res,next)=>{
   SIGNUP.find({email:req.body.email,password:req.body.password})
    .exec()
    .then(signupdata=>{
        
        if(signupdata.length>=1){
            const token=jwt.sign({email:signupdata[0].email},'secret',{
                expiresIn:'1h'
            });
        res.status(200).json({
            message:"user is successfully logged in",
            token:token,
            result:signupdata
        });
    }
    else{
        res.status(404).json({
            message:"user not found please signup thankfully"
        })
    }
    })
    .catch(err=>{
        res.status(404).json({
            error:err,
            message:"hey its not working"
        });
    })
})




router.post('/signups',(req,res,next)=>{
    console.log(req.body.email+"\n"+req.originalUrl);
    console.log("hey please check");
    SIGNUP.find({email:req.body.email})
    .exec()
    .then(result=>{
        if(result.length>=1){
            res.status(200).json({
                message:"mail already exist",
                data:result
            });
        }
        else{
            const signupdata=new SIGNUP({
                _id:new mongoose.Types.ObjectId(),
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                phone:req.body.phone,
                email:req.body.email,
                password:req.body.password
            })
            signupdata.save()
            .then(result=>{
                res.status(200).json({
                    message:"user is successfully created",
                    user:result,
                    info:signupdata
                });
            })
            .catch(err=>{
                res.status(404).json({
                    error:err
                });
            })

        }
    })
    .catch(err=>{
        res.status(404).json({
            error:err,
            message:"its not working"
        });
    })

})



router.get('/',(req,res,next)=>{
    SIGNUP.find()
    .exec()
    .then(result=>{
        res.status(200).json({
            output:result
        })
    })
    .catch(err=>{
        res.status(404).json({
            error:err
        })
    })
})


router.delete('/:productid',(req,res,next)=>{
    const id=req.params.productid
    SIGNUP.remove({_id:id})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json({
            message:"your id with given product is deleted"
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({
            error:err
        })
    })
})


module.exports=router;


