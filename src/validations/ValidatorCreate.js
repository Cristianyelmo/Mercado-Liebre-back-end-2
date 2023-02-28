const {check} = require('express-validator');


module.exports= [




check('name')
.notEmpty().withMessage('El email es obligatorio').bail(),
check('price')
.notEmpty().withMessage('El precio es obligatorio').bail(),

check('discount')
.notEmpty().withMessage('El descuento es obligatorio').bail(),
check('category')
.notEmpty().withMessage('La categoria es obligatorio').bail(),
check('description')
.notEmpty().withMessage('La descripcion es obligatorio').bail(),
check('image')
.notEmpty().withMessage('La imagen es obligatorio').bail(),



     




]