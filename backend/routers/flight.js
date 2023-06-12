const router=require('express').Router();
const Flight=require('../models/Flights');



router.post('/postFlight',async(req,res)=>{
    const newFlight=new Flight(req.body);
    try{
        const saveFlight=await newFlight.save();
        res.status(201).json(saveFlight);
    }
    catch(err){
        res.status(500).json(err);
    }
})



router.get('/getFlight',async(req,res)=>{
    try{
        const data=await Flight.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.put('/updateFlight/:id',async(req,res)=>{
    try{ 
        const updatedFlight=await Order.findByIdAndUpdate(req.params.id,{
             $set:req.body,                                              
        },{new:true});                                                 
        res.status(200).json(updatedFlight)
   }
   catch(err){
        res.status(500).json(err);
   }

})

router.delete("/deleteFlight/:id", async(req,res)=>{

    try{ 
         await Order.findByIdAndDelete(req.params.id)
         res.status(200).json("You account is deleted successfully")
    }
    catch(err){
         res.status(500).json(err);
    }
})
module.exports=router;