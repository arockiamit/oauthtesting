const sinon = require('sinon');
const updateContactApi = require('../API-Test-Functions/updateContactApi')
const updateContactFunction = require('../testFunctions/updateContactNumber')
const sandbox = sinon.createSandbox();

describe("Update Function", () => {
  describe("updateContact 1", () =>{
    afterEach(() => {
      sandbox.restore();
    })

    it("Should return success", () => {
      const mockRequest =  { body: { token:'livingstonimmanuel@gmail.com', contactNumber1: '7339263969' }}
      const mockResponse = { json : sandbox.stub(updateContactFunction, 'updateContactNumber1').returns({ status: 'success', msg: 'Updated Successfully' })};
      updateContactApi.updateContact1( mockRequest, mockResponse );
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success', msg: 'Updated Successfully' })
    })
  })

  describe("updateContact 2", () =>{
    afterEach(() => {
      sandbox.restore();
    })

    it("Should return success", () => {
      const mockRequest =  { body: { token:'livingstonimmanuel@gmail.com', contactNumber2: '7339263969' }}
      const mockResponse = { json : sandbox.stub(updateContactFunction, 'updateContactNumber2').returns({ status: 'success', msg: 'Updated Successfully' }) };
      updateContactApi.updateContact2( mockRequest, mockResponse );
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success', msg: 'Updated Successfully' });
    })
  })
  describe("updateContact 3", () =>{
    afterEach(() => {
      sandbox.restore();
    })

    it("Should return success", () => {
      const mockRequest =  { body: { token:'livingstonimmanuel@gmail.com', contactNumber3: '7339263969' }}
      const mockResponse = { json : sandbox.stub(updateContactFunction, 'updateContactNumber3').returns({ status: 'success', msg: 'Updated Successfully' }) };
      updateContactApi.updateContact3( mockRequest, mockResponse );
      expect(mockResponse.json.getCall(0).returnValue).toEqual({ status: 'success', msg: 'Updated Successfully' });
    })
  })
})
