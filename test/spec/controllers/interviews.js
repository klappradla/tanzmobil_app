'use strict';

describe('Controller: InterviewsCtrl', function () {

  // load the controller's module
  beforeEach(module('tanzmobilApp'));

  var InterviewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterviewsCtrl = $controller('InterviewsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
