const express = require('express')
const { createShop,postProduct,getAllProducts, getProductById, getShop,updateShop,getProductByCategory,deleteShop, deleteProduct,updateProduct } = require('../Controller/sellerController')
const checkLogin = require('../middlewares/checkLogin')
const { uploadSingle,uploadMultiple,thumbnail } = require('../middlewares/fileUploader')

const router  = express.Router()

// shop 
router.post('/create-shop',checkLogin,uploadSingle.single('file'),createShop)
router.get('/get-shop',checkLogin,getShop)
router.put('/update-shop',checkLogin,uploadSingle.single('file'),updateShop)
router.delete('/delete-shop',checkLogin,deleteShop)

// product 
router.post('/post-product', checkLogin,uploadMultiple.array('file',3),postProduct)
router.get('/get-all-products',checkLogin,getAllProducts)
router.get('/get-product-by-id/:id',checkLogin,getProductById)
router.get('/get-product-by-category/:category',checkLogin,getProductByCategory)
router.delete('/delete-product/:id',checkLogin,deleteProduct)
router.put('/update-product/:id',checkLogin,uploadMultiple.array('file',3), updateProduct)


module.exports = router