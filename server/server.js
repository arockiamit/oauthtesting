const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {UserDetails}=require('./schema');
const mongoose=require('mongoose');
const { connectToMongo, getDB } = require('./db-connection');
app.use('/static', express.static('static'));
app.use(bodyParser.json({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));


mongoose.connect(
  'mongodb+srv://yellowTeam:5ALD0k69147PSvF3@db-kaavian-sys-cluster-in1-966a0c87.mongo.ondigitalocean.com/wizardsDB?tls=true&authSource=admin&replicaSet=db-kaavian-sys-cluster-in1');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB Connected successfully');
});


app.get('/search', async(req, res) => {
  await UserDetails.find({}).then((data)=>{
    res.json(data)})
  
});

app.post('/addnum', async(req,res) => {
  const {num1, } = req.body;
    if(num1!==''){
    await UserDetails.create({ contactNumber1:num1 });
    }else{
      alert='please fill the fields'
      res.json(alert);
    }
    
});


app.put('/modify', async (req,res) => {
  const { number} = req.body;
  await UserDetails.updateOne(
    {userMobileNumber:number },
    {
      $set: {contactNumber1:number},
    }
  );
  });

app.delete('/remove/:id', async(req, res) => {
	const { id } = req.params;
	await UserDetails.UpdateOne({ $unset:'' });
	await UserDetails.find({}).then(data => {
		res.json({ data });
	});

});


connectToMongo()
		app.listen(3001, () => {
		console.log('Application is running.');
		});
	
  