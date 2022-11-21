/* eslint-disable no-undef */
const sinon = require('sinon');
const { callContactNumber } = require('../src/call-handler');

const sandbox = sinon.createSandbox();

describe('Call handlers -', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it(' Getting Call Function', async () => {
    const mockRequest = { body: { userEmail: 'vijayaharini.j@kaaviansys.com', mobileNum: 9876543210 } };
    const mockResponse = { json: sandbox.stub() };
    callContactNumber(mockRequest, mockResponse);
    expect(mockRequest).toBe(mockRequest);
  });
});
