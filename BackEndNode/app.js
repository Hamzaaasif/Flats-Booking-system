const express = require('express')
const app = express();

app.get("/" , (req , res)=>{
  res.send("Hello from node!!");
});


const port = 8080
app.listen(port,()=>{console.log("Node is listning at http://localhost:8080")});