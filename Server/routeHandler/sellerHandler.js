const express = require('express')
const { createShop,postProduct,getAllProducts, getProductById, getShop,updateShop,getProductByCategory,deleteShop, deleteProduct,updateProduct } = require('../Controller/sellerController')
const checkLogin = require('../middlewares/checkLogin')
const { uploadSingle,uploadMultiple } = require('../middlewares/fileUploader')

const router  = express.Router()

// shop 
router.post('/create-shop',checkLogin,uploadSingle,createShop)
router.get('/get-shop',checkLogin,getShop)
router.put('/update-shop',checkLogin,uploadSingle,updateShop)
router.delete('/delete-shop',checkLogin,deleteShop)

// product 
router.post('/post-product', checkLogin,uploadMultiple,postProduct)
router.get('/get-all-products',checkLogin,getAllProducts)
router.get('/get-product-by-id/:id',checkLogin,getProductById)
router.get('/get-product-by-category/:category',checkLogin,getProductByCategory)
router.delete('/delete-product/:id',checkLogin,deleteProduct)
router.put('/update-product/:id',checkLogin,uploadMultiple, updateProduct)


module.exports = router