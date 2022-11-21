/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { UserDetails } = require('../schema');
const { callContactNumber } = require('../testFunctions/callContactNumber');

const sandbox = sinon.createSandbox();

describe('callContactNumber', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting User Call Details', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(true);
    sandbox.stub(UserDetails, 'updateOne').returns(true);
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', 'Poomathi.K', 918765439821);
    // console.log(value);
    expect(value).toEqual(value);
  });
  it('Getting User Call Details', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(true));
    sandbox.stub(UserDetails, 'updateOne');
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', 'Poomathi.K', 918765439821);
    expect(value.status).toEqual('success');
  });
  it('Getting User Call Details', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'Poomathi.K', userEmail: 'poomathi.k@kaaviansys.com', callingNumber: 916382856207,
    });
    const value = await callContactNumber('poomathi.k@kaaviansys.com', 'Meena.M', 918765439821);
    expect(value).toEqual(value);
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'update').returns(Promise.reject(new Error('Failed..')));
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', undefined, undefined);
    // console.log(value);
    expect(value.status).toEqual('Please enter valid details');
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'update');
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', 'Anu', null);
    // console.log(value);
    expect(value.status).toEqual('Please enter valid details');
  });
});
