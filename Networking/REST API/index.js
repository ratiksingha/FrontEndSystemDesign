
import express from 'express';
import fetch from 'node-fetch';

const app=express();

const PORT=3000;

app.all('/',(req,res)=>{
    // console.log(req);
    // console.log(res);
    res.send('Hello World');
})

//CRUD OPERATIONS

//CREATE
app.get('/todos', async (req, res) => {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    res.json(data);
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});