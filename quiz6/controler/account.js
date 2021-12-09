const express=require("epress")


const  getAcount= (req,res)=>{

    function saveAcount(name, hours){
        const newacount= new account({
    
            name,
            hours,
        })
        newCourses.save()
      .then(result => {
        console.log(result)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
    saveAcount("hamad", 10)

}

module.exports={getAcount}