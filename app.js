const express = require('express');
require('dotenv').config();
const UserModel = require('./models/user.model.js')

const app = express();
const PORT = process.env.PORT;
const path = require('path');
const userModel = require('./models/user.model.js');
const { name } = require('ejs');

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname ,'public')));



app.get('/', (req,res) =>{
    res.render('index');
})

app.get('/read', async (req,res) =>{
    let allUsers = await userModel.find()
    res.render('read', {users: allUsers})
})

app.post('/create', async (req,res) =>{
   let{name , email , image} = await req.body
   //console.log(image)
 let createdUser = await userModel.create({
    name: name,
    email: email,
    image: image
  })

res.redirect('/read')
})

app.get('/delete/:id' , async (req , res)=>{
    //console.log(req.params.id)
   let deletedUser = await userModel.findOneAndDelete({_id: req.params.id});
   res.redirect('/read')
})

app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`)
})

