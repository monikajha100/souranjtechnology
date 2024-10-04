const express=require('express')
const router=express.Router()
router.get ('/web_interface',function(req,res,next){
res.render('webinterface')
})
module.exports=router