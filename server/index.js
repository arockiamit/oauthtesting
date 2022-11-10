/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const url = require('url');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { UserDetails } = require('./schema');

const NODE_ENV = process.env.NODE_ENV || 'DEV';

const JWT_SECRET_KEY = 'asdfghjnbvsdfgh';

const app = express();
// mogoose connection
mongoose.connect(
  'mongodb+srv://viruteam:437t1Ko6SW05F2TE@kaavian-systems-blr-db-6a06161d.mongo.ondigitalocean.com/hackathonDB?tls=true&authSource=admin&replicaSet=kaavian-systems-blr-db',
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB Connected successfully');
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000' }));

// for serving built static js/css files
app.use('/static', express.static(path.join(__dirname, '/../client/build/static')));
app.use('/images', express.static(path.join(__dirname, '/../client/build/images')));

// Function to decode the token
// const tokenDecode = (token) => {
//   const phoneNumber = jwt.verify(token, JWT_SECRET_KEY);
//   return (phoneNumber);
// };

app.post('/userRegister', async (req, res) => {
  const { phoneNumber, name } = req.body;
  try {
    await UserDetails.create({ userName: name, userMobileNumber: phoneNumber });
    const { user } = await UserDetails.findOne({ userMobileNumber: phoneNumber });
    const mobileNumber = user.userMobileNumber;
    console.log(mobileNumber);
    const token = jwt.sign({ mobileNumber }, JWT_SECRET_KEY);
    return res.json({ status: 'success', token });
  } catch (error) {
    return res.json({ error });
  }
});

app.post('/api/registerContact', async (req, res) => {
  const { token, mobileNumber } = req.body;
  // const userPhoneNUmber = tokenDecode(token);
  await UserDetails.findOne({ userMobileNumber: token }).then(async (data) => {
    if (data.contactNumber1 === undefined) {
      await UserDetails.updateOne({ userMobileNumber: token }, { $set: { contactNumber1: mobileNumber } });
      return res.json({ status: 'success' });
    } else if (data.contactNumber2 === undefined) {
      await UserDetails.updateOne({ userMobileNumber: token }, { $set: { contactNumber2: mobileNumber } });
      return res.json({ status: 'success' });
    } else if (data.contactNumber3 === undefined) {
      await UserDetails.updateOne({ userMobileNumber: token }, { $set: { contactNumber3: mobileNumber } });
      return res.json({ status: 'success' });
    }
    return res.json({ status: 'failure' });
  });
});

// API to View Registered Contact
app.post('/api/ViewContact', async (req, res) => {
  const { token } = req.body;
  await UserDetails.findOne({ userMobileNumber: token }, { userMobileNumber: 0 }).then((data) => {
    res.json(data);
  });
});

//  API to delete Registered Contact
// app.delete('/remove', async (req, res) => {
//   await UserDetails.UpdateOne({ $unset: '' });
//   await UserDetails.find({}).then((data) => {
//     res.json({ data });
//   });
// });

// API to edit Registered Contact
// app.put('/modify', async (req, res) => {
//   const { number } = req.body;
//   await UserDetails.updateOne(
//     { userMobileNumber: number },
//     { $set: { contactNumber1: number } },
//   );
// });

// const result = async () => {
//   // await UserDetails.create({ userName: 'Poomathi.K', userMobileNumber: 987654321012 });
//   await UserDetails.find({ userMobileNumber: 9047420795 });
//   // .then(data=> console.log(data));
// };

// result();

// for any other request, serve HTML in DIT environment (cloud env)
if (NODE_ENV === 'DIT') {
  const indexHTMLContent = fs.readFileSync(
    path.join(`${__dirname}/../client/build/index.html`),
    'utf8',
  );
  app.all('*', (req, res) => {
    res.send(indexHTMLContent);
  });
}

app.listen(3001, () => {
  console.log('server Running');
});
