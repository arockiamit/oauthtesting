/* eslint-disable no-new */
/* eslint-disable no-console */
const axios = require('axios');

const alertaxios = async (...args) => new Promise((resolve, reject) => {
  axios.post(...args)
    .then(({ data }) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

// eslint-disable-next-line consistent-return
const alertMessage = async (contactNumber, userName, location) => {
  if (contactNumber !== undefined) {
    const data = `{"messaging_product": "whatsapp", "to":${contactNumber}, "type": "template", "template": { "name": "alert_safe_wizards", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"${userName}"},{"type":"text","text":"${location}"}]}] }}`;

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer EAAP6obW3ZB1oBAA1trZChcOXxyNE4c6tdKY99vnDJGzKrooM45TjFDJRjELDmiFPoV2UIa6yPJmsBYM2NxjwJzFWBiaR6X6AiCqsZBQDiahScq8i7SQxYhcgWMZBdaJagdzZB29xEPZC2534b8Bc0eNk40HuSJ3wtsl9LVjRCVtPw9mEWftVWT',
      },
    };
    try {
      // eslint-disable-next-line no-use-before-define
      const msg = await obj.alertaxios('https://graph.facebook.com/v15.0/106768935582427/messages', data, header);
      return msg;
    } catch (err) {
      throw new Error(err);
    }
    // axios.post(config)
    //   .then(() => resolve({ status: 'success' }))
    //   .catch((error) => {
    //     resolve({ status: 'error', error });
    //   });
  } else {
    return ({ status: 'failed' });
  }
};
const obj = { alertMessage, alertaxios };
module.exports = obj;
