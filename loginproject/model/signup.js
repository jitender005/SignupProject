const mongoose=require('mongoose');



const signupSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    phone:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
});


module.exports=mongoose.model('SIGNUP',signupSchema);