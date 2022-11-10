/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const url = require('url');
const path = require('path');
const mongoose = require('mongoose');
const { UserDetails } = require('./schema');

const app = express();
// mogoose connection
mongoose.connect(
  'mongodb+srv://viruteam:437t1Ko6SW05F2TE@kaavian-systems-blr-db-6a06161d.mongo.ondigitalocean.com/hackathonDB?tls=true&authSource=admin&replicaSet=kaavian-systems-blr-db',
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erroe:'));
db.once('open', () => {
  console.log('DB Connected successfully');
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000' }));

// for serving built static js/css files
app.use(
  '/static',
  express.static(path.join(__dirname, '/../client/build/static')),
);
app.use(
  '/images',
  express.static(path.join(__dirname, '/../client/build/images')),
);

app.post('/api/register', async (req, res) => {
  const { mobileNumber } = req.body;

  await UserDetails.findOne({ userMobileNumber: 9047420795 }).then(async (data) => {
    if (data.contactNumber1 === undefined) {
      await UserDetails.updateOne({ userMobileNumber: 9047420795 }, { $set: { contactNumber1: mobileNumber } });
      return res.json('');
    } else if (data.contactNumber2 === undefined) {
      await UserDetails.updateOne({ userMobileNumber: 9047420795 }, { $set: { contactNumber2: mobileNumber } });
      return res.json('');
    } else if (data.contactNumber3 === undefined) {
      await UserDetails.updateOne({ userMobileNumber: 9047420795 }, { $set: { contactNumber3: mobileNumber } });
      return res.json('');
    }
    return res.json({ error: 'error' });
  });
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

app.post('/picture', async (req) => {
  const { img } = req.body;
  const pic = url.parse(img);
  console.log(pic);
});

app.post('/number', (req) => {
  const { phoneNumber, name } = req.body;
  console.log(phoneNumber);
  UserDetails.create([
    {
      userName: name,
      userMobileNumber: phoneNumber,
    },
  ]);
});
// app.post('/name',(req,res)=>{
//   const {name}=req.body;
//   console.log(name);
// })

// const result = async () => {
//   // await UserDetails.create({ userName: 'Poomathi.K', userMobileNumber: 987654321012 });
//   await UserDetails.find({ userMobileNumber: 9047420795 });
//   // .then(data=> console.log(data));
// };

// result();

// const result = async () => {
//   // await UserDetails.create({ userName: 'Poomathi.K', userMobileNumber: 987654321012 });
//   await UserDetails.find({ userMobileNumber: 9047420795 });
//   // .then(data=> console.log(data));
// };

// result();

app.listen(3001, () => {
  console.log('server Running');
});
