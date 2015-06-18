(function (angular) {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', MyController);

  MyController.$inject = ['$scope'];

  /**
   * @ngdoc function
   * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
   * @description
   * # <%= classedName %>Ctrl
   * Controller of the <%= scriptAppName %>
   */
  function MyController ($scope) {
    $scope.title = 'MyController';

    activate();

    function activate() {

    }
  }
})(window.angular);
