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
const { UserDetails } = require('./schema');
const { userRegister } = require('./testFunctions/userRegister');
const { addContactNumber } = require('./testFunctions/addContactNumber');
const { deleteContactNumber2, deleteContactNumber1, deleteContactNumber3 } = require('./testFunctions/deleteContactNumber');
const { updateContactNumber } = require('./testFunctions/updateContactNumber');
const { getRegisteredNumber } = require('./testFunctions/getRegisteredNumber');
const { viewContactNumber } = require('./testFunctions/viewContactNumber');

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
  const { email, name } = req.body;

  userRegister(name, email).then((data) => {
    console.log(data);
    res.json(data);
  });
});

app.post('/search', async (req, res) => {
  getRegisteredNumber(req, res);
});

app.post('/api/addContact', async (req, res) => {
  addContactNumber(req, res);
});

// API to View Registered Contact
app.post('/api/ViewContact', async (req, res) => {
  viewContactNumber(req, res);
});

// API to delete Registered Contact1
app.post('/api/deleteContactNumber1', async (req, res) => {
  deleteContactNumber1(req, res);
});

// API to delete Registered Contact2
app.post('/api/deleteContactNumber2', async (req, res) => {
  deleteContactNumber2(req, res);
});

// API to delete Registered Contact3
app.post('/api/deleteContactNumber3', async (req, res) => {
  deleteContactNumber3(req, res);
});

// API to edit Registered Contact
app.put('/modify', async (req, res) => {
  updateContactNumber(req, res);
});

// API for alert message
app.post('/api/alertMessage', async (req, res) => {
  const { token, location } = req.body;
  // const userPhoneNUmber = tokenDecode(token);
  const details = await UserDetails.findOne({ userMobileNumber: token });
  const locat = location;

  const axios = require('axios');

  if (details.contactNumber1 !== undefined) {
    const a = details.contactNumber1;
    console.log(a, '123');
    console.log(location);
    // const a = +917339437623;
    const data = `{"messaging_product": "whatsapp", "to":${details.contactNumber1}, "type": "template", "template": { "name": "alert_safe_wizards", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"${details.userName}"},{"type":"text","text":"${locat}"}]}] }}`;
    const config = {
      method: 'POST',
      url: 'https://graph.facebook.com/v15.0/106768935582427/messages',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer EAAP6obW3ZB1oBAA1trZChcOXxyNE4c6tdKY99vnDJGzKrooM45TjFDJRjELDmiFPoV2UIa6yPJmsBYM2NxjwJzFWBiaR6X6AiCqsZBQDiahScq8i7SQxYhcgWMZBdaJagdzZB29xEPZC2534b8Bc0eNk40HuSJ3wtsl9LVjRCVtPw9mEWftVWT',
      },
      data,
    };
    axios(config);
  }

  if (details.contactNumber2 !== undefined) {
    const data1 = `{"messaging_product": "whatsapp", "to":${details.contactNumber2}, "type": "template", "template": { "name": "alert_safe_wizards", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"${details.userName}"},{"type":"text","text":"${locat}"}]}] }}`;
    const config = {
      method: 'POST',
      url: 'https://graph.facebook.com/v15.0/106768935582427/messages',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer EAAP6obW3ZB1oBAA1trZChcOXxyNE4c6tdKY99vnDJGzKrooM45TjFDJRjELDmiFPoV2UIa6yPJmsBYM2NxjwJzFWBiaR6X6AiCqsZBQDiahScq8i7SQxYhcgWMZBdaJagdzZB29xEPZC2534b8Bc0eNk40HuSJ3wtsl9LVjRCVtPw9mEWftVWT',
      },
      data: data1,
    };
    axios(config);
  }

  if (details.contactNumber3 !== undefined) {
    const data1 = `{"messaging_product": "whatsapp", "to":${details.contactNumber3}, "type": "template", "template": { "name": "alert_safe_wizards", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"${details.userName}"},{"type":"text","text":"${locat}"}]}] }}`;
    const config = {
      method: 'POST',
      url: 'https://graph.facebook.com/v15.0/106768935582427/messages',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer EAAP6obW3ZB1oBAA1trZChcOXxyNE4c6tdKY99vnDJGzKrooM45TjFDJRjELDmiFPoV2UIa6yPJmsBYM2NxjwJzFWBiaR6X6AiCqsZBQDiahScq8i7SQxYhcgWMZBdaJagdzZB29xEPZC2534b8Bc0eNk40HuSJ3wtsl9LVjRCVtPw9mEWftVWT',
      },
      data: data1,
    };
    axios(config);
  }
  return res.json('');
});

app.post('/otp', (req, res) => {
  const { email } = req.body;
  console.log(email);
  let otp = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  res.json(otp);

  const mailOptions = {
    from: 'santhosh.r@kaaviansys.com',
    to: `${email}`,
    subject: 'Safety App',
    text: `${otp} is your verification code for SOS`,
  };

  // Mail transport configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'santhosh.r@kaaviansys.com',
      pass: '@santhosh1',
    },
  });

  // Delivering mail with sendMail method
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log(`Email sent: ${info.response}`);
  });

  // console.log("generateotp = ",generate());
});

app.post('/googledata', (req) => {
  // eslint-disable-next-line camelcase
  const { userName, userEmail } = req.body;
  // eslint-disable-next-line camelcase
  UserDetails.create({ userName, userEmail });
});

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
