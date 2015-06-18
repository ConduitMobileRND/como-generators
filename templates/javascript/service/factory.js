(function (angular) {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .factory('<%= cameledName %>', myFactory);

  myFactory.$inject = ['$http'];

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Factory in the <%= scriptAppName %>.
   */
  function myFactory ($http) {
    var service = {
      getData: getData
    };
    return service;

    function getData() {

    }
  }

})(window.angular);
