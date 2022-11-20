/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const sinon = require('sinon');

const {
  addContactNumber, addContactNumbers, updateFunction1, updateFunction2, updateFunction3,
} = require('../testFunctions/addContactNumber');

const sandbox = sinon.createSandbox();

const { UserDetails } = require('../schema');

describe('adding numbers - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Update-Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateFunction1('sudha@gmail.com', 'Poomathi.K', '919876543212', { userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Update-Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName: 'Poomathi.K', contactNumber1: 918754526731,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateFunction2('sudha@gmail.com', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918754526731,
    });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Update-Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918754526731, contactName2: 'Meena.M', contactNumber2: 918765423451,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateFunction3('sudha@gmail.com', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918754526731, contactName2: 'Meena.M', contactNumber2: 918765423451,
    });
    // console.log(value);
    expect(value.status).toEqual('success');
  });
});

describe('Validation of adding numbers - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Validaton-Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', 'Poomathi.K', '919876543212', { userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Validaton-Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', 'Meena.M', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123,
    });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123, contactName2: 'Meena.M', contactNumber2: 918765432134, contactNumber3: undefined,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', 'Harini', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123, contactName2: 'Meena.M', contactNumber2: 918765432134, contactNumber3: undefined,
    });
    // console.log(value);
    expect(value.status).toEqual('success');
  });
  it('Failure..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123, contactName2: 'Meena.M', contactNumber2: 918765432134, contactName3: 'Harini', contactNumber3: 912345678912,
    });
    sandbox.stub(UserDetails, 'updateOne');
    const value = await addContactNumbers('sudha@gmail.com', 'Moon', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123, contactName2: 'Meena.M', contactNumber2: 918765432134, contactName3: 'Harini', contactNumber3: 912345678912,
    });
    expect(value.status).toEqual('Already 3 users have been added');
  });
  it('Failure..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123, contactName2: 'Meena.M', contactNumber2: 918765432134, contactName3: 'Harini', contactNumber3: 912345678912,
    });
    sandbox.stub(UserDetails, 'updateOne');
    const value = await addContactNumbers('sudha@gmail.com', undefined, '91undefined', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactName1: 'Poomathi.K', contactNumber1: 918765423123, contactName2: 'Meena.M', contactNumber2: 918765432134, contactName3: 'Harini', contactNumber3: 912345678912,
    });
    expect(value.status).toEqual('Please Enter all fields..');
  });
});

describe('Get User Details - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ data: true });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumber('sudha@gmail.com', 'Anu', '919876543212', '{userName: sudha.s, userEmail: sudha@gmail.com}');
    expect(value).toEqual(value);
  });
  it('Error', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.reject(new Error('error')));
    // sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(new Error('Test')));
    const value = await addContactNumber('sudha@gmail.com', undefined, undefined);
    expect(value.status).toEqual('Please enter the details..');
  });
  it('Validation Checking', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(new Error('Test')));
    const value = await addContactNumber('sudha@gmail.com', 'Poomathi K', null);
    expect(value.status).toEqual('Please enter the details..');
  });
});
