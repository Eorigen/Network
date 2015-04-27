(function(){
	var app = angular.module('projectGodzilla', ['ui.router', 'ngAnimate']);

		app.config(function($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise("/index");

			$stateProvider
			    .state('index', {
					url: "/index",
					templateUrl: "home.html",
					controller: 'homeScreenCtrl'
			    })
			    .state('networking', {
			    	url: "/networking",
			     	templateUrl: "networking/index.html",
			     	controller: function($scope){
						$scope.id = null;  
						console.log($scope);
					},
					controllerAs: 'vc'
			    })
			    .state('marketplace', {
			    	url: "/marketplace",
			     	templateUrl: "store/index.html",
			     	controller: function($scope){
						$scope.id = null;  
						console.log($scope);
					},
					controllerAs: 'vc'
			    })
			    .state('marketplace/product', {
			    	url: '/{id:[0-9]{1,8}}',
			     	templateUrl: "store/overview.html",
			     	controller: function($stateParams){
						this.id = $stateParams.id;  
						console.log(this);
					},
					controllerAs: 'vc'
			    })
			    .state('marketplace/checkout', {
			    	url: "/marketplace",
			     	templateUrl: "store/checkout.html"
			    })
			    .state('login', {
					url: "/login",
					templateUrl: "login.html",				
			    });
		});

		app.controller('coreController', function($scope) {
			var cc = this;
				cc.isLoggedIn = 1;
		});

		app.controller('homeScreenCtrl', function(){
			
		});

		app.directive('navbar', function() {
			return {
				restrict: 'E',
				templateUrl: 'navbar.html'
			};
		});


})();