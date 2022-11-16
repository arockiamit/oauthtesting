/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const sinon = require('sinon');
// const Request = require('request');
const { userRegister } = require('../testFunctions/userRegister');
const { UserDetails } = require('../schema');

const sandbox = sinon.createSandbox();

describe('userRegister', () => {
  afterEach(async () => {
    sandbox.restore();
  });
  it('Getting and Storing values in DB..', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.resolve(true));
    // sandbox.stub(UserDetails, 'create').resolves(true);
    const value = await userRegister('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('success');
    expect(value.email).toEqual('poomathi.k@kaaviansys.com');
  });
  it('Error Testing..', async () => {
    sandbox.stub(UserDetails, 'create').returns(Promise.reject(new Error('User Registration Failed..')));
    const value = await userRegister('Poomathi.K', 'poomathi.k@kaaviansys.com');
    expect(value.status).toEqual('error');
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
