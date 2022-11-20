/* eslint-disable no-console */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { UserDetails } = require('../schema');
const { viewNumber } = require('../testFunctions/viewContactNumber');
// const {  phonenumber } = require('../testFunctions/viewContactNumber');

const sandbox = sinon.createSandbox();
describe('Server side testing', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('Testing the wrong emailid', async () => {
    // sandbox.stub(UserDetails, 'findOne');
    const value = await viewNumber();
    console.log(value);
    expect(value.status).toEqual('Email Not Found..');
  });

  it('Testing the all datas', async () => {
    sandbox.stub(UserDetails, 'findOne').returns('success');
    const value = await viewNumber('arockiaraj.j@kaaviansys.com');
    expect(value).toEqual('success');
  });
  it(' get data', async () => {
    sandbox.stub(UserDetails, 'findOne').returns('{}');
    const value = await viewNumber('arockiaraj.j@kaaviansys.com');
    expect(value).toEqual('{}');
  });
});
