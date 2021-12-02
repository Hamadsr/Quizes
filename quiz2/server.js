const express = require('express');
const cors = require('cors');
const { data } = require("./db");

const app = express();


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());
//=================Q3==================/

app.get('/', (req, res) => {
    
       
        res.send(data);
      
    });

    app.get('/data/:id', (req, res) => {
        
        const oneTeam= data.find((ele)=>{

           return  ele.id ==parseInt(req.params.id);
        })
        
           
            res.send(oneTeam);
          
        });

        app.get('/random', (req, res) => {
        
            const oneTeam= data.find((ele)=>{
    
               return  Math.floor(Math.random() * 5)+1 ==ele.id
            })
            
               
                res.send(oneTeam);
              
            });
 //============================================//
 
 //==============Q3======================//
 


    
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});