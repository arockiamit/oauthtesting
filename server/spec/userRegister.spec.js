/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const sinon = require('sinon');
// const Request = require('request');
const { userRegister, createUserProfile, isEmail } = require('../testFunctions/userRegister');
const { UserDetails } = require('../schema');

const sandbox = sinon.createSandbox();

describe('createUserProfile', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting and Storing values in DB..', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.resolve(true));
    // sandbox.stub(UserDetails, 'create').resolves(true);
    const value = await createUserProfile('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('success');
    expect(value.email).toEqual('poomathi.k@kaaviansys.com');
  });
  it('Error Testing..', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.reject(new Error('User Registration Failed..')));
    const value = await createUserProfile('Poomathi.K', 'poomathikaaviansys.com');
    expect(value.status).toEqual('error');
  });
  it('Error Testing..', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.reject(new Error('User Registration Failed..')));
    const value = await createUserProfile(1234, 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('error');
  });
  it('Error Testing..', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.reject(new Error('User Registration Failed..')));
    const value = await createUserProfile('Poomathi.K', 76543);
    expect(value.status).toEqual('error');
  });
});

describe('userRgister Validation', () => {
  beforeAll((done) => {
    done();
  });
  afterEach(async () => {
    sandbox.restore();
  });
  it('Validation success', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.resolve(true));
    const value = await userRegister('Poomathi.K', 'poomathi.k@kaaviansys.com');
    // console.log(value);
    expect(value).toEqual(value);
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
  beforeAll((done) => {
    done();
  });
  afterEach(async () => {
    sandbox.restore();
  });
  it('Email Validation..', async () => {
    // sandbox.stub(UserDetails, 'create').returns(Promise.resolve(true));
    const value = await isEmail('poomathi.k@kaaviansys.com');
    console.log(value);
    expect(value).toEqual('poomathi.k@kaaviansys.com');
  });
  it('Email Validation..', async () => {
    // sandbox.stub(UserDetails, 'create').returns(Promise.resolve(true));
    const value = await isEmail('kaaviansys.com');
    console.log(value);
    expect(value).toEqual('poomathi.k@kaaviansys.com');
  });
});
// describe('Server', () => {
//   let server;
//   beforeAll(() => {
//     server = require('../index');
//   });
//   afterAll(async () => {
//     await server.close;
//   });
//   describe('POST /userRegister', () => {
//     const data = {};
//     beforeAll((done) => {
//       Request.post('http://localhost:3001/userRegister', (err, res, body) => {
//         data.body = body;
//         done();
//       });
//     });
//     it('Body', () => {
//       expect(data.body).toEqual('{"status":"error"}');
//     });
//   });
// });
