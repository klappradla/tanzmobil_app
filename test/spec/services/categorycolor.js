'use strict';

describe('Service: categoryColor', function () {

  // load the service's module
  beforeEach(module('tanzmobilApp'));

  // instantiate service
  var categoryColor;
  beforeEach(inject(function (_categoryColor_) {
    categoryColor = _categoryColor_;
  }));

  it('should do something', function () {
    expect(!!categoryColor).toBe(true);
  });

});
