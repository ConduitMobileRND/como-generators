(function(angular) {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', myDirective);

  myDirective.$inject = ['$window'];

  /**
   * @ngdoc directive
   * @name <%= scriptAppName %>.directive:<%= cameledName %>
   * @description
   * # <%= cameledName %>
   */
  function myDirective ($window) {
    var directive = {
      template: '<div></div>',
      link: link,
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      element.text('this is the <%= cameledName %> directive');
    }
  }

})(window.angular);
