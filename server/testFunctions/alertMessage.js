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
        Authorization: 'Bearer EAAP6obW3ZB1oBAINWzIiEztqKMSlD1F0MgPD8ZBNq3fN2KqWPonYD5u3CQWHW8kDSsEwPqw6liDsfLJTbG1UrkcUK2sP9mNzWns0UCHQHEn74tI82nNRSTCUmlRLXkIpSjaEIEpLfCo6REcNHZBfZCUr4BIWeiiZBt8NGcbWqTOpHiOa1iYXH8814IShY0C14G4176aSX7WZA3AOSZBNixn',
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
