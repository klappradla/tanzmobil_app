'use strict';

describe('Directive: backgroundColor', function () {

  // load the directive's module
  beforeEach(module('tanzmobilApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<background-color></background-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backgroundColor directive');
  }));
});
