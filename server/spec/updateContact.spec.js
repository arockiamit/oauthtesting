/* eslint-disable no-undef */
const sinon = require('sinon');
const { updateContactNumber1, updateContactNumber2, updateContactNumber3 } = require('../testFunctions/updateContactNumber');
const { UserDetails } = require('../schema');

const sandbox = sinon.createSandbox();

describe('updateContactNumber', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('update function 1', async () => {
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateContactNumber1('livingstonimmanuel@gmail.com', 7339263969);
    expect(value.status).toBe('success');
  });

  it('update error 1', async () => {
    // sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve());
    const value = await updateContactNumber1('livingstonimmanuel@gmail.com', '');
    expect(value.status).toBe('fail');
    expect(value.msg).toBe('Please Enter valid phone number');
  });
  it('update function 2', async () => {
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateContactNumber2('livingstonimmanuel@gmail.com', 7339263969);
    expect(value.status).toBe('success');
  });

  it('update error 2 ', async () => {
    // sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve());
    const value = await updateContactNumber2('livingstonimmanuel@gmail.com', '');
    expect(value.status).toBe('fail');
    expect(value.msg).toBe('Please Enter valid phone number');
  });
  it('update function 3', async () => {
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateContactNumber3('livingstonimmanuel@gmail.com', 7339263969);
    expect(value.status).toBe('success');
  });

  it('update error 3', async () => {
    const value = await updateContactNumber3('livingstonimmanuel@gmail.com', '');
    expect(value.status).toBe('fail');
    expect(value.msg).toBe('Please Enter valid phone number');
  });
});
