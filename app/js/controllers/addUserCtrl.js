(function() {

	'use strict';

	let addUserCtrl = function($mdDialog) {
		let vm = this;

		vm.cancel = () => {
			$mdDialog.cancel();
		}

		vm.save = () => {
			$mdDialog.hide();
		}


	};

	angular.module('app').controller('addUserCtrl', addUserCtrl);

})();