const express = require('express')
const Cards = require('../models/tinder')
const router = express.Router()

router.get('/',async(req,res)=>{
    const cards = await Cards.find()
    res.status(200).json(cards)
})

router.post("/", async(req,res)=>{
    const cards = new Cards({
        name:req.body.name,
        imgUrl:req.body.imgUrl
    })
    await cards.save()
    res.status(201).json(cards)
})

module.exports = router