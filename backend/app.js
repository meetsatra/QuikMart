const express = require('express');
const app = express();

PORT = 3000

app.get('/',(req,res) =>{ // this is a callback function which sends 
    res.send("Hello API"); // response to client whenever it is called 
})

app.listen(PORT,()=>{ // for running the app on port 3000
    console.log("Server is running on http://localhost:"+PORT);
})