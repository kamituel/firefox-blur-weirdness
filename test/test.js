describe('Firefox weirdness.', function() {
  var $scope, compiled;
  var template = '<dir></dir>';

  beforeEach(function() {
    module('templates');
    module('App');

    inject(function($compile, $rootScope) {
      $scope = $rootScope.$new();
      compiled = $compile(template)($scope);
      angular.element(compiled).appendTo(document.body);
      $scope.$apply();
    });
  });

  it('Shows weirdness.', function() {
    var i1 = compiled.find('input[name="i1"]'),
        i2 = compiled.find('input[name="i2"]'),
        executed = false;

    $scope.doStuff = function() {
      executed = true;
    };

    angular.element(i1).focus();
    angular.element(i2).focus();
    expect(executed).to.be.true;
  });
});
