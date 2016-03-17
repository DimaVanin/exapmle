(function () {
	'use strict';
	angular
		.module('app')
		.controller('mainPageController', ['mainPageService', '$state', mainPageController]);

	function mainPageController(mainPageService, $state) {
		var vm = this;

		vm.showNavigation = false;
		vm.fbLogin = fbLogin;

		init();

		function init(){
			//FB.getLoginStatus(function (response) {
			//	if (response.status === 'connected') {
			//		$state.go('userInfo');
			//		console.log('connected');
			//	} else {
			//		console.log('disconnected');
			//		$state.go('loginFB');
			//	}
			//});
		}

		function fbLogin() {
			mainPageService.fbLogin().then(function () {
				$state.go('userInfo');
			});
		}
	}
})();