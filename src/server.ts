import express from 'express';


const app = express();

app.get('/',response =>{
   console.log('opa') 
})

app.listen(3333)