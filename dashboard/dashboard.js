'use strict';

angular
	.module('myApp.dashboard', ['ui.router','chart.js'])
	.config(['$stateProvider','ChartJsProvider', function($stateProvider,ChartJsProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/dashboard/dashboard.html',
				controller: 'DashboardCtrl as dashCtrl'
			});
		ChartJsProvider.setOptions({
			chartColors: ['#FF5252', '#FF8A80'],
			responsive: true
		});
		// Configure all line charts
		ChartJsProvider.setOptions('line', {
			showLines: true
		});
	}])
	.controller('DashboardCtrl', dashboardCtrl);

dashboardCtrl.$inject = ["$http", "$rootScope"];
function dashboardCtrl($http, $rootScope){
	var vm = this;
	vm.name = 'Sudipta';
	vm.rate = 4.1;

	vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
	vm.series = ['Series A'];
	vm.data = [
		[5000,6000,4300,4000,5300,6700,5700]
	];
	vm.onClick = function (points, evt) {
		console.log(points, evt);
	};
	vm.datasetOverride = [{ yAxisID: 'y-axis-1' }];
	vm.options = {
		scales: {
			yAxes: [
				{
					id: 'y-axis-1',
					type: 'linear',
					display: true,
					position: 'left',
					spanGaps : true
				}
			]
		}
	};
}