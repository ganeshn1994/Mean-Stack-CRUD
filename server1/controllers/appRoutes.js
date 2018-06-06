var express = require('express');
var router = express.Router();

router.post('/create', (req,res,next)=>{
    res.status(200).json({msg:'create'})
})
router.get('/read', (req,res,next)=>{
    res.status(200).json({msg:'create'})
})
router.put('/update', (req,res,next)=>{
    res.status(200).json({msg:'create'})
})
router.delete('/delete/:id', (req,res,next)=>{
    res.status(200).json({msg:'create'})
})

module.exports = router;
