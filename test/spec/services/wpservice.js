'use strict';

describe('Service: WpService', function () {

  // load the service's module
  beforeEach(module('tanzmobilAppApp'));

  // instantiate service
  var WpService;
  beforeEach(inject(function (_WpService_) {
    WpService = _WpService_;
  }));

  it('should do something', function () {
    expect(!!WpService).toBe(true);
  });

});
