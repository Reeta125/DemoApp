const express=require('express');
const mongoose =require('mongoose');
 const app= express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
     });
    const UserSchema=new mongoose.Schema({
        name:String,
        email:String
})
const User=mongoose.model('User', UserSchema);
app.post('/users',async (req,res)=>{
    try{
    const user=new User(req.body);
    await user.save();
   
    res.status(201).json({message:'User created successfull.'});}
    catch(error){
        res.status(400).send(error);
    }
});
app.get('/users', async (req,res)=>{
    try{
        const users= await User.find({});
         res.status(400).send(users);
    }catch(error) {
        res.status(500).send(error);
    }
});
module.exports=app;
