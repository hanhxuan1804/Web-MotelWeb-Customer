const async = require('hbs/lib/async');
const Rating = require('../../server/model/Rating');

exports.rate = async(req,res) => {
    const {productId,rating,content}=req.body;
    //const userId=req.user._id
    
    try{
        const newRating = await Rating.create({
            productId,
            rating,
            point,
            //userId,
        });
        res.status(201).json(newRating);
    }
    catch(error){
        res.status(500).json({
            status: 'fail',
            messager: error.messager,
        })
    }


    
}