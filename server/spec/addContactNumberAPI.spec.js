/* eslint-disable no-undef */
const sinon = require('sinon');

const addContactNumberAPI = require('../API-Test-Functions/addContactNumberAPI');
const addContactNumberFunction = require('../testFunctions/addContactNumber');

const sandbox = sinon.createSandbox();

describe('Add Contact Number..', () => {
  afterEach(() => {
    sandbox.restore();
  });
  describe('AddCotact Number API', () => {
    it(' Enter Valid Details', () => {
      const addNumberStub = sandbox.stub(addContactNumberFunction, 'addContactNumber').returns({ status: 'Please enter valid details..' });
      const mockRequest = { body: { token: 'sudha@gmail.com', userName: 'sudha', mobileNumber: 919876543210 } };
      const mockResponse = { json: addNumberStub };
      addContactNumberAPI.addContactNumberAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'Please enter valid details..' });
    });
    it(' Success', () => {
      const addNumberStub = sandbox.stub(addContactNumberFunction, 'addContactNumber').returns({ status: 'success' });
      const mockRequest = { body: { token: 'sudha@gmail.com', userName: 'sudha', mobileNumber: 919876543210 } };
      const mockResponse = { json: addNumberStub };
      addContactNumberAPI.addContactNumberAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success' });
    });
    it(' Validation Check', () => {
      const addNumberStub = sandbox.stub(addContactNumberFunction, 'addContactNumber').returns({ status: 'Already 3 users have been added' });
      const mockRequest = { body: { token: 'sudha@gmail.com', userName: 'sudha', mobileNumber: 919876543210 } };
      const mockResponse = { json: addNumberStub };
      addContactNumberAPI.addContactNumberAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'Already 3 users have been added' });
    });
    it(' Validation Check', () => {
      const addNumberStub = sandbox.stub(addContactNumberFunction, 'addContactNumber').returns({ status: 'Please Enter all fields..' });
      const mockRequest = { body: { token: 'sudha@gmail.com', userName: 'sudha', mobileNumber: 919876543210 } };
      const mockResponse = { json: addNumberStub };
      addContactNumberAPI.addContactNumberAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'Please Enter all fields..' });
    });
  });
});
