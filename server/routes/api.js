const express=require('express');
const router= express.Router()
const Data=require('../models/data')


//get data
router.get("/data",async(req,res)=>{
    let data=await Data.find()

    return res.status(200).json({data})
})

//search by label
router.get('/search/:key',async(req,res)=>{
   try{
      let key=`^${req.params.key}`
      let result=await Data.find({$or:[{ label :{ $regex : key,  $options: "i"  }}]})
     if(result.length){
        return res.status(200).json({ result });
     }
     else{
        return res.status(400).json({message:"not found"})
     }
   }
   catch(err){
    return res.status(400).json({message:err.message})
   }
})

//add data
router.post('/adddata', async (req, res) => {
    const { label, photourl } = req.body;
    if (!label || !photourl) {
      return res.status(400).json({ message: 'details are missing' });
    }
    try {
      let newdata = await Data.create({ label, photourl });
      return res.status(201).json({ newdata });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  });


router.delete('/deletedata/:id',async(req,res)=>{
    try{
        let data=await Data.deleteOne({_id:req.params.id})
        return res.status(204).json({data})
    }
    catch(err){
        return res.status(400).json({message:err.message})
    }
  
    
})

module.exports= router