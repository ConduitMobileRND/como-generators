(function (angular) {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', MyService);

  MyService.$inject = ['$http'];

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= cameledName %>
   * @description
   * # <%= cameledName %>
   * Service in the <%= scriptAppName %>.
   */
  function MyService ($http) {
    this.getData = getData;

    function getData() { }
  }

})(window.angular);
