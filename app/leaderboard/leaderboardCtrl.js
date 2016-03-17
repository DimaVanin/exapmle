(function () {
	'use strict';
	angular
		.module('app')
		.controller('leaderboardCtrl', ['userService','leaderboard', leaderboardCtrl]);

	function leaderboardCtrl(userService,leaderboard) {
		var vm = this;

		init();

		function init() {
			vm.leaderboard = leaderboard;
		}
	}
})();