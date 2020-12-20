const express=require('express');
const app=express();
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const signupRoute=require('./Routes/signup');


app.use(express.json({limit:"1mb"}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://jitender:jitender@node-jitender-i6mzm.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Access,Content-Type,Authorization');
    if(req.method=== 'OPTIONS'){
        res.header('Access-Control-Allow-Method','GET,POST,DELETE,PATCH,PUT');
        return res.status(200).json({});
    }
    next();
})
app.use('/signup',signupRoute);



module.exports=app;

