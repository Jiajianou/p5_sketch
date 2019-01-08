const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/empty-example/index.html');
});

app.listen(3000,()=>{
  console.log('The server is running.');
});
