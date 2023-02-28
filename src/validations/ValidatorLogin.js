const {check,body} = require('express-validator');
const fs = require('fs');
const {compareSync} =require('bcryptjs');

module.exports= [




check('email')
.notEmpty().withMessage('El email es obligatorio').bail(),
body('pass')
.notEmpty().withMessage('La contraseña es obligatorio').bail()
.custom((value,{req})=>{
       const users = JSON.parse(fs.readFileSync('./src/data/users.json','utf-8'));
       const usersa = users.find(user => user.email === req.body.email && compareSync(value,user.pass));
   
   
   return usersa 
   }).withMessage("credenciales invalidas")



     




]