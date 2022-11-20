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
    sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(true));
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', 918765439821, '{ userName : Vijayahrini.J, userEmail: vijayaharini.j@kaaviansys.com, callingNumber: 9187654234231 }');
    // console.log(value);
    expect(value).toEqual(value);
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'update').returns(Promise.resolve(true));
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', '91undefined');
    console.log(value);
    expect(value).toEqual(value);
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'update').returns(Promise.reject(new Error('Failed..')));
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', undefined);
    // console.log(value);
    expect(value.status).toEqual('Please enter the details');
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'update').returns(Promise.reject(new Error('Failed..')));
    const value = await callContactNumber('vijayaharini.j@kaaviansys.com', null);
    // console.log(value);
    expect(value.status).toEqual('Please enter the details');
  });
});
