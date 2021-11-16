const express =require('express');
const  router =express.Router();
const productModel=require('../models/product');


router.get('/product', async(req,res)=>{
    console.log('product get  api called');
     

    //find all()
    const products= await productModel.find();
   
    try {res.json(products);
        }
    catch(err)
    {
    res.send(err);
     }
    }) 
    
    // findbyid
    router.get("/product/serialNumber:/${serialNumber}", async(req,res)=>{
    const products= await productModel.findById();
   
    try {res.json(products.serialNumber);
        }
    catch(err)
    {
    res.send(err);
     }
 
    })
    //----------------------------end----------------------//
    /* res.json({ 
         body:{
            serialNumber:2,
            name: 'nokia',
            pType: 'mobile'
         }
     })*/
    
    
    
    router.post('/product',async (req,res)=>{
      
       
        console.log('product post api called');
    
        const product=new productModel({
            serialNumber:req.body.serialNumber,
            pname: req.body.pname,
            ptype: req.body.ptype
        });
        //res.json(req.body.name );
        //res.json(product);
      /*  product.save((err,resp)=>{
                if(err){return res.send(err);}

                res.json(product);
        })*/

        /*  save then  promise
        product.save().then((resp)=>{
            res.json(resp);
            })
            .catch((err)=>{
            res.send(err);
            });*/

            
//--------------------await---------//
            const save =await product.save();
try 
{

res.json(save);
}
catch(err)
{
res.send(err);
}
    })  
   



module.exports=router;