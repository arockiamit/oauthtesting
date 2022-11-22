/* eslint-disable no-undef */
const sinon = require('sinon');
const registerUser = require('../testFunctions/userRegister');
const registerAPI = require('../API-Test-Functions/userRegisterAPI');

const sandbox = sinon.createSandbox();

describe('Server Apis - ', () => {
  afterEach(() => {
    sandbox.restore();
  });
  describe('UserRegister Api', () => {
    it('User Register Success Response..', async () => {
      const userRegisterStub = sandbox.stub(registerUser, 'userRegister').returns({ status: 'success', email: 'poomathi.k@kaaviansys.com' });
      const mockRequest = { body: { name: 'Poomathi.K', email: 'poomathi.k@kaaviansys.com' } };
      const mockResponse = { json: userRegisterStub };
      registerAPI.userRegisterAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success', email: 'poomathi.k@kaaviansys.com' });
    });
    it('Invalid email Response..', async () => {
      const userRegisterStub = sandbox.stub(registerUser, 'userRegister').returns('Enter Valid Mail..');
      const mockRequest = { body: { name: 'Poomathi.K', email: 'poomathi.k.kaavian' } };
      const mockResponse = { json: userRegisterStub };
      registerAPI.userRegisterAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual('Enter Valid Mail..');
    });
    it('Error Response..', async () => {
      const userRegisterStub = sandbox.stub(registerUser, 'userRegister').returns({ status: 'error' });
      const mockRequest = { body: { name: undefined, email: 'poomathi.k@kaaviansys.com' } };
      const mockResponse = { json: userRegisterStub };
      registerAPI.userRegisterAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'error' });
    });
  });
});
