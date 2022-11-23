/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
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
// const uploadPicture = require('./sample');
// eslint-disable-next-line import/no-unresolved
const { ImageStoring } = require('./schema');
const { addContactNumberAPI } = require('./API-Test-Functions/addContactNumberAPI');
const {
  updateCallNumber,
} = require('./testFunctions/updateContactNumber');
const { getUserDetails } = require('./testFunctions/gettingUserDetails-alertMessage');
const { callContactNumberAPI } = require('./API-Test-Functions/callContactNumberAPI');
const { alertMessage } = require('./testFunctions/alertMessage');
const { userRegisterAPI } = require('./API-Test-Functions/userRegisterAPI');
const { updateContact1, updateContact2, updateContact3 } = require('./API-Test-Functions/updateContactApi');
const { viewContactAPI } = require('./API-Test-Functions/viewContactNumberAPI');
const { deletenum1, deletenum2, deletenum3 } = require('./API-Test-Functions/deletenumberAPI');
const { deleteCallNumber } = require('./testFunctions/deleteContactNumber');

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

// API for User Register..
app.post('/userRegister', userRegisterAPI);

app.post('/api/addContact', addContactNumberAPI);

// API for call number
app.post('/api/callNumbers', callContactNumberAPI);

// API to View Registered Contact
app.post('/api/ViewContact', viewContactAPI);

// API to delete Registered Contact1
app.post('/api/deleteContactNumber1', deletenum1);

// API to delete Registered Contact2
app.post('/api/deleteContactNumber2', deletenum2);

// API to delete Registered Contact3
app.post('/api/deleteContactNumber3', deletenum3);

// API to delete Registered call number
app.post('/api/deleteCallNumber', async (req, res) => {
  const { token } = req.body;
  const data = await deleteCallNumber(token);
  res.json(data);
});

// API to edit Registered Contact
app.put('/modify1', updateContact1);

// API to edit Registered Contact
app.put('/modify2', updateContact2);

// API to edit Registered Contact
app.put('/modify3', updateContact3);

// API to edit Registered Contact
app.put('/updateCallNumber', async (req, res) => {
  const {
    token,
  } = req.body;
  const data = await updateCallNumber(token);
  res.json(data);
});

// API for alert message
app.post('/api/alertMessage', async (req, res) => {
  const { token, location } = req.body;
  const details = await getUserDetails(token);
  const locat = location;
  const data1 = await alertMessage(details.contactNumber1, details.userName, locat);
  await alertMessage(details.contactNumber2, details.userName, locat);
  await alertMessage(details.contactNumber3, details.userName, locat);
  return res.json(data1);
});

// app.post('/image', async (req, res) => {
//   const { picture } = req.body;
//   if (picture !== '') {
//     const imagebuffer = picture.substring(23);
//     const finalImg = new Buffer.from(imagebuffer, 'base64');
//     fs.writeFileSync('myImg.png', finalImg);
//     res.json(picture);
//   }
// });

app.post('/api/imageStoring', async (req, res) => {
  const { token, pictureSrc } = req.body;
  await ImageStoring.create({ userEmail: token, image: pictureSrc });
  res.json({ status: 'success' });
});

app.get('/api/getImage', async (req, res) => {
  const { token } = req.body;
  const data = await ImageStoring.findOne({ userEmail: token });
  res.json(data);
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
