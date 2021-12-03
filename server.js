const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const{checkUser , requireAuth} =require('./midleware/auth.midleware');
const app = express();


app.get('/jwtid',requireAuth,(req,res)=>{
    res.status(200).send(res.locals.user._id);
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));

//jwt
app.get('*',checkUser); //a chaque requete il y a un check 

// routes 
app.use('/api/user',userRoutes);
app.use('/api/post',postRoutes);

// server 
app.listen(5000,()=>{
    console.log(`listening on port : 5000`)
})