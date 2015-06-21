'use strict';

describe('Directive: interviewBox', function () {

  // load the directive's module
  beforeEach(module('tanzmobilApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<interview-box></interview-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the interviewBox directive');
  }));
});
