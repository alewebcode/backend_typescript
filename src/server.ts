import express from 'express';


const app = express();

app.get('/',(req,response) =>{
   return response.json({message:'Hello'})
})

app.listen(3333)