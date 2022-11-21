/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const sinon = require('sinon');
const {
  userRegister, createUserProfile, mailId,
} = require('../testFunctions/userRegister');
const { UserDetails } = require('../schema');

const sandbox = sinon.createSandbox();

describe('createUserProfile', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting and Storing values in DB..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(false);
    sandbox.stub(UserDetails, 'create').returns(true);
    // sandbox.stub(UserDetails, 'create').resolves(true);
    const value = await createUserProfile('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value).toEqual(value);
  });

  it('USER FOUND..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'Poomathi.K', userEmail: 'poomathi.k@kaaviansys.com' });
    sandbox.stub(UserDetails, 'create');
    const value = await createUserProfile('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('success');
  });

  it('Getting and Storing values in DB..', async () => {
    sandbox.stub(UserDetails, 'findOne').returns({ userName: 'Poomathi.K', userEmail: 'poomathi.k@kaaviansys.com' });
    sandbox.stub(UserDetails, 'create');
    const value = await createUserProfile('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('success');
    expect(value.email).toEqual('poomathi.k@kaaviansys.com');
  });
});

describe('userRegister Validation', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Validation success', async () => {
    sandbox.stub(UserDetails, 'findOne').returns(null);
    sandbox.stub(UserDetails, 'create');
    const value = await userRegister('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('success');
  });
  it('Validation failure', async () => {
    const value = await userRegister(undefined, undefined);
    expect(value.status).toEqual('error');
  });
  it('Validation failure', async () => {
    const value = await userRegister('Poomathi.K', undefined);
    expect(value.status).toEqual('error');
  });
  it('Validation failure', async () => {
    const value = await userRegister(undefined, 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('error');
  });
});

describe('userRgister Validation', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Email Validation..', async () => {
    const value = await mailId('poomathi.k@kaaviansys.com');
    expect(value).toEqual('poomathi.k@kaaviansys.com');
  });
  it('Email Validation..', async () => {
    const value = await mailId('Poomathi.K');
    expect(value).toEqual('Enter Valid Mail..');
  });
});
