/* eslint-disable no-undef */
const sinon = require('sinon');
const { deleteContactNumber1 } = require('../testFunctions/deleteContactNumber');
const { UserDetails } = require('../schema');

const sandbox = sinon.createSandbox();
describe('DELETE-CONTACT-NUMBER', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('DELETE-NUMBER', async () => {
    sandbox.stub(UserDetails, 'updateOne');
    sandbox.stub(UserDetails, 'findOne').returns({ userData: 'testing success' });
    const value = await deleteContactNumber1('rsanthosh17c@gmail.com');
    expect(value.userData).toEqual('testing success');
  });
  it('ERROR', async () => {
    const value = await deleteContactNumber1(undefined);
    expect(value.status).toEqual('error');
  });
});
