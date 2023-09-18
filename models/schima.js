const mongoose = require('mongoose');

const Productdata = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    price : {
        type:Number,
        required: true
    },
    features : {
        type:Boolean,
        default:false
    },
    rating : {
        type:Number,
        default:4.8
    },
    createdAt : {
        type:Date,
        default:Date.now(),
    },
    image:{
        type:String,
        required : true,
    },
    company:{
        type:String,
        informatin: {
            value : ['honda', 'mahendra', 'tata','jaguar','suzuki','BMW'],
             massage :`{VALUE} is not defind`,
        }
    }
});

const Product = mongoose.model('Product', Productdata);

module.exports = Product;