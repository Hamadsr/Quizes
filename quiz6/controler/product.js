const express= require("express")


const  getProduct= (req,res)=>{

    function saveProduct(name, price){
        const newproduct= new product({
    
            name,
            price,
        })
        product.save()
      .then(result => {
        console.log(result)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
    saveProduct("PS5", 1000)

}


const addProduct=(req,res)=>{
    function saveProduct(name, price){
        const newproduct= new product({
    
            name,
            price,
        })
        product.save()
      .then(result => {
        console.log(result)
      })
      .catch(err=>{
        console.log(err)
      })
    }
}
module.exports={getProduct, addProduct}
