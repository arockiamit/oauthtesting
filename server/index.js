/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable consistent-return */
/* eslint-disable global-require */
/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
// const { UserDetails } = require('./schema');
const { userRegister } = require('./testFunctions/userRegister');
const { addContactNumber } = require('./testFunctions/addContactNumber');
const { deleteContactNumber2, deleteContactNumber1, deleteContactNumber3 } = require('./testFunctions/deleteContactNumber');
const { updateContactNumber } = require('./testFunctions/updateContactNumber');
const { viewContactNumber } = require('./testFunctions/viewContactNumber');
const { getUserDetails } = require('./testFunctions/gettingUserDetails-alertMessage');
const { alertMessage } = require('./testFunctions/alertMessage');

const NODE_ENV = process.env.NODE_ENV || 'DEV';

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

app.post('/userRegister', async (req, res) => {
  const { name, email } = req.body;
  const data = await userRegister(name, email);
  res.json(data);
});

app.post('/api/addContact', async (req, res) => {
  const { token, userName, mobileNumber } = req.body;
  const number = `91${mobileNumber}`;
  const data = await addContactNumber(token, userName, number);
  res.json(data);
});

// API to View Registered Contact
app.post('/api/ViewContact', async (req, res) => {
  const { token } = req.body;
  const data = await viewContactNumber(token);
  res.json(data);
});

// API to delete Registered Contact1
app.post('/api/deleteContactNumber1', async (req, res) => {
  const { token } = req.body;
  const data = await deleteContactNumber1(token);
  res.json(data);
});

// API to delete Registered Contact2
app.post('/api/deleteContactNumber2', async (req, res) => {
  const { token } = req.body;
  const data = await deleteContactNumber2(token);
  res.json(data);
});

// API to delete Registered Contact3
app.post('/api/deleteContactNumber3', async (req, res) => {
  const { token } = req.body;
  const data = await deleteContactNumber3(token);
  res.json(data);
});

// API to edit Registered Contact
app.put('/modify', async (req, res) => {
  const {
    token, num1, num2, num3,
  } = req.body;
  const data = await updateContactNumber(token, num1, num2, num3);
  console.log(data);
  res.json(data);
});

// API for alert message
app.post('/api/alertMessage', async (req, res) => {
  const { token, location } = req.body;
  // const userPhoneNUmber = tokenDecode(token);
  const details = await getUserDetails(token);
  const locat = location;

  const data1 = await alertMessage(details.contactNumber1, details.userName, locat);
  const data2 = await alertMessage(details.contactNumber2, details.userName, locat);
  const data3 = await alertMessage(details.contactNumber3, details.userName, locat);

  console.log(data1, data2, data3);

  return res.json('');
});

app.post('/otp', (req, res) => {
  const { email } = req.body;
  let otp = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  res.json(otp);

  const mailOptions = {
    from: 'kaavianlibraryvnr@gmail.com',
    to: `${email}`,
    subject: 'Safety App',
    text: `${otp} is your verification code for SOS`,
  };

  // Mail transport configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kaavianlibraryvnr@gmail.com',
      pass: 'nhadtxippjbkcube',
    },
  });

  // Delivering mail with sendMail method
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log(`Email sent: ${info.response}`);
  });
});

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
