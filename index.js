import express from 'express';

const app = express();

app.listen(3100, ()=>{
    console.log('servidor corriendo en el puerto 3100')
    console.log('http://localhost:3100')

})