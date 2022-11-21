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
    const url = 'https://graph.facebook.com/v15.0/106768935582427/messages';
    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer EAAP6obW3ZB1oBAAbuI2q98KLe2ZA2vRFzm72EX6TdIy1fmXA1iRkwrDkrOzScyaIlLjCbAisPMbRx7hki2FrbenW5Og5vZCLVhpKZATrZBVYLwdqAyshi7LNjhdyugSOuhVV6fzY1Mj32igC4ELYp6SUtiEFo0KwehFxpynZATNaewuTviX7ZAqjJbmo99ndRID1XZASfZCaKeRMT7nArv2M3',
      },
    };
    try {
      // eslint-disable-next-line no-use-before-define
      await obj.alertaxios(url, data, header);
      return ({ status: 'Message sent..!' });
    } catch (err) {
      throw Error(err);
    }
  } else {
    return ({ status: 'Message Not Sent..!' });
  }
};
const obj = { alertMessage, alertaxios };
module.exports = obj;
