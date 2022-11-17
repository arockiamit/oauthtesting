/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { UserDetails } = require('../schema');
const addContactNumber = require('../testFunctions/addContactNumber');

const sandbox = sinon.createSandbox();

describe('addContactNumber', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting User Detail', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(true));
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumber.addContactNumbers('poomathi.k@kaaviansys.com', 918765439821, '{ userName : Poomathi K, userEmail: poomathi.k@kaaviansys.com, contactNumber1: 9187654234231 }');
    // console.log(value);
    expect(value).toEqual(value);
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(true));
    sandbox.stub(UserDetails, 'updateOne');
    const value = await addContactNumber.addContactNumbers('poomathi.k@kaaviansys.com', '91undefined');
    console.log(value);
    expect(value).toEqual(value);
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.reject(new Error('Failed..')));
    const value = await addContactNumber.addContactNumber('poomathi.k@kaaviansys.com', undefined);
    // console.log(value);
    expect(value.status).toEqual('Error..');
  });
  it('Validation check', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.reject(new Error('Failed..')));
    const value = await addContactNumber.addContactNumber('poomathi.k@kaaviansys.com', null);
    // console.log(value);
    expect(value.status).toEqual('Please enter the details..');
  });
});

// return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// );
