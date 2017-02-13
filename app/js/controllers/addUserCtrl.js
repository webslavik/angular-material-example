(function() {

	'use strict';

	let addUserCtrl = function($mdDialog) {
		let vm = this;

		vm.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4', 'svg-5', 'svg-6', 'svg-7', 'svg-8', 'svg-9'];

		vm.cancel = () => {
			$mdDialog.cancel();
		}

		vm.save = () => {
			$mdDialog.hide(vm.user);
		}


	};

	angular.module('app').controller('addUserCtrl', addUserCtrl);

})();