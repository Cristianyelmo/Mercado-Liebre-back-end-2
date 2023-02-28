
const {validationResult}=require('express-validator')

const path = require('path');

const users = require('../data/users.json');

const fs = require('fs')

const { body } = require('express-validator');

const{hashSync}=require('bcryptjs')

const productsFilePath = path.join(__dirname, '../data/users.json');


module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    processRegister : (req,res) => {
        const errors = validationResult(req);


        
        


        
        if(errors.isEmpty()){
            const{name,surname,email,pass} = req.body


            
            
            const newUsers = {
        id: users.length ? users[users.length -1].id +1 : 1,
        name : name.trim(),
        surname : surname.trim(),
        email:email.trim(),
        pass:hashSync(pass,10),
        




            };

            users.push(newUsers);
            fs.writeFileSync('./src/data/users.json',JSON.stringify(users, null, 3),'utf-8')
            return res.redirect('/users/login');

            /* return res.send(req.body) */
            

        }else{
            
            return res.render('register',{
                errors:errors.mapped()

            })

        }

        
    },
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);


        
        


        
        if(errors.isEmpty()){
            
            const users = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
            
            
            const {id,name} = users.find(user => user.email === req.body.email )

        req.session.userLogin = {
            id,
            name
            
        };


        if(req.body.remember){

            

            
            res.cookie('UserML',req.session.userLogin,{maxAge:1000*60})
        }
            
            
         
         /*     return res.send(req.body)  */
            res.redirect('/')

        }else{
            
            return res.render('login',{
                errors:errors.mapped()

            })

        }
    },

    logout:(req,res)=>{
       req.session.destroy()
        return res.redirect('/')
        
        
        
            }
}