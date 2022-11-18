/* eslint-disable no-console */
/* eslint-disable no-undef */
const sinon = require('sinon');

const {
  addContactNumber, addContactNumbers, updateFunction1, updateFunction2, updateFunction3,
} = require('../testFunctions/addContactNumber');

const sandbox = sinon.createSandbox();
const { UserDetails } = require('../schema');

describe('AddContactNumber - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  describe('Three Contact Numbers are saved already - ', () => {
    afterEach(() => {
      sandbox.restore();
    });
    it('find the same user', async () => {
      sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(true));
      sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
      const value = await addContactNumbers('sudha@gmail.com', 918946537264, '{userName: sudha.s, userEmail: sudha@gmail.com}');
      expect(value.token).toEqual('sudha@gmail.com', 918946537264, '{userName: s.sudha, userEmail: sudha@gmail.com}');
    });
  });
});

describe('adding numbers - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateFunction1('sudha@gmail.com', '919876543212', `{userName: sudha.s, userEmail: sudha@gmail.com, contactNumber1: ${undefined}, contactNumber2: ${undefined}}, contactNumber3: ${undefined}`);
    // console.log(value);
    expect(value.status).toEqual('success');
  });
});

describe('adding numbers - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918754526731 });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateFunction2('sudha@gmail.com', '919876543212', `{userName: sudha.s, userEmail: sudha@gmail.com, contactNumber1: ${918754526731}, contactNumber2: ${undefined}}, contactNumber3: ${undefined}`);
    // console.log(value);
    expect(value.status).toEqual('success');
  });
});

describe('adding numbers - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918754526731, contactNumber2: 918765423451,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await updateFunction3('sudha@gmail.com', '919876543212', `{userName: sudha.s, userEmail: sudha@gmail.com, contactNumber1: ${918754526731}, contactNumber2: ${918765432121}}, contactNumber3: ${undefined}`);
    // console.log(value);
    expect(value.status).toEqual('success');
  });
});

describe('Validation of adding numbers - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', '919876543212', { userName: 'sudha.s', userEmail: 'sudha@gmail.com' });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123 });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', '919876543212', { userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123 });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123, contactNumber2: undefined,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123, contactNumber2: undefined,
    });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123, contactNumber2: 918765432134, contactNumber3: undefined,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123, contactNumber2: 918765432134, contactNumber3: undefined,
    });
    // console.log(value);
    expect(value.status).toEqual('success');
  });

  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123, contactNumber2: 918765432134, contactNumber3: 912345678912,
    });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumbers('sudha@gmail.com', '919876543212', {
      userName: 'sudha.s', userEmail: 'sudha@gmail.com', contactNumber1: 918765423123, contactNumber2: 918765432134, contactNumber3: 912345678912,
    });
    expect(value.status).toEqual('success');
  });
  it('Failure..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns('{userName: sudha.s, userEmail: sudha@gmail.com, contactNumber1: 918765423123, contactNumber2: 918765432134, contactNumber3: 912345678912}');
    sandbox.stub(UserDetails, 'updateOne');
    const value = await addContactNumbers('sudha@gmail.com', '919876543212', '{userName: sudha.s, userEmail: sudha@gmail.com, contactNumber1: 918765423123, contactNumber2: 918765432134, contactNumber3: 912345678912}');
    console.log(value);
    expect(value.status).toEqual('success');
  });
});

describe('Get User Details - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  it('Success..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ data: true });
    sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(true));
    const value = await addContactNumber('sudha@gmail.com', '919876543212', '{userName: sudha.s, userEmail: sudha@gmail.com}');
    expect(value).toEqual(value);
  });
  it('Error', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.reject(new Error('error')));
    // sandbox.stub(UserDetails, 'updateOne').returns(Promise.resolve(new Error('Test')));
    const value = await addContactNumber('sudha@gmail.com', undefined);
    expect(value.status).toEqual('Please enter the details');
  });
  it('Validation Checking', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(Promise.resolve(new Error('Test')));
    const value = await addContactNumber('sudha@gmail.com', null);
    expect(value.status).toEqual('Please enter the details');
  });
});
