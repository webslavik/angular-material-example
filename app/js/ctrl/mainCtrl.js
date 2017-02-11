(function() {

	'use strict';

	let mainCtrl = function($mdSidenav) {
		let vm = this;

		vm.toggleSidenav = () => {
			$mdSidenav('left').toggle();
		}

	}

	angular.module('app').controller('mainCtrl', mainCtrl);

})();