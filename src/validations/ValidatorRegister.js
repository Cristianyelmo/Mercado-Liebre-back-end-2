const {check,body} = require('express-validator');


module.exports= [




check('name')
.notEmpty().withMessage('El nombre es obligatorio').bail(),
check('surname')
.notEmpty().withMessage('El apellido es obligatorio').bail(),
check('email')
.notEmpty().withMessage('El email es obligatorio').bail()
.isEmail().withMessage('Tiene que ser un Email'),
check('pass')
.notEmpty().withMessage('la contraseña es obligatoria').bail(),
body('pass2')
       .notEmpty().withMessage('Debes confirmar tus contraseñas').bail()
       
       .custom((value,{req})=> {

           
           if(value !== req.body.pass){
            return false
           }
return true

       }

      

       
       ).withMessage('La contraseña no coinciden')
     




]