/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const sinon = require('sinon');
// const Request = require('request');
const axios = require('axios');
// const { alertaxios } = require('../testFunctions/alertMessage');
const obj = require('../testFunctions/alertMessage');
// eslint-disable-next-line import/order

const sandbox = sinon.createSandbox();
const data = '{"messaging_product": "whatsapp", "to":\'917339437623, "type": "template", "template": { "name": "alert_safe_wizards", "language": { "code": "en_US" },"components":[{"type":"body","parameters":[{"type":"text","text":"Meenakshi.M"},{"type":"text","text":"http://maps.google.com/?q=9.597234582582793,77.949371"}]}] }}';
const config = {
  method: 'POST',
  url: 'https://graph.facebook.com/v15.0/106768935582427/messages',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer EAAP6obW3ZB1oBAA1trZChcOXxyNE4c6tdKY99vnDJGzKrooM45TjFDJRjELDmiFPoV2UIa6yPJmsBYM2NxjwJzFWBiaR6X6AiCqsZBQDiahScq8i7SQxYhcgWMZBdaJagdzZB29xEPZC2534b8Bc0eNk40HuSJ3wtsl9LVjRCVtPw9mEWftVWT',
  },
  data,
};

describe('alertmessage axios', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting and Storing values in DB axios..', async () => {
    sandbox.stub(axios, 'post').returns(Promise.resolve({ data: 'tested' }));
    // sandbox.stub(UserDetails, 'create').resolves(true);
    const value = await obj.alertaxios(config);
    expect(value).toEqual('tested');
  });
  it('Error Testing axios..', async () => {
    sandbox.stub(axios, 'post').returns(Promise.reject(new Error('error')));
    // const value = await alertMessage('917339437623', 'Meenakshi.M', 'http://maps.google.com/?q=9.597234582582793,77.949371');
    await expectAsync(obj.alertaxios(config)).toBeRejected();
  });
  it('Testing axios if..', async () => {
    // sandbox.stub(axios, 'post').returns(Promise.reject(new Error('error')));
    const value = await obj.alertMessage(undefined);
    expect(value.status).toEqual('Message Not Sent..!');
  });
});
describe('alertmessage', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting and Storing values in DB..', async () => {
    sandbox.stub(obj, 'alertaxios').returns(true);
    // sandbox.stub(UserDetails, 'create').resolves(true);
    const value = await obj.alertMessage(917339437623, 'Meenakshi.M', 'http://maps.google.com/?q=9.597234582582793,77.949371');
    expect(value.status).toEqual('Message sent..!');
  });
  it('Error Testing..', async () => {
    sandbox.stub(obj, 'alertaxios').throws(new Error('failed'));
    // const value = await alertMessage('917339437623', 'Meenakshi.M', 'http://maps.google.com/?q=9.597234582582793,77.949371');
    await expectAsync(obj.alertMessage(917339437623, 'Meenakshi.M', 'http://maps.google.com/?q=9.597234582582793,77.949371')).toBeRejected();
  });
});
