(function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Constant in the <%= scriptAppName %>.
   */
  var CONSTANT = {
    foo:  'bar'
  };

  angular
    .module('<%= scriptAppName %>')
    .constant('<%= cameledName %>', CONSTANT);

})(window.angular);
