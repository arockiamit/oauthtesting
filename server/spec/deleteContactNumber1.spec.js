const sinon = require('sinon');
// const Request = require('request');
const deletecontactnumber = require('../testFunctions/deleteContactNumber');
const { UserDetails } = require('../schema');

const sandbox = sinon.createSandbox();

// eslint-disable-next-line no-undef
describe('DeleteContactNumber', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    sandbox.restore();
  });
  // eslint-disable-next-line no-undef
  it('Getting and Storing values in DB..', async () => {
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    // sandbox.stub(UserDetails, 'create').resolves(true);
    const value = await deletecontactnumber.deleteContactNumber1('poomathi.k@kaaviansys.com');
    // eslint-disable-next-line no-undef
    expect(value.status).toEqual('success');
  });
  // eslint-disable-next-line no-undef
  it('Error Testing..', async () => {
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.reject(new Error('Test')));
    const value = await deletecontactnumber.deleteContactNumber1('poomathi.k@kaaviansys.com');
    // eslint-disable-next-line no-undef
    expect(value.status).toEqual('error');
  });
});
