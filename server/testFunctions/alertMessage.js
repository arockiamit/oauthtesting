/* eslint-disable no-new */
/* eslint-disable no-console */
const axios = require('axios');

const alertMessage = (contactNumber, userName, location) => new Promise(() => {
  if (contactNumber !== undefined) {
    const data = `{"messaging_product": "whatsapp", "to":${contactNumber}, "type": "template", "template": { "name": "alert_safe_wizards", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"${userName}"},{"type":"text","text":"${location}"}]}] }}`;
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
});

module.exports = { alertMessage };
