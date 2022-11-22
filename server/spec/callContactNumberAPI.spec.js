/* eslint-disable max-len */
/* eslint-disable no-undef */
const sinon = require('sinon');
const callNumberAPI = require('../API-Test-Functions/callContactNumberAPI');
const callNumberFunction = require('../testFunctions/callContactNumber');

const sandbox = sinon.createSandbox();

describe('Call handlers -', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it(' Getting Call Function', async () => {
    const callNumberStub = sandbox.stub(callNumberFunction, 'callContactNumber').returns({ status: 'success' });
    const mockRequest = { body: { token: 'vijayaharini.j@kaaviansys.com', userName: 'Harini', mobileNum: 9876543210 } };
    const mockResponse = { json: callNumberStub };
    callNumberAPI.callContactNumberAPI(mockRequest, mockResponse);
    // expect(mockRequest).toBe(mockRequest);
    expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success' });
  });
  it(' Getting Call Function', async () => {
    const callNumberStub = sandbox.stub(callNumberFunction, 'callContactNumber').returns({ status: 'Already 1 person for calling is added..' });
    const mockRequest = { body: { token: 'vijayaharini.j@kaaviansys.com', userName: 'Harini', mobileNum: 9876543210 } };
    const mockResponse = { json: callNumberStub };
    callNumberAPI.callContactNumberAPI(mockRequest, mockResponse);
    // expect(mockRequest).toBe(mockRequest);
    expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'Already 1 person for calling is added..' });
  });
  it(' Getting Call Function', async () => {
    const callNumberStub = sandbox.stub(callNumberFunction, 'callContactNumber').returns({ status: 'Please enter valid details' });
    const mockRequest = { body: { token: 'vijayaharini.j@kaaviansys.com', userName: 'Harini', mobileNum: 9876543210 } };
    const mockResponse = { json: callNumberStub };
    callNumberAPI.callContactNumberAPI(mockRequest, mockResponse);
    // expect(mockRequest).toBe(mockRequest);
    expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'Please enter valid details' });
  });
});
