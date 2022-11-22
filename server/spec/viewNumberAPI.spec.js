/* eslint-disable no-undef */
const sinon = require('sinon');
const viewContactNumberFunction = require('../testFunctions/viewContactNumber');
const viewContactNumberAPI = require('../API-Test-Functions/viewContactNumberAPI');

const sandbox = sinon.createSandbox();

describe('viewContactnumbers -', () => {
  describe('Add middleware', () => {
    afterEach(() => {
      sandbox.restore();
    });

    it('should return the status success', () => {
      const mockRequest = { body: { token: 'arockiaraj.j@kaaviansys.com' } };
      const mockResponse = { json: sandbox.stub(viewContactNumberFunction, 'viewNumber').returns({ status: 'success' }) };
      viewContactNumberAPI.viewContactAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success' });
    });

    it('should return the status failure', () => {
      const viewNumberStub = sandbox.stub(viewContactNumberFunction, 'viewNumber').returns({ status: 'failure' });
      const mockRequest = { body: { token: 'arockiaraj.j@kaaviansys.com' } };
      const mockResponse = { json: viewNumberStub };
      viewContactNumberAPI.viewContactAPI(mockRequest, mockResponse);
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'failure' });
    });
  });
});
