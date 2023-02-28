// ************ Require's ************
const express = require('express');
const router = express.Router();

const {uploadOneImage}=require('../middlewares/upLoad')


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

const  ValidatorCreate  = require('../validations/ValidatorCreate');
const  ValidatorEdit  = require('../validations/ValidatorEdit');
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create',uploadOneImage.single('image'),ValidatorCreate, productsController.store);  


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id',uploadOneImage.single('image'),ValidatorEdit, productsController.update); 




/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
