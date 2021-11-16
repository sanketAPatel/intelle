const mongoose =require('mongoose');

const product =mongoose.Schema({

    serialNumber :{
        type: Number,
        require :true
    },
    pname :{
        type : String,
        require :true
    },

    ptype: {
        type: String,
        require :true
    },
    pdate: {
        type: Date,
        default: Date.now
    }
});

module.exports =mongoose.model('Product',product);