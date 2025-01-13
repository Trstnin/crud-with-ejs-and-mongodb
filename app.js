const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname ,'public')));



app.get('/', (req,res) =>{
    res.render('index');
})

app.get('/read',(req,res) =>{
    res.render('read')
})


app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`)
})

