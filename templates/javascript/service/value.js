(function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Value in the <%= scriptAppName %>.
   */
  var value = {
    foo:  'bar'
  };

  angular
    .module('<%= scriptAppName %>')
    .value('<%= cameledName %>', value);

})(window.angular);
