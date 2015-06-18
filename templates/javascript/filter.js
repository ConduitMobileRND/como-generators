(function (angular) {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .filter('<%= cameledName %>', myFilter);

  /**
   * @ngdoc filter
   * @name <%= scriptAppName %>.filter:<%= cameledName %>
   * @function
   * @description
   * # <%= cameledName %>
   * Filter in the <%= scriptAppName %>.
   */
  function myFilter () {
    return function(input) {
      return '<%= cameledName %> filter: ' + input;
    };
  }
})(window.angular);
