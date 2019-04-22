
(function () {
    var app = angular.module('patterns');
    app.controller('MaterialController', MaterialController);
    MaterialController.$inject = ['$scope'];
    function MaterialController($scope) {
        init();
        function init() {
			$scope.demo = {
			  showTooltip : false,
			  tipDirection : ''
			};

			$scope.demo.delayTooltip = undefined;
			$scope.$watch('demo.delayTooltip',function(val) {
			  $scope.demo.delayTooltip = parseInt(val, 10) || 0;
			});

			$scope.$watch('demo.tipDirection',function(val) {
			  if (val && val.length ) {
				$scope.demo.showTooltip = true;
			  }
			})
        }
    }
  })();
