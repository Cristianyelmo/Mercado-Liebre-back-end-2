const multer = require('multer')
const path = require('path');


const storageOneImage =multer.diskStorage({
    
    destination:function(req,file,callback){
callback(null, 'public/images/products')
},



filename:function(req,file,callback){
    callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
}








});

const uploadOneImage =multer({
    storage:  storageOneImage
})


module.exports ={
    uploadOneImage
}