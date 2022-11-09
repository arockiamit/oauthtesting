/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.post('/number',(req,res)=>{
  const {phoneNumber}=req.body;
  console.log(phoneNumber);
})
app.post('/name',(req,res)=>{
  const {name}=req.body;
  console.log(name);
})



app.listen(3001, () => {
  console.log('server Running');
});
