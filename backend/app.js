// https://www.youtube.com/watch?v=dbaAOsmZt5Q&list=PLzb46hGUzitBp584kLyn6l3i6yC-rXlmN&index=3&ab_channel=CourseOnDemand
const express = require('express');
const app = express();
require('dotenv/config');

const api = process.env.API_URL; // '/api/v1'

PORT = 3000

app.get(api + '/',(req,res) =>{ // this is a callback function which sends 
    res.send("Hello API"); // response to client whenever it is called 
})
// app.get(api + '/products',(req,res) =>{code}) //  for products page, etc

app.listen(PORT,()=>{ // for running the app on port 3000
    // console.log(api); // /api/v1
    console.log("Server is running on http://localhost:"+PORT);
})