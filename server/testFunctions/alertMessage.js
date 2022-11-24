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
const alertMessage = async (contactNumber, userName, location, email) => {
  try {
    if (contactNumber !== undefined) {
      const data = `{"messaging_product": "whatsapp", "to":${contactNumber}, "type": "template", "template": { "name": "safe_alert_wizards_image", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"${userName}"},{"type":"text","text":"${location}"},{"type":"text","text":"https://safety-app-sctoc.ondigitalocean.app/imageCapture?email=${Buffer.from(email).toString('base64')}"}]}] }}`;
      const url = 'https://graph.facebook.com/v15.0/106768935582427/messages';
      const header = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer EAAP6obW3ZB1oBAIXegZCSfxaveTMoLc4cRVgtaI6KHfHoVheB4rTNil9uBxUtNVD1BStBXVYwoKNeLCi20Tq0jujOBLPfdOP5GZCwyNOKN0mEejZAZAhzSEiOHGlEnFvF65yaIUK8h4bJhSzAM28HEhZAJFeZBUEDWZCZAxIxzjoJGzGyNZCaWdktI',
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
  } catch (err) {
    return ({ status: 'failure' });
  }
};
const obj = { alertMessage, alertaxios };
module.exports = obj;
